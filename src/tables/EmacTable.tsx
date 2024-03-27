import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TableEMACComponent from './TableEMACComponent';




export default function EmacTable() {
  return(
    <div className='p-2 max-w-4xl w-full'>
      <div className='border rounded'>
        <Table className='bg-cur-dark-orange'>
          <TableHeader className='w-full'>
            <TableHead className='text-center text-cur-offwhite border-2'>PAINEL DE SOLICITAÇÕES EMAC</TableHead>
          </TableHeader>
        </Table>
        <Table className='bg-background '>
          <TableHeader className='w-full bg-cur-dark '>
            <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>UNID.</TableHead>
            <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>ACIONAMENTO EMAC</TableHead>
          </TableHeader>
          <TableBody className='border-t-2'>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2 p-0'>ALM</TableCell>
              <TableEMACComponent unit={"UPA ALMEIDA"} censoType={"EMAC"} />
            </TableRow>            
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>CEL</TableCell>
              <TableEMACComponent unit={"UPA ALMEIDA"} censoType={"EMAC"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>LEB</TableCell>
              <TableEMACComponent unit={"UPA LEBLON"} censoType={"EMAC"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>MOR</TableCell>
              <TableEMACComponent unit={"UPA MORENINHAS"} censoType={"EMAC"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>UNI</TableCell>
              <TableEMACComponent unit={"UPA UNIVERSITARIO"} censoType={"EMAC"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>SMO</TableCell>
              <TableEMACComponent unit={"UPA SANTA"} censoType={"EMAC"} />
            </TableRow>            
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>COP</TableCell>
              <TableEMACComponent unit={"CRS COOPHAVILA"} censoType={"EMAC"} />
            </TableRow>           
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>NBA</TableCell>
              <TableEMACComponent unit={"CRS NOVA"} censoType={"EMAC"} />
            </TableRow>           
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>AER</TableCell>
              <TableEMACComponent unit={"CRS AERO"} censoType={"EMAC"} />
            </TableRow>           
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>TIR</TableCell>
              <TableEMACComponent unit={"CRS TIRADENTES"} censoType={"EMAC"} />
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}