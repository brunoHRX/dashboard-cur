import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TableCellComponent from './TableCellComponent';


export default function EquipamentTable() {
  return (
    <div className="p-2 max-w-5xl w-full">
      <div className="border rounded">
        <Table>
          <TableHeader>
          <TableHead className='text-center'>UNID.</TableHead>
          <TableHead className='text-center'>MONITOR</TableHead>
          <TableHead className='text-center'>OXÍMETREO</TableHead>
          <TableHead className='text-center'>DESFIBRILADOR</TableHead>
          <TableHead className='text-center'>ECG</TableHead>
          <TableHead className='text-center'>TELECARDIO</TableHead>
          <TableHead className='text-center'>SONAR</TableHead>
          <TableHead className='text-center'>RAIO-X</TableHead>
          <TableHead className='text-center'>A. CLAVE</TableHead>
          </TableHeader>
          <TableBody className='border-t-2'>
            <TableRow>
              <TableCell className='text-center'>ALM</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"monitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"oximeters"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"defibrillators"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"ecgs"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"telecardios"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fetalMonitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"hasXRay"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"hasAutoclave"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>CEL</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"monitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"oximeters"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"defibrillators"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"ecgs"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"telecardios"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"fetalMonitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"hasXRay"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"hasAutoclave"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>LEB</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"monitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"oximeters"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"defibrillators"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"ecgs"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"telecardios"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"fetalMonitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"hasXRay"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"hasAutoclave"} />
              </TableCell>             
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>MOR</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"monitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"oximeters"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"defibrillators"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"ecgs"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"telecardios"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fetalMonitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"hasXRay"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"hasAutoclave"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>UNI</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"monitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"oximeters"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"defibrillators"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"ecgs"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"telecardios"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fetalMonitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"hasXRay"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"hasAutoclave"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>SMO</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"monitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"oximeters"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"defibrillators"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"ecgs"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"telecardios"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"fetalMonitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"hasXRay"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"hasAutoclave"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>COP</TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"monitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"oximeters"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"defibrillators"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"ecgs"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"telecardios"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fetalMonitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"hasXRay"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"hasAutoclave"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>NBA</TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"monitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"oximeters"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"defibrillators"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"ecgs"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"telecardios"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"fetalMonitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"hasXRay"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"hasAutoclave"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>AER</TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"monitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"oximeters"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"defibrillators"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"ecgs"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"telecardios"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"fetalMonitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"hasXRay"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"hasAutoclave"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>TIR</TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"monitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"oximeters"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"defibrillators"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"ecgs"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"telecardios"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fetalMonitors"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"hasXRay"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"hasAutoclave"} />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}