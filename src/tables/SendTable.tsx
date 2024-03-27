

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
          <TableBody className='border-t-2 text-center'>
            <TableRow>
              <TableCell>ALM</TableCell>
              <TableRowComponent unit={"UPA ALMEIDA"} censoType={"GeneralForm"} />
              <TableRowComponent unit={"UPA ALMEIDA"} censoType={"Classification"} />
              <TableRowComponent unit={"UPA ALMEIDA"} censoType={"TeamForm"} />
              <TableRowComponent unit={"UPA ALMEIDA"} censoType={"EquipmentForm"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>CEL</TableCell>
                <TableRowComponent unit={"UPA CORONEL"} censoType={"GeneralForm"} />
                <TableRowComponent unit={"UPA CORONEL"} censoType={"Classification"} />
                <TableRowComponent unit={"UPA CORONEL"} censoType={"TeamForm"} />
                <TableRowComponent unit={"UPA CORONEL"} censoType={"EquipmentForm"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>LEB</TableCell>
                <TableRowComponent unit={"UPA LEBLON"} censoType={"GeneralForm"} />
                <TableRowComponent unit={"UPA LEBLON"} censoType={"Classification"} />
                <TableRowComponent unit={"UPA LEBLON"} censoType={"TeamForm"} />
                <TableRowComponent unit={"UPA LEBLON"} censoType={"EquipmentForm"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>MOR</TableCell>
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"GeneralForm"} />
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"Classification"} />
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"TeamForm"} />
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"EquipmentForm"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>UNI</TableCell>
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"GeneralForm"} />
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"Classification"} />
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"TeamForm"} />
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"EquipmentForm"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>SMO</TableCell>
                <TableRowComponent unit={"UPA SANTA"} censoType={"GeneralForm"} />
                <TableRowComponent unit={"UPA SANTA"} censoType={"Classification"} />
                <TableRowComponent unit={"UPA SANTA"} censoType={"TeamForm"} />
                <TableRowComponent unit={"UPA SANTA"} censoType={"EquipmentForm"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>COP</TableCell>
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"GeneralForm"} />
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"Classification"} />
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"TeamForm"} />
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"EquipmentForm"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>NBA</TableCell>
                <TableRowComponent unit={"CRS NOVA"} censoType={"GeneralForm"} />
                <TableRowComponent unit={"CRS NOVA"} censoType={"Classification"} />
                <TableRowComponent unit={"CRS NOVA"} censoType={"TeamForm"} />
                <TableRowComponent unit={"CRS NOVA"} censoType={"EquipmentForm"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>AER</TableCell>
                <TableRowComponent unit={"CRS AERO"} censoType={"GeneralForm"} />
                <TableRowComponent unit={"CRS AERO"} censoType={"Classification"} />
                <TableRowComponent unit={"CRS AERO"} censoType={"TeamForm"} />
                <TableRowComponent unit={"CRS AERO"} censoType={"EquipmentForm"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>TIR</TableCell>
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"GeneralForm"} />
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"Classification"} />
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"TeamForm"} />
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"EquipmentForm"} />
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};


