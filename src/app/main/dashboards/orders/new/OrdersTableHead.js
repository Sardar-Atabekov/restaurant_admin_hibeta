import {
  IconButton,
  MenuList,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { darken, lighten } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';

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
    label: 'Заказ поступил',
    sort: true,
  },
  {
    id: 'customer',
    align: 'left',
    disablePadding: false,
    label: 'Меню заказа',
    sort: true,
  },
  {
    id: 'total',
    align: 'left',
    disablePadding: false,
    label: 'Сумма',
    sort: true,
  },

  {
    id: 'status',
    align: 'left',
    disablePadding: false,
    label: 'Статус',
    sort: true,
  },
];

function OrdersTableHead(props) {
  return (
    <TableHead>
      <TableRow>
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
              sx={{
                backgroundColor: (theme) =>
                  theme.palette.mode === 'light'
                    ? lighten(theme.palette.background.default, 0.4)
                    : lighten(theme.palette.background.default, 0.02),
              }}
              className="p-4 md:p-16"
              key={row.id}
              align={row.align}
              padding={row.disablePadding ? 'none' : 'normal'}
            >
              {row.sort && (
                <Tooltip
                  title="Sort"
                  placeholder={row.align === 'right' ? 'bottom' : 'bottom-start'}
                >
                  <TableSortLabel className="font-semibold">{row.label}</TableSortLabel>
                </Tooltip>
              )}
            </TableCell>
          );
        })}
      </TableRow>
    </TableHead>
  );
}

export default OrdersTableHead;
