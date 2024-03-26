import { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { TableCell } from '@/components/ui/table';

// Define o tipo para os dados de uma linha da sua planilha
type SheetDataRow = Record<string, string>;

// Atualizando o tipo para as props do componente para incluir `header`
interface Props {
  unit: string;
  header: string; // Nova prop para especificar a coluna desejada
}

// Usando a interface Props para tipar as props do componente, incluindo a nova prop `header`
export default function TableCellComponent({ unit, header }: Props) {
  const [cellValue, setCellValue] = useState<string | null>(null);

  useEffect(() => {
    async function fetchSheetData() {
      const response = await fetch('https://docs.google.com/spreadsheets/d/e/2PACX-1vQJ14r-9oGOc-akCnEUymf0kEUOFeCL4SCAK_6wYE76nrielo1mZ8BT2woUCtsT3bq2fEI_nIdZbnAQ/pub?gid=0&single=true&output=csv');
      const text = await response.text();
      Papa.parse(text, {
        header: true,
        complete: (result) => {
          const data: SheetDataRow[] = result.data as SheetDataRow[];
          const filteredData = data.filter(entry => entry.location === unit);
          if (filteredData.length > 0) {
            filteredData.sort((a, b) => b.stamp.localeCompare(a.stamp));
            // Atualiza para usar o header específico ao invés de sempre usar `stamp`
            const mostRecentEntry = filteredData[0][header];
            setCellValue(mostRecentEntry ? mostRecentEntry : 'Dados não encontrados');
          } else {
            setCellValue('Não encontrado');
          }
        }
      });
    }

    fetchSheetData();
  }, [unit, header]); // Incluindo `header` nas dependências

  // Se o valor da célula já estiver no formato desejado, ou não necessitar de formatação adicional, você pode retornar diretamente
  return (
    <TableCell className='text-xs'>{cellValue || 'Carregando...'}</TableCell>
  );
}
