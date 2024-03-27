

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import TableRowComponent from './TableRowComponent';



export default function SendTable() {

  return (
    <div className='p-2 max-w-5xl w-full'>
      <div className="border rounded">
        <Table className='bg-cur-dark-orange'>
          <TableHeader className='w-full'>
            <TableHead className='text-center text-cur-offwhite border-2'>PAINEL DE ENVIO DOS CENSOS</TableHead>
          </TableHeader>
        </Table>
        <Table className='bg-background'>
          <TableHeader className=' w-full bg-cur-dark'>
            <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>UNID.</TableHead>
            <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>GERAL</TableHead>
            <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>C.R.</TableHead>
            <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>MED.</TableHead>
            <TableHead className='text-center text-cur-offwhite border-r-2 border-l-2'>EQUIP.</TableHead>
          </TableHeader>
          <TableBody className='border-t-2'>
            <TableRow className='text-center'>
              <TableCell>ALM</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA ALMEIDA"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA ALMEIDA"} censoType={"Classification"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA ALMEIDA"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA ALMEIDA"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>CEL</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA CORONEL"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA CORONEL"} censoType={"Classification"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA CORONEL"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA CORONEL"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>LEB</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA LEBLON"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA LEBLON"} censoType={"Classification"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA LEBLON"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA LEBLON"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>MOR</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"Classification"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>UNI</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"Classification"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>SMO</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA SANTA"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA SANTA"} censoType={"Classification"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA SANTA"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"UPA SANTA"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>COP</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"Classification"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>NBA</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS NOVA"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS NOVA"} censoType={"Classification"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS NOVA"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS NOVA"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>AER</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS AERO"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS AERO"} censoType={"Classification"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS AERO"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS AERO"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>TIR</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"Classification"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};


