import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import { useQuery } from '@apollo/client';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GET_EDIT_ORDERS } from '../../../../../graphApi';
import CustomSelect from '../../home/customSelect/CustomSelect';
import { Button } from '../../home/button/Button';
import TableCellEdit from './modal/TableCellEdit';

function EditOrdersHeader() {
  const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false);
  const today = new Date().toLocaleString();

  const { loading, error, data } = useQuery(GET_EDIT_ORDERS);
  useEffect(() => {}, [data]);
  if (loading) return <p>loading</p>;
  if (error) return <p>{error.message}</p>;

  console.log(data);
  const orderList = data?.orders.items;
  return (
    <Container>
      <div className="flex  justify-between w-full h-52">
        <p className="text-6xl font-bold tracking-tight leading-8">Заказы на редакции</p>
        <div className="text-gray font-500 "> {today}</div>
      </div>
      <div className="flex">
        <CustomSelect />
        <Button />
      </div>
      <StyledTableContainer component={StyledPaper}>
        <Table>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>№ заказа</StyledTableCell>
              <StyledTableCell>Заказ поступил </StyledTableCell>
              <StyledTableCell>Меню заказа</StyledTableCell>
              <StyledTableCell>Сумма</StyledTableCell>
              <StyledTableCell>Статус</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {orderList.map((item, key) => (
              <TableCellEdit key={key} item={item} />
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Container>
  );
}
const CloseButton = styled.button`
  padding: 20px 0px 0 710px;
`;
const Container = styled.div`
  width: 1300px;
  padding: 50px 30px 50px 30px;
`;
const Summ = styled.div`
  padding: 10px 230px 10px 20px;
  div {
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
    font-style: normal;
  }
`;
const Cutlery = styled.div`
  padding: 10px 530px 10px 20px;
  border: 1.5px solid #9795a5;
  div {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-style: normal;
  }
`;
const StyledButton = styled.div`
  width: 100%;
  padding: 15px 200px;
`;
const ButtonFirst = styled.button`
  width: 176px;
  height: 40px;
  border-radius: 50px;
  background-color: #f2f2f9;
  font-weight: bold;
  color: #9795a5;
  &:hover {
    background-color: #ff4723;
    color: white;
  }
`;
const ButtonSecond = styled.button`
  width: 176px;
  height: 40px;
  border-radius: 50px;
  background-color: #f2f2f9;
  color: #9795a5;
  font-weight: bold;
  &:hover {
    background-color: #f8dc2f;
    color: black;
  }
`;

const StyledTableRow = styled(TableRow)`
  border-bottom: 1.1px solid #3c3756;
  width: 1200px;
`;
const ModalStyledData = styled.div`
  display: flex;

  align-items: center;
  padding: 10px 20px;
  border-bottom: px solid #9795a5;
  .food {
    flex-direction: column;
    align-items: flex-start;
  }
  .p {
    font-size: 15px;
    font-style: normal;
  }
`;
const StyledTableRowSecond = styled(TableRow)`
  border-bottom: 1.1px solid #9795a5;
  height: 70px;
`;
const StyledTableCell = styled(TableCell)`
  line-height: 20px;
  font-weight: bold;
  font-size: 18px;
`;
const StyledTableCellButton = styled(TableCell)``;
const StatusButton = styled.button`
  width: 176px;
  height: 37px;
  background-color: #f8dc2f;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const StyledTableContainer = styled(TableContainer)`
  box-shadow: none;
  width: 100%;
  background-color: #f2f2f9;
`;
const StyledPaper = styled(Paper)`
  &::-webkit-scrollbar {
    background-color: transparent;
    width: 0.4rem;
    border-radius: 10rem;
  }
  &::-webkit-scrollbar-thumb {
    border: 4px solid #c4c4c4;
    border-radius: 5px;
    transform: rotate(90deg);
  }
  &::-webkit-scrollbar-thumb:hover {
    border: 4px solid #bdbdbd;
  }
  margin-top: 72px;
`;

const StyledModal = styled.div`
  width: 793px;
  height: 400px;

  .menu {
    border-bottom: 1px solid #3c3756;
    padding: 0px 0px 10px;
    font-size: 24px;
  }

  p {
    font-size: 18px;
    line-height: 28px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;

const users = [
  {
    id: '1',
    numOrders: '№ 34559',
    timeOrders: '08:22',
    menu: '8 Блюд',
    summ: '3400 с',
    status: 'Принять заказ',
  },
  {
    id: '5',
    numOrders: '№ 34559',
    timeOrders: '08:22',
    menu: '8 Блюд',
    summ: '3400 с',
    status: 'Принять заказ',
  },
  {
    id: '2',
    numOrders: '№ 34559',
    timeOrders: '08:22',
    menu: '8 Блюд',
    summ: '3400 с',
    status: 'Принять заказ',
  },
  {
    id: '3',
    numOrders: '№ 34559',
    timeOrders: '08:22',
    menu: '8 Блюд',
    summ: '3400 с',
    status: 'Принять заказ',
  },
  {
    id: '4',
    numOrders: '№ 34559',
    timeOrders: '08:22',
    menu: '8 Блюд',
    summ: '3400 с',
    status: 'Принять заказ',
  },
];

export default EditOrdersHeader;
