import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';


interface UnidadeData {
  unidade: string;
  fichas_ad_cr: string;
  fichas_ad_amarela: string;
  fichas_ad_verde: string;
  fichas_ad_azul: string;
  espera_ad_amarela: string;
  espera_ad_verde: string;
  espera_ad_azul: string;
  fichas_ad_fastrack: string;
}

const AdultTable: React.FC = () => {
  const [data, setData] = useState<UnidadeData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data: unidadeData, error } = await supabase
      .from('fichas_ad')
      .select('*');

    if (error) {
      console.error('Error fetching data:', error);
    } else {
      setData(unidadeData as UnidadeData[]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();

    const channel = supabase.channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'bd_censo_cur' },
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

  const filterName = (unidade: string) => {
    switch (unidade) {
      case 'CRS AERO' :
        return 'AER';
        break;
      case 'CRS COOPHAVILA' :
        return 'COP';
        break;
      case 'CRS NOVA' :
        return 'NBA';
        break;
      case 'CRS TIRADENTES' :
        return 'TIR';
        break;
      case 'UPA ALMEIDA' :
        return 'ALM';
        break;
      case 'UPA CORONEL' :
        return 'CEL';
        break;
      case 'UPA LEBLON' :
        return 'LEB';
        break;
      case 'UPA MORENINHAS' :
        return 'MOR';
        break;
      case 'UPA SANTA' :
        return 'SMO';
        break;
      case 'UPA UNIVERSITARIO' :
        return 'UNI';
        break;
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-2 max-w-5xl w-full">
      <div className="border rounded">
      <Table className='bg-cur-dark-orange'>
          <TableHeader className='w-full'>
            <TableHead className='text-center text-cur-offwhite border-2'>PAINEL DE FICHAS - ATENDIMENTO ADULTO</TableHead>
          </TableHeader>
        </Table>
        <Table className='bg-background'>
          <TableHeader className=' w-full bg-cur-dark'>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>UNID.</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>AG.CLAS</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>F.AMARELAS</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>F.VERDES</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>F.AZUIS</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>T. AMARELAS</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>T. VERDES</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>T. AZUIS</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>F-TRACK</TableHead>
          </TableHeader>
          <TableBody className='border-t-2 text-center'>
            {data.map((unidade, index) => (
              <TableRow key={index} className="border-t">
                <TableCell className='border-r-2 border-l-2 font-bold justify-center  bg-cur-dark'>{unidade.unidade ? filterName(unidade.unidade) : unidade.unidade}</TableCell>
                <TableCell className='border-r-2 border-l-2 font-bold justify-center bg-cur-grey text-cur-dark'>
                  {unidade.fichas_ad_cr}
                </TableCell>
                <TableCell className='border-r-2 border-l-2 font-bold justify-center bg-cur-dark-yellow'>
                  {unidade.fichas_ad_amarela}
                </TableCell>
                <TableCell className='border-r-2 border-l-2 font-bold justify-center bg-cur-dark-green'>
                  {unidade.fichas_ad_verde}
                </TableCell>
                <TableCell className='border-r-2 border-l-2 font-bold justify-center bg-cur-blue-ligth'>
                  {unidade.fichas_ad_azul}
                </TableCell>
                <TableCell className='border-r-2 border-l-2 font-bold justify-center bg-cur-dark-yellow'>
                  {unidade.espera_ad_amarela}
                </TableCell>
                <TableCell className='border-r-2 border-l-2 font-bold justify-center bg-cur-dark-green'>
                  {unidade.espera_ad_verde}
                </TableCell>
                <TableCell className='border-r-2 border-l-2 font-bold justify-center bg-cur-blue-ligth'>
                  {unidade.espera_ad_azul}
                </TableCell>
                <TableCell className='border-r-2 border-l-2 font-bold justify-center  bg-cur-grey text-cur-dark'>
                  {unidade.fichas_ad_fastrack}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AdultTable;