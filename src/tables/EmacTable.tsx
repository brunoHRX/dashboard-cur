import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';


interface UnidadeData {
  unidade: string;
  created_at: string;
  acionamento: string;
  motivo: string;

}

const EmacTable: React.FC = () => {
  const [data, setData] = useState<UnidadeData[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    const { data: unidadeData, error } = await supabase
      .from('emac')
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
  };

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
    <div className="p-2 max-w-5xl w-full">
      <div className="border rounded">
      <Table className='bg-cur-dark-orange'>
          <TableHeader className='w-full'>
            <TableHead className='text-center text-cur-offwhite border-2'>PAINEL DE SOLICITAÇÕES EMAC</TableHead>
          </TableHeader>
        </Table>
        <Table className='bg-background'>
        <TableHeader className=' w-full bg-cur-dark'>
          <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>UNID.</TableHead>
          <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>ACIONAMENTO EMAC</TableHead>
        </TableHeader>
          <TableBody className='p-0 border-t-2 text-center'>
            {data.map((unidade, index) => (
              <TableRow key={index} className="p-0 border-t">
                <TableCell className='border-r-2 border-l-2 font-bold justify-center  bg-cur-dark'>{unidade.unidade ? filterName(unidade.unidade) : unidade.unidade}</TableCell>
                <TableCell className={`p-0.5 border-r-2 border-l-2 font-bold justify-center ${getTimeDifferenceClass(unidade.created_at)}`}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" className='rounded-none font-bold justify-center w-full'>
                      <div>
                        {unidade.created_at ? formatDate(unidade.created_at) : 'N/A'}
                      </div>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Motivo de Acionamento</DialogTitle>
                    <DialogDescription>
                    <div className='flex justify-center text-xs font-bold'>{unidade.motivo}</div>
                    <div className="flex flex-row items-center justify-center justify-items-center">
                      <p className='mt-4'>Enviado:  {unidade.created_at ? formatDate(unidade.created_at) : 'N/A'}</p>
                    </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default EmacTable;