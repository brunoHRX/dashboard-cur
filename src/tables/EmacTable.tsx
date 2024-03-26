import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import TableCellComponent from './TableCellComponent';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import TableRowComponent from './TableRowComponent';



export default function EmacTable() {
  return(
    <div className='p-2 max-w-4xl w-full'>
      <div className='border rounded'>
        <Table>
          <TableHeader className='w-full'>
            <TableHead className='text-center'>UNID.</TableHead>
            <TableHead className='text-center'>ACIONAMENTO EMAC</TableHead>
          </TableHeader>
          <TableBody className='border-t-2'>
            <TableRow>
              <TableCell className='text-center'>ALM</TableCell>
              <TableCell className='flex justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                    <TableRowComponent unit={"UPA ALMEIDA"} censoType={"EMAC"} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Motivo de Acionamento</DialogTitle>
                    <DialogDescription>
                      <TableCellComponent unit={"UPA ALMEIDA"} header={"bigMotive"} />
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Horário de envio:</p>
                        <TableRowComponent unit={"UPA ALMEIDA"} censoType={"EMAC"} />
                      </div>
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Responsável:</p>
                        <TableCellComponent unit={"UPA ALMEIDA"} header={"name"} />
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>            
            <TableRow>
              <TableCell className='text-center'>CEL</TableCell>
              <TableCell className='flex justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                    <TableRowComponent unit={"UPA CORONEL"} censoType={"EMAC"} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Motivo de Acionamento</DialogTitle>
                    <DialogDescription>
                      <TableCellComponent unit={"UPA CORONEL"} header={"bigMotive"} />
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Horário de envio:</p>
                        <TableRowComponent unit={"UPA CORONEL"} censoType={"EMAC"} />
                      </div>
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Responsável:</p>
                        <TableCellComponent unit={"UPA CORONEL"} header={"name"} />
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>LEB</TableCell>
              <TableCell className='flex justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                    <TableRowComponent unit={"UPA LEBLON"} censoType={"EMAC"} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Motivo de Acionamento</DialogTitle>
                    <DialogDescription>
                      <TableCellComponent unit={"UPA LEBLON"} header={"bigMotive"} />
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Horário de envio:</p>
                        <TableRowComponent unit={"UPA LEBLON"} censoType={"EMAC"} />
                      </div>
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Responsável:</p>
                        <TableCellComponent unit={"UPA LEBLON"} header={"name"} />
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>MOR</TableCell>
              <TableCell className='flex justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                    <TableRowComponent unit={"UPA MORENINHAS"} censoType={"EMAC"} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Motivo de Acionamento</DialogTitle>
                    <DialogDescription>
                      <TableCellComponent unit={"UPA MORENINHAS"} header={"bigMotive"} />
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Horário de envio:</p>
                        <TableRowComponent unit={"UPA MORENINHAS"} censoType={"EMAC"} />
                      </div>
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Responsável:</p>
                        <TableCellComponent unit={"UPA MORENINHAS"} header={"name"} />
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>UNI</TableCell>
              <TableCell className='flex justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                    <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"EMAC"} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Motivo de Acionamento</DialogTitle>
                    <DialogDescription>
                      <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"bigMotive"} />
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Horário de envio:</p>
                        <TableRowComponent unit={"UPA UNIVERSITARIO"} censoType={"EMAC"} />
                      </div>
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Responsável:</p>
                        <TableCellComponent unit={"UPA UNIVERSITARIO"} header={"name"} />
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className='text-center'>SMO</TableCell>
              <TableCell className='flex justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                    <TableRowComponent unit={"UPA SANTA"} censoType={"EMAC"} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Motivo de Acionamento</DialogTitle>
                    <DialogDescription>
                      <TableCellComponent unit={"UPA SANTA"} header={"bigMotive"} />
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Horário de envio:</p>
                        <TableRowComponent unit={"UPA SANTA"} censoType={"EMAC"} />
                      </div>
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Responsável:</p>
                        <TableCellComponent unit={"UPA SANTA"} header={"name"} />
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>            
            <TableRow>
              <TableCell className='text-center'>COP</TableCell>
              <TableCell className='flex justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                    <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"EMAC"} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Motivo de Acionamento</DialogTitle>
                    <DialogDescription>
                      <TableCellComponent unit={"CRS COOPHAVILA"} header={"bigMotive"} />
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Horário de envio:</p>
                        <TableRowComponent unit={"CRS COOPHAVILA"} censoType={"EMAC"} />
                      </div>
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Responsável:</p>
                        <TableCellComponent unit={"CRS COOPHAVILA"} header={"name"} />
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>           
            <TableRow>
              <TableCell className='text-center'>NBA</TableCell>
              <TableCell className='flex justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                    <TableRowComponent unit={"CRS NOVA"} censoType={"EMAC"} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Motivo de Acionamento</DialogTitle>
                    <DialogDescription>
                      <TableCellComponent unit={"CRS NOVA"} header={"bigMotive"} />
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Horário de envio:</p>
                        <TableRowComponent unit={"CRS NOVA"} censoType={"EMAC"} />
                      </div>
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Responsável:</p>
                        <TableCellComponent unit={"CRS NOVA"} header={"name"} />
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>           
            <TableRow>
              <TableCell className='text-center'>AER</TableCell>
              <TableCell className='flex justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                    <TableRowComponent unit={"CRS AERO"} censoType={"EMAC"} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Motivo de Acionamento</DialogTitle>
                    <DialogDescription>
                      <TableCellComponent unit={"CRS AERO"} header={"bigMotive"} />
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Horário de envio:</p>
                        <TableRowComponent unit={"CRS AERO"} censoType={"EMAC"} />
                      </div>
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Responsável:</p>
                        <TableCellComponent unit={"CRS AERO"} header={"name"} />
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>           
            <TableRow>
              <TableCell className='text-center'>TIR</TableCell>
              <TableCell className='flex justify-center'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>
                    <TableRowComponent unit={"CRS TIRADENTES"} censoType={"EMAC"} />
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Motivo de Acionamento</DialogTitle>
                    <DialogDescription>
                      <TableCellComponent unit={"CRS TIRADENTES"} header={"bigMotive"} />
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Horário de envio:</p>
                        <TableRowComponent unit={"CRS TIRADENTES"} censoType={"EMAC"} />
                      </div>
                      <div className="flex flex-row items-center justify-center justify-items-center">
                        <p>Responsável:</p>
                        <TableCellComponent unit={"CRS TIRADENTES"} header={"name"} />
                      </div>
                    </DialogDescription>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}