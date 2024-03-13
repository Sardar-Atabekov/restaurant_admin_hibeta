import { TableCell, TableRow } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import ModalEdit from './ModalEdit';
import getDates from '../../../getDates';

const TableCellEdit = ({ item }) => {
  const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false);

  const ChangeHanler = (e) => {
    e.preventDefault();
    setIsOpenDeleteUserModal(!isOpenDeleteUserModal);
  };

  return (
    <StyledTableRowSecond>
      <TableCell className="font-bold">№ {item?.documentNo}</TableCell>
      <TableCell className="font-bold">{getDates(item?.createdOnUtc)}</TableCell>
      <TableCell className="font-bold">
        {item?.menu}
        {item?.orderLines?.length} Блюд
      </TableCell>
      <TableCell className="font-bold">{item?.netTotal}c</TableCell>
      <StyledTableCellButton>
        <ButtonEdit onClick={(e) => ChangeHanler(e)}>Принять заказ</ButtonEdit>
      </StyledTableCellButton>

      <ModalEdit
        isOpenDeleteUserModal={isOpenDeleteUserModal}
        setIsOpenDeleteUserModal={setIsOpenDeleteUserModal}
        item={item.orderLines}
        itemId={item.id}
      />
    </StyledTableRowSecond>
  );
};
const ButtonEdit = styled.button``;
const StyledTableRowSecond = styled(TableRow)`
  border-bottom: 1.1px solid #9795a5;
  height: 70px;
`;

const StyledTableCellButton = styled(TableCell)`
  button {
    width: 176px;
    height: 37px;
    background-color: #f8dc2f;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export default TableCellEdit;
