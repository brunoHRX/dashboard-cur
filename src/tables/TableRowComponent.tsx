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
  const parts = stamp.split(/,\s*|\s+/);
  const date = parts[0]; // "DD/MM/YYYY"
  const time = parts[1].substring(0, 5); // "HH:MM"
  return `${date.substring(0, 5)} - ${time}`; // "DD/MM - HH:MM"
}

// Função para converter formattedStamp para um objeto Date
function formatStampToDateTime(stamp: string) {
  const [date, time] = stamp.split(' - ');
  const [day, month] = date.split('/');
  const [hour, minute] = time.split(':');
  const year = new Date().getFullYear(); // Assume o ano atual
  return new Date(year, parseInt(month) - 1, parseInt(day), parseInt(hour), parseInt(minute));
}

// Função para determinar a classe de cor baseada na diferença de horas
function determineColorClass(formattedStamp: string): string {
  if (formattedStamp === 'Não encontrado' || formattedStamp === 'Data não disponível') {
    return 'bg-cur-madder'; // Vermelho para quando não for encontrado ou não disponível
  }
  const stampDateTime = formatStampToDateTime(formattedStamp);
  const now = new Date();
  const diffHours = (now.getTime() - stampDateTime.getTime()) / (1000 * 60 * 60); // Diferença em horas
  
  if (diffHours < 1) {
    return 'bg-cur-green'; // Verde para menos de 1 hora
  } else if (diffHours < 2) {
    return 'bg-cur-yellow'; // Amarelo para menos de 2 horas
  } else {
    return 'bg-cur-madder'; // Vermelho para 2 horas ou mais
  }
  
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
      // staleTime: 1000 * 60 * 2, // Dados ficam frescos por 2 minutos
      refetchInterval: 1000 * 60 * 3, // Refetch a cada 3 minutos
      refetchOnWindowFocus: true, // Refetch quando a janela ou aba ganha foco novamente
    },
    );
    // Determina a classe de cor baseado no valor de formattedStamp
    const colorClass = formattedStamp ? determineColorClass(formattedStamp) : ''
    
  if (isLoading) return <TableCell>Carregando...</TableCell>;
  if (error) return <TableCell>Erro ao carregar dados</TableCell>;
    console.log(error)
  

  return <TableCell className={`border-r-2 border-l-2 font-bold justify-center ${colorClass}`}>
    <div>
      {formattedStamp}
    </div>
  </TableCell>
}
