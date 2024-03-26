import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { TableCell } from '@/components/ui/table';

// Define o tipo para os dados de uma linha da sua planilha
type SheetDataRow = Record<string, string>;

// Definindo o tipo para as props do componente
interface Props {
  censoType: string;
  unit: string;
}

// Usando a interface Props para tipar as props do componente
export default function TableRowComponent({ censoType, unit }: Props) {
  const [stampValue, setStampValue] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSheetData() {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ14r-9oGOc-akCnEUymf0kEUOFeCL4SCAK_6wYE76nrielo1mZ8BT2woUCtsT3bq2fEI_nIdZbnAQ/pub?gid=0&single=true&output=csv');
      const text = await response.text();
      Papa.parse(text, {
        header: true,
        complete: (result) => {
          const data: SheetDataRow[] = result.data as SheetDataRow[];
          // Filtra os dados baseado na unidade e no tipo de censo fornecidos
          const filteredData = data.filter(entry => entry.censo === censoType && entry.location === unit);
          // Ordena os dados filtrados baseado na coluna `stamp` em ordem decrescente
          if (filteredData.length > 0) {
            filteredData.sort((a, b) => b.stamp.localeCompare(a.stamp));
            // Define o valor de `stamp` para a entrada mais recente
            setStampValue(filteredData[0].stamp);
          } else {
            // Se não encontrar nenhuma entrada correspondente, limpa o valor de `stamp`
            setStampValue(null);
          }
        }
      });
    }

    fetchSheetData();
  }, [censoType, unit]);
  
  function formatStamp(stamp:string) {
    // Checa se stamp não é null
    if (!stamp) return null;
    
    const parts = stamp.split(', '); // Divide a data da hora
    const date = parts[0]; // "DD/MM/YYYY"
    const time = parts[1].substring(0, 5); // "HH:MM"
    return `${date.substring(0, 5)} - ${time}`; // "DD/MM - HH:MM"
  }// Dependências para re-fetch se censoType ou unit mudarem

  // Renderiza apenas o valor de `stamp` ou um placeholder
  return (
    <TableCell className='flex justify-center'>{stampValue ? formatStamp(stampValue) : 'Carregando...'}</TableCell>
  );
}
