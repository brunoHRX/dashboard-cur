

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

import TableRowComponent from './TableRowComponent';



export default function SendTable() {

  return (
    <div className='p-2 max-w-5xl w-full'>
      <div className="border rounded">
        <Table>
          <TableHeader>
            <TableHead className='text-center'>UNID.</TableHead>
            <TableHead className='text-center'>GERAL</TableHead>
            <TableHead className='text-center'>C.R.</TableHead>
            <TableHead className='text-center'>MED.</TableHead>
            <TableHead className='text-center'>EQUIP.</TableHead>
          </TableHeader>
          <TableBody className='border-t-2'>
            <TableRow className='text-center'>
              <TableCell>ALM</TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA ALMEIDA"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA ALMEIDA"} censoType={"Classification"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA ALMEIDA"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA ALMEIDA"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>CEL</TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA CORONEL"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA CORONEL"} censoType={"Classification"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA CORONEL"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA CORONEL"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>LEB</TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA LEBLON"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA LEBLON"} censoType={"Classification"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA LEBLON"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA LEBLON"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>MOR</TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"Classification"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA MORENINHAS"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>UNI</TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"Classification"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>SMO</TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA SANTA"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA SANTA"} censoType={"Classification"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA SANTA"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"UPA SANTA"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>COP</TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"Classification"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>NBA</TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS NOVA"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS NOVA"} censoType={"Classification"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS NOVA"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS NOVA"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>AER</TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS AERO"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS AERO"} censoType={"Classification"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS AERO"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS AERO"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>TIR</TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"GeneralForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"Classification"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"TeamForm"} />
              </TableCell>
              <TableCell>
                <TableRowComponent unit={"CRS TIRADENTES"} censoType={"EquipmentForm"} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};


