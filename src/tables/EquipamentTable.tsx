import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TableEquipComponent from './TableEquipComponent';


export default function EquipamentTable() {
  return (
    <div className="p-2 max-w-5xl w-full">
      <div className="border rounded">
        <Table className='bg-cur-dark-orange'>
          <TableHeader className='w-full'>
            <TableHead className='text-center text-cur-offwhite border-2'>PAINEL DE EQUIPAMENTOS</TableHead>
          </TableHeader>
        </Table>
        <Table className='bg-background'>
          <TableHeader className=' w-full bg-cur-dark'>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>UNID.</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>MONITOR</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>OXÍMETRO</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>DEA</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>ECG</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>TELECARDIO</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>SONAR</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>RAIO-X</TableHead>
          <TableHead className='text-center  text-cur-offwhite border-r-2 border-l-2'>A. CLAVE</TableHead>
          </TableHeader>
          <TableBody className='border-t-2 text-center'>
            <TableRow>
              <TableCell className='text-center'>ALM</TableCell>
              <TableEquipComponent unit={"UPA ALMEIDA"} header={"monitors"} />
              <TableEquipComponent unit={"UPA ALMEIDA"} header={"oximeters"} />
              <TableEquipComponent unit={"UPA ALMEIDA"} header={"defibrillators"} />
              <TableEquipComponent unit={"UPA ALMEIDA"} header={"ecgs"} />
              <TableEquipComponent unit={"UPA ALMEIDA"} header={"telecardios"} />
              <TableEquipComponent unit={"UPA ALMEIDA"} header={"fetalMonitors"} />
              <TableEquipComponent unit={"UPA ALMEIDA"} header={"hasXRay"} />
              <TableEquipComponent unit={"UPA ALMEIDA"} header={"hasAutoclave"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>CEL</TableCell>
              <TableEquipComponent unit={"UPA CORONEL"} header={"monitors"} />
              <TableEquipComponent unit={"UPA CORONEL"} header={"oximeters"} />
              <TableEquipComponent unit={"UPA CORONEL"} header={"defibrillators"} />
              <TableEquipComponent unit={"UPA CORONEL"} header={"ecgs"} />
              <TableEquipComponent unit={"UPA CORONEL"} header={"telecardios"} />
              <TableEquipComponent unit={"UPA CORONEL"} header={"fetalMonitors"} />
              <TableEquipComponent unit={"UPA CORONEL"} header={"hasXRay"} />
              <TableEquipComponent unit={"UPA CORONEL"} header={"hasAutoclave"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>LEB</TableCell>
                <TableEquipComponent unit={"UPA LEBLON"} header={"monitors"} />
                <TableEquipComponent unit={"UPA LEBLON"} header={"oximeters"} />
                <TableEquipComponent unit={"UPA LEBLON"} header={"defibrillators"} />
                <TableEquipComponent unit={"UPA LEBLON"} header={"ecgs"} />
                <TableEquipComponent unit={"UPA LEBLON"} header={"telecardios"} />
                <TableEquipComponent unit={"UPA LEBLON"} header={"fetalMonitors"} />
                <TableEquipComponent unit={"UPA LEBLON"} header={"hasXRay"} />
                <TableEquipComponent unit={"UPA LEBLON"} header={"hasAutoclave"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>MOR</TableCell>
                <TableEquipComponent unit={"UPA MORENINHAS"} header={"monitors"} />
                <TableEquipComponent unit={"UPA MORENINHAS"} header={"oximeters"} />
                <TableEquipComponent unit={"UPA MORENINHAS"} header={"defibrillators"} />
                <TableEquipComponent unit={"UPA MORENINHAS"} header={"ecgs"} />
                <TableEquipComponent unit={"UPA MORENINHAS"} header={"telecardios"} />
                <TableEquipComponent unit={"UPA MORENINHAS"} header={"fetalMonitors"} />
                <TableEquipComponent unit={"UPA MORENINHAS"} header={"hasXRay"} />
                <TableEquipComponent unit={"UPA MORENINHAS"} header={"hasAutoclave"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>UNI</TableCell>
                <TableEquipComponent unit={"UPA UNIVERSITARIO"} header={"monitors"} />
                <TableEquipComponent unit={"UPA UNIVERSITARIO"} header={"oximeters"} />
                <TableEquipComponent unit={"UPA UNIVERSITARIO"} header={"defibrillators"} />
                <TableEquipComponent unit={"UPA UNIVERSITARIO"} header={"ecgs"} />
                <TableEquipComponent unit={"UPA UNIVERSITARIO"} header={"telecardios"} />
                <TableEquipComponent unit={"UPA UNIVERSITARIO"} header={"fetalMonitors"} />
                <TableEquipComponent unit={"UPA UNIVERSITARIO"} header={"hasXRay"} />
                <TableEquipComponent unit={"UPA UNIVERSITARIO"} header={"hasAutoclave"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>SMO</TableCell>
                <TableEquipComponent unit={"UPA SANTA"} header={"monitors"} />
                <TableEquipComponent unit={"UPA SANTA"} header={"oximeters"} />
                <TableEquipComponent unit={"UPA SANTA"} header={"defibrillators"} />
                <TableEquipComponent unit={"UPA SANTA"} header={"ecgs"} />
                <TableEquipComponent unit={"UPA SANTA"} header={"telecardios"} />
                <TableEquipComponent unit={"UPA SANTA"} header={"fetalMonitors"} />
                <TableEquipComponent unit={"UPA SANTA"} header={"hasXRay"} />
                <TableEquipComponent unit={"UPA SANTA"} header={"hasAutoclave"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>COP</TableCell>
                <TableEquipComponent unit={"CRS COOPHAVILA"} header={"monitors"} />
                <TableEquipComponent unit={"CRS COOPHAVILA"} header={"oximeters"} />
                <TableEquipComponent unit={"CRS COOPHAVILA"} header={"defibrillators"} />
                <TableEquipComponent unit={"CRS COOPHAVILA"} header={"ecgs"} />
                <TableEquipComponent unit={"CRS COOPHAVILA"} header={"telecardios"} />
                <TableEquipComponent unit={"CRS COOPHAVILA"} header={"fetalMonitors"} />
                <TableEquipComponent unit={"CRS COOPHAVILA"} header={"hasXRay"} />
                <TableEquipComponent unit={"CRS COOPHAVILA"} header={"hasAutoclave"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>NBA</TableCell>
                <TableEquipComponent unit={"CRS NOVA"} header={"monitors"} />
                <TableEquipComponent unit={"CRS NOVA"} header={"oximeters"} />
                <TableEquipComponent unit={"CRS NOVA"} header={"defibrillators"} />
                <TableEquipComponent unit={"CRS NOVA"} header={"ecgs"} />
                <TableEquipComponent unit={"CRS NOVA"} header={"telecardios"} />
                <TableEquipComponent unit={"CRS NOVA"} header={"fetalMonitors"} />
                <TableEquipComponent unit={"CRS NOVA"} header={"hasXRay"} />
                <TableEquipComponent unit={"CRS NOVA"} header={"hasAutoclave"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>AER</TableCell>
                <TableEquipComponent unit={"CRS AERO"} header={"monitors"} />
                <TableEquipComponent unit={"CRS AERO"} header={"oximeters"} />
                <TableEquipComponent unit={"CRS AERO"} header={"defibrillators"} />
                <TableEquipComponent unit={"CRS AERO"} header={"ecgs"} />
                <TableEquipComponent unit={"CRS AERO"} header={"telecardios"} />
                <TableEquipComponent unit={"CRS AERO"} header={"fetalMonitors"} />
                <TableEquipComponent unit={"CRS AERO"} header={"hasXRay"} />
                <TableEquipComponent unit={"CRS AERO"} header={"hasAutoclave"} />
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>TIR</TableCell>
                <TableEquipComponent unit={"CRS TIRADENTES"} header={"monitors"} />
                <TableEquipComponent unit={"CRS TIRADENTES"} header={"oximeters"} />
                <TableEquipComponent unit={"CRS TIRADENTES"} header={"defibrillators"} />
                <TableEquipComponent unit={"CRS TIRADENTES"} header={"ecgs"} />
                <TableEquipComponent unit={"CRS TIRADENTES"} header={"telecardios"} />
                <TableEquipComponent unit={"CRS TIRADENTES"} header={"fetalMonitors"} />
                <TableEquipComponent unit={"CRS TIRADENTES"} header={"hasXRay"} />
                <TableEquipComponent unit={"CRS TIRADENTES"} header={"hasAutoclave"} />
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}