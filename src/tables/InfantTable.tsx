import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TableCellComponent from './TableCellComponent';


export default function InfantCR() {
  return (
    <div className="p-2 max-w-5xl w-full">
      <div className="border rounded">
        <Table className='bg-cur-dark-orange'>
          <TableHeader className='w-full'>
            <TableHead className='text-center text-cur-offwhite border-2'>PAINEL DE FICHAS - ATENDIMENTO INFANTIL</TableHead>
          </TableHeader>
        </Table>
        <Table className='bg-background'>
          <TableHeader className=' w-full bg-cur-dark'>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>UNID.</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>AG.CLAS</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>F-TRACK</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>F.AMARELAS</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>F.VERDES</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>F.AZUIS</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>T. AMARELAS</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>T. VERDES</TableHead>
          <TableHead className='text-xs text-center  text-cur-offwhite border-r-2 border-l-2'>T. AZUIS</TableHead>
          </TableHeader>
          <TableBody className='border-t-2'>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>ALM</TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-grey text-cur-dark'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-blue'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"espera_inf_azul"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>CEL</TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-grey text-cur-dark'>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-blue'>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA CORONEL"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA CORONEL"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA CORONEL"} header={"espera_inf_azul"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>LEB</TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-grey text-cur-dark'>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-blue'>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA LEBLON"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA LEBLON"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA LEBLON"} header={"espera_inf_azul"} />
              </TableCell>        
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>MOR</TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-grey text-cur-dark'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-blue'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"espera_inf_azul"} />
              </TableCell>    
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>UNI</TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-grey text-cur-dark'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-blue'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>SMO</TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-grey text-cur-dark'>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-blue'>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"UPA SANTA"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"UPA SANTA"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"UPA SANTA"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>COP</TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-grey text-cur-dark'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-blue'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>NBA</TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-grey text-cur-dark'>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-blue'>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"CRS NOVA"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"CRS NOVA"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"CRS NOVA"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>AER</TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-grey text-cur-dark'>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-blue'>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"CRS AERO"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"CRS AERO"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"CRS AERO"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>TIR</TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-grey text-cur-dark'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_inf_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-blue'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_inf_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_inf_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-yellow'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"espera_inf_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-dark-green'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"espera_inf_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2 bg-cur-blue-ligth'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"espera_inf_azul"} />
              </TableCell> 
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}