import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TableCellComponent from './TableCellComponent';


export default function TeamTable() {
  return (
    <div className="p-2 max-w-5xl w-full">
      <div className="border rounded">
        <Table className='bg-cur-dark-orange'>
          <TableHeader className='w-full'>
            <TableHead className='text-center text-cur-offwhite border-2'>PAINEL - CLÍNICOS & INFANTIL</TableHead>
          </TableHeader>
        </Table>
        <Table className='bg-background'>
          <TableHeader className=' w-full bg-cur-dark'>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>UNID.</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>CLIN. PREVISTO</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>CLIN. REAL</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>INF. PREVISTO</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>INF. REAL</TableHead>
          </TableHeader>
          <TableBody className='border-t-2'>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>ALM</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"clinicoReal"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"infantilPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"infantilReal"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-l-2'>CEL</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
              <TableCellComponent unit={"UPA CORONEL"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA CORONEL"} header={"clinicoReal"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA CORONEL"} header={"infantilPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA CORONEL"} header={"infantilReal"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-l-2'>LEB</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
              <TableCellComponent unit={"UPA LEBLON"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA LEBLON"} header={"clinicoReal"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA LEBLON"} header={"infantilPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA LEBLON"} header={"infantilReal"} />
              </TableCell>         
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-l-2'>MOR</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
              <TableCellComponent unit={"UPA MORENINHAS"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"clinicoReal"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"infantilPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"infantilReal"} />
              </TableCell>   
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-l-2'>UNI</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
              <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"clinicoReal"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"infantilPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"infantilReal"} />
              </TableCell>  
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-l-2'>SMO</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
              <TableCellComponent unit={"UPA SANTA"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA SANTA"} header={"clinicoReal"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA SANTA"} header={"infantilPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA SANTA"} header={"infantilReal"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-l-2'>COP</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
              <TableCellComponent unit={"CRS COOPHAVILA"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"clinicoReal"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"infantilPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"infantilReal"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-l-2'>NBA</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"clinicoReal"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"infantilPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"infantilReal"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-l-2'>AER</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"clinicoReal"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"infantilPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"infantilReal"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-l-2'>TIR</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"clinicoPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"clinicoReal"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"infantilPrev"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"infantilReal"} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}