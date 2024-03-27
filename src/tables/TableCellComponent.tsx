import { useQuery } from 'react-query';
import Papa from 'papaparse';


// Define o tipo para os dados de uma linha da sua planilha
type SheetDataRow = Record<string, string>;

interface Props {
  unit: string;
  header: string; // Nova prop para especificar a coluna desejada
}


// Função para buscar os dados da planilha e processá-los
async function fetchSheetData(unit: string): Promise<SheetDataRow[]> {
  const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ14r-9oGOc-akCnEUymf0kEUOFeCL4SCAK_6wYE76nrielo1mZ8BT2woUCtsT3bq2fEI_nIdZbnAQ/pub?gid=0&single=true&output=csv');
  const text = await response.text();
  return new Promise((resolve) => {
    Papa.parse(text, {
      header: true,
      complete: (result) => {
        resolve(result.data as SheetDataRow[]);
      }
    });
    unit
  });
}
export default function TableCellComponent({ unit, header }: Props) {
  const { data, isLoading, error } = useQuery(['sheetData', unit], () => fetchSheetData(unit), {
    // A função de seleção é usada para filtrar e ordenar os dados após a busca
    select: (data) => {
      const filteredData = data.filter(entry => entry.location === unit);
      if (filteredData.length > 0) {
        filteredData.sort((a, b) => b.stamp.localeCompare(a.stamp));
        for (let entry of filteredData) {
          if (entry[header]?.trim()) {
            return entry[header];
          }
        }
        return 'Dados não encontrados';
      }
      return 'Não encontrado';
    },
    refetchInterval: 60000, // Refetch a cada 60 segundos
    refetchOnWindowFocus: true, // Refetch quando a janela ou aba ganha foco novamente
  });

  // Aqui, você pode usar isLoading e error para controlar a renderização
  if (isLoading) return <div>Carregando...</div>;
  if (error instanceof Error) return <div>Erro ao buscar dados</div>;

  return (
    <div className='flex justify-center text-xs'>{data}</div>
  );
}
