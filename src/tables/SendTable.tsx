import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

interface UnidadeData {
  unidade: string;
  ultimo_envio_geral: string;
  ultimo_envio_fichas: string;
  ultimo_envio_equipe: string;
  ultimo_envio_equipamento: string;
}

const UnidadeTable: React.FC = () => {
  const [data, setData] = useState<UnidadeData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    console.log('Fetching data...');
    const { data: unidadeData, error } = await supabase
      .from('ultimo_envio_por_unidade')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
    } else {
      console.log('Data fetched:', unidadeData);
      setData(unidadeData as UnidadeData[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    const channel = supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: 'INSERT', schema: 'public', table: 'bd_censo_cur' },
        (payload) => {
          console.log('Change received!', payload);
          fetchData(); // Fetch the data again to update the state
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const getTimeDifferenceClass = (time: string) => {
    const currentTime = new Date();
    const targetTime = new Date(time);
    const diffInHours = (currentTime.getTime() - targetTime.getTime()) / (1000 * 60 * 60);

    if (diffInHours < 1) {
      return 'bg-cur-green';
    } else if (diffInHours < 2) {
      return 'bg-cur-yellow';
    } else {
      return 'bg-cur-madder';
    }
  };

  const filterName = (unidade: string) => {
    const unitNames: { [key: string]: string } = {
      'CRS AERO': 'AER',
      'CRS COOPHAVILA': 'COP',
      'CRS NOVA': 'NBA',
      'CRS TIRADENTES': 'TIR',
      'UPA ALMEIDA': 'ALM',
      'UPA CORONEL': 'CEL',
      'UPA LEBLON': 'LEB',
      'UPA MORENINHAS': 'MOR',
      'UPA SANTA': 'SMO',
      'UPA UNIVERSITARIO': 'UNI',
    };
    return unitNames[unidade] || unidade;
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');

    return `${day}/${month} - ${hours}:${minutes}`;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='p-2 max-w-5xl w-full'>
      <div className="border rounded">
        <Table className='bg-cur-dark-orange'>
          <TableHeader className='w-full'>
            <TableHead className='text-center text-cur-offwhite border-2'>PAINEL DE ENVIO DOS CENSOS</TableHead>
          </TableHeader>
        </Table>
        <Table className='bg-background'>
          <TableHeader className=' w-full bg-cur-dark'>
            <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>UNID.</TableHead>
            <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>GERAL</TableHead>
            <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>C.R.</TableHead>
            <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>MÉDICOS</TableHead>
            <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>EQUIPAMENTOS</TableHead>
          </TableHeader>
          <TableBody className='p-0.5 border-t-2 text-center'>
            {data.map((unidade, index) => (
              <TableRow key={index} className="py-2 border-t">
                <TableCell className='border-r-2 border-l-2 font-bold justify-center'>{filterName(unidade.unidade)}</TableCell>
                <TableCell className={`p-0 border-r-2 border-l-2 font-bold justify-center ${getTimeDifferenceClass(unidade.ultimo_envio_geral)}`}>
                  {unidade.ultimo_envio_geral ? formatDate(unidade.ultimo_envio_geral) : 'N/A'}
                </TableCell>
                <TableCell className={`p-0 border-r-2 border-l-2 font-bold justify-center ${getTimeDifferenceClass(unidade.ultimo_envio_fichas)}`}>
                  {unidade.ultimo_envio_fichas ? formatDate(unidade.ultimo_envio_fichas) : 'N/A'}
                </TableCell>
                <TableCell className={`p-0 border-r-2 border-l-2 font-bold justify-center ${getTimeDifferenceClass(unidade.ultimo_envio_equipe)}`}>
                  {unidade.ultimo_envio_equipe ? formatDate(unidade.ultimo_envio_equipe) : 'N/A'}
                </TableCell>
                <TableCell className={`p-0 border-r-2 border-l-2 font-bold justify-center ${getTimeDifferenceClass(unidade.ultimo_envio_equipamento)}`}>
                  {unidade.ultimo_envio_equipamento ? formatDate(unidade.ultimo_envio_equipamento) : 'N/A'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UnidadeTable;
