import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TableCellComponent from './TableCellComponent';


export default function InfantCR() {
  return (
    <div className="p-2 max-w-5xl w-full">
      <div className="border rounded">
        <Table>
          <TableHeader>
          <TableHead className='text-center'>UNID.</TableHead>
          <TableHead className='text-center'>AG.CLAS</TableHead>
          <TableHead className='text-center'>F-TRACK</TableHead>
          <TableHead className='text-center'>F.AMARELAS</TableHead>
          <TableHead className='text-center'>F.VERDES</TableHead>
          <TableHead className='text-center'>F.AZUIS</TableHead>
          <TableHead className='text-center'>TEMP. AMARELAS</TableHead>
          <TableHead className='text-center'>TEMP. VERDES</TableHead>
          <TableHead className='text-center'>TEMP. AZUIS</TableHead>
          </TableHeader>
          <TableBody className='border-t-2'>
            <TableRow>
              <TableCell className='text-center'>ALM</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"espera_inf_azul"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>CEL</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA CORONEL"} header={"espera_inf_azul"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>LEB</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"espera_inf_azul"} />
              </TableCell>        
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>MOR</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"espera_inf_azul"} />
              </TableCell>    
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>UNI</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>SMO</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA SANTA"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>COP</TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>NBA</TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS NOVA"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>AER</TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS AERO"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>TIR</TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}