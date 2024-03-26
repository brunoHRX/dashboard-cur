import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TableCellComponent from './TableCellComponent';


export default function TeamTable() {
  return (
    <div className="p-2 max-w-5xl w-full">
      <div className="border rounded">
        <Table>
          <TableHeader>
          <TableHead className='text-center'>UNID.</TableHead>
          <TableHead className='text-center'>CLIN. PREVISTO</TableHead>
          <TableHead className='text-center'>CLIN. REAL</TableHead>
          <TableHead className='text-center'>INF. PREVISTO</TableHead>
          <TableHead className='text-center'>INF. REAL</TableHead>
          </TableHeader>
          <TableBody className='border-t-2'>
            <TableRow>
              <TableCell className='text-center'>ALM</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"clinicoReal"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"infantilPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"infantilReal"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>CEL</TableCell>
              <TableCell>
              <TableCellComponent unit={"UPA CORONEL"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"clinicoReal"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"infantilPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"infantilReal"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>LEB</TableCell>
              <TableCell>
              <TableCellComponent unit={"UPA LEBLON"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"clinicoReal"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"infantilPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"infantilReal"} />
              </TableCell>         
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>MOR</TableCell>
              <TableCell>
              <TableCellComponent unit={"UPA MORENINHAS"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"clinicoReal"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"infantilPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"infantilReal"} />
              </TableCell>   
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>UNI</TableCell>
              <TableCell>
              <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"clinicoReal"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"infantilPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"infantilReal"} />
              </TableCell>  
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>SMO</TableCell>
              <TableCell>
              <TableCellComponent unit={"UPA SANTA"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"clinicoReal"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"infantilPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"infantilReal"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>COP</TableCell>
              <TableCell>
              <TableCellComponent unit={"CRS COOPHAVILA"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"clinicoReal"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"infantilPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"infantilReal"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>NBA</TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"clinicoReal"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"infantilPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"infantilReal"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>AER</TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"clinicoReal"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"infantilPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"infantilReal"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>TIR</TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"clinicoReal"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"infantilPrev"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"infantilReal"} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}