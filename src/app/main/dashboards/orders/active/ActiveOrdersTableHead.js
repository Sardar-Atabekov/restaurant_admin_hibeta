import { TableCell, TableHead, TableRow } from '@mui/material';
import { darken, lighten } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';

const rows = [
  {
    id: 'id',
    align: 'left',
    disablePadding: false,
    label: '№ заказа',
    sort: true,
  },
  {
    id: 'reference',
    align: 'left',
    disablePadding: false,
    label: 'Время приготовления',
    sort: true,
  },
  {
    id: 'customer',
    align: 'left',
    disablePadding: false,
    label: 'Статус заказа',
    sort: true,
  },
  {
    id: 'total',
    align: 'right',
    disablePadding: false,
    label: 'Курьер',
    sort: true,
  },
  {
    id: 'payment',
    align: 'left',
    disablePadding: false,
    label: 'Сумма',
    sort: true,
  },
];

function ActiveOrdersTableHead() {
  return (
    <TableHead>
      <TableRow className="h-48 sm:h-64">
        <TableCell
          padding="none"
          className="w-40 md:w-64 text-center z-99"
          sx={{
            backgroundColor: (theme) =>
              darken(theme.palette.background.paper, theme.palette.mode === 'light' ? 0.02 : 0.2),
          }}
        >
          <Checkbox />
        </TableCell>
        {rows.map((row) => {
          return (
            <TableCell
              className="p-4 md:p-16"
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
            >
              {row.label}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}

export default ActiveOrdersTableHead;
