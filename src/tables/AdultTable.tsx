import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TableCellComponent from './TableCellComponent';


export default function AdultoCR() {
  return (
    <div className="p-2 max-w-5xl w-full">
      <div className="border rounded">
      <Table className='bg-cur-dark-orange'>
          <TableHeader className='w-full'>
            <TableHead className='text-center text-cur-offwhite border-2'>PAINEL DE FICHAS - ATENDIMENTO ADULTO</TableHead>
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
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_ad_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_ad_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"fichas_ad_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"espera_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"espera_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA ALMEIDA"} header={"espera_ad_azul"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>CEL</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_ad_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_ad_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA CORONEL"} header={"fichas_ad_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA CORONEL"} header={"espera_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA CORONEL"} header={"espera_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA CORONEL"} header={"espera_ad_azul"} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>LEB</TableCell>
              <TableCell>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_ad_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_ad_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA LEBLON"} header={"fichas_ad_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA LEBLON"} header={"espera_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA LEBLON"} header={"espera_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA LEBLON"} header={"espera_ad_azul"} />
              </TableCell>        
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>MOR</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_ad_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_ad_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"fichas_ad_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"espera_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"espera_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA MORENINHAS"} header={"espera_ad_azul"} />
              </TableCell>    
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>UNI</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_ad_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_ad_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"fichas_ad_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"espera_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"espera_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"espera_ad_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>SMO</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_ad_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_ad_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA SANTA"} header={"fichas_ad_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA SANTA"} header={"espera_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA SANTA"} header={"espera_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"UPA SANTA"} header={"espera_ad_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>COP</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_ad_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_ad_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"fichas_ad_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"espera_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"espera_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS COOPHAVILA"} header={"espera_ad_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>NBA</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_ad_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_ad_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"fichas_ad_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"espera_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"espera_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS NOVA"} header={"espera_ad_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>AER</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_ad_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_ad_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"fichas_ad_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"espera_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"espera_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS AERO"} header={"espera_ad_azul"} />
              </TableCell> 
            </TableRow>
            <TableRow>
              <TableCell className='text-center border-r-2 border-l-2'>TIR</TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_ad_aguarda_CR"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_ad_fastrack"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"fichas_ad_azul"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"espera_ad_amarela"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"espera_ad_verde"} />
              </TableCell>
              <TableCell className=' border-r-2 border-l-2'>
                <TableCellComponent unit={"CRS TIRADENTES"} header={"espera_ad_azul"} />
              </TableCell> 
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}