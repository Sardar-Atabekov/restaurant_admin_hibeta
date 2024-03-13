import FuseScrollbars from '@fuse/core/FuseScrollbars';
import { Table, TableBody, TableCell, TablePagination, TableRow } from '@mui/material';
import Button from '@mui/material/Button';
import OrdersTableHead from './OrdersTableHead';

function OrdersTable() {
  return (
    <div className="w-full flex flex-col min-h-full">
      <FuseScrollbars className="grow overflow-x-auto">
        <Table stickyHeader className="min-w-xl" aria-labelledby="tableTitle">
          <OrdersTableHead />
          <TableBody>
            <TableRow className="h-72 cursor-pointer" hover role="checkbox">
              <TableCell className="w-40 md:w-64 text-center" padding="none">
                {/* <Checkbox /> */}
              </TableCell>
              <TableCell className="p-4 md:p-16" component="th" scope="row">
                #344556
              </TableCell>
              <TableCell className="p-4 md:p-16" component="th" scope="row">
                9:00
              </TableCell>
              <TableCell className="p-4 md:p-16" component="th" scope="row">
                15 блюд
              </TableCell>
              <TableCell className="p-4 md:p-16" component="th" scope="row">
                3400 сом
              </TableCell>
              <TableCell className="p-4 md:p-16" component="th" scope="row">
                <Button variant="contained" color="success" className="bg-yellow text-black">
                  Принять заказ
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </FuseScrollbars>
      <TablePagination
        className="shrink-0 border-1"
        component="div"
        count={1}
        page={0}
        rowsPerPage={10}
        onPageChange={() => console.log('click')}
      />
    </div>
  );
}

export default OrdersTable;
