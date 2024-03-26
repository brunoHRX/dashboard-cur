import { useQuery } from 'react-query';
import Papa from 'papaparse';
import { TableCell } from '@/components/ui/table';

type SheetDataRow = Record<string, string>;

interface Props {
  censoType: string;
  unit: string;
}

// Função auxiliar para formatar a data
function formatStamp(stamp: string) {
  if (!stamp) return 'Data não disponível';
  const parts = stamp.split(', ');
  const date = parts[0]; // "DD/MM/YYYY"
  const time = parts[1].substring(0, 5); // "HH:MM"
  return `${date.substring(0, 5)} - ${time}`; // "DD/MM - HH:MM"
}

// Função para buscar e processar os dados
const fetchAndFormatData = async (censoType: string, unit: string) => {
  const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ14r-9oGOc-akCnEUymf0kEUOFeCL4SCAK_6wYE76nrielo1mZ8BT2woUCtsT3bq2fEI_nIdZbnAQ/pub?gid=0&single=true&output=csv');
  const text = await response.text();
  return new Promise<string>((resolve) => {
    Papa.parse(text, {
      header: true,
      complete: (result) => {
        const data: SheetDataRow[] = result.data as SheetDataRow[];
        const filteredData = data.filter(entry => entry.censo === censoType && entry.location === unit);
        filteredData.sort((a, b) => b.stamp.localeCompare(a.stamp));
        for (const entry of filteredData) {
          if (entry.stamp?.trim()) {
            resolve(formatStamp(entry.stamp));
            return;
          }
        }
        resolve('Não encontrado');
      }
    });
  });
};

export default function TableRowComponent({ censoType, unit }: Props) {
  const { data: formattedStamp, isLoading, error } = useQuery(
    ['sheetData', censoType, unit],
    () => fetchAndFormatData(censoType, unit),
    {
      staleTime: 1000 * 60 * 5, // Dados ficam frescos por 5 minutos
      refetchInterval: 1000 * 60 * 2, // Refetch a cada 2 minutos
      refetchOnWindowFocus: true, // Refetch quando a janela ou aba ganha foco novamente
    }
  );

  if (isLoading) return <TableCell>Carregando...</TableCell>;
  if (error) return <TableCell>Erro ao carregar dados</TableCell>;

  return <TableCell className='flex justify-center'>{formattedStamp}</TableCell>;
}
