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
import styled from 'styled-components';
import { GET_ACTIVE_ORDERS } from '../../../../../graphApi';
import Dropdown from './Dropdown';
import CustomSelect from '../../home/customSelect/CustomSelect';
import { Button } from '../../home/button/Button';
import getDates from '../../getDates'

function ActiveOrders() {
  const today = new Date().toLocaleString();
  const { loading, error, data } = useQuery(GET_ACTIVE_ORDERS);

  if (loading) return <p>loading</p>;
  if (error) return <p>{error.message}</p>;

  console.log(data);

  const orderList = data?.orders.items;

  return (
    <Container>
      <div className="flex  justify-between w-full h-52">
        <p className="text-6xl font-bold tracking-tight leading-8">Активные заказы</p>
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
              <StyledTableCell>Время приготовления </StyledTableCell>
              <StyledTableCell>Статус заказа</StyledTableCell>
              <StyledTableCell>Курьер</StyledTableCell>
              <StyledTableCell>Сумма</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {orderList.map((item) => (
              <TableRow key={item.id}>
                <NumberTableCell>
                  <p>{item.documentNo}</p>
                  {console.log(item)}
                </NumberTableCell>
                <TimeTableCell className="grid grid-cols-4 gap-10">
                  <p className="time">{getDates(item.createdOnUtc)}</p>
                  <p className="time">{getDates(item.updatedOnUtc)}</p>

                  <p className="time">20 мин</p>
                  <p className="time">24 мин</p>

                  <p className="allTime">Поступил</p>
                  <p className="allTime">Подтвердили</p>

                  <p className="allTime">Готовили</p>
                  <p className="allTime">Общее время</p>
                </TimeTableCell>
                <TableCell>
                  <Dropdown orderId={item.id}/>
                </TableCell>
                <CallTableCell>
                  <p>Связаться</p>
                </CallTableCell>
                <TableCell className="font-bold text-16">{item.netTotal} с</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
    </Container>
  );
}
const Container = styled.div`
  width: 1300px;
  padding: 50px 80px 100px 30px;
`;

const StyledTableRow = styled(TableRow)`
  border-bottom: 1.1px solid #3c3756;
  width: 1200px;
`;
const NumberTableCell = styled(TableCell)`
  p {
    background-color: #ffffff;
    font-weight: 700;
    width: 106px;
    height: 38px;
    border-radius: 50px;
    text-align: center;
    padding-top: 10px;
    font-size: 16px;
  }
`;
const CallTableCell = styled(TableCell)`
  p {
    background-color: #ffffff;
    width: 104px;
    height: 39px;
    border-radius: 50px;
    text-align: center;
    padding-top: 10px;
  }
`;
const TimeTableCell = styled(TableCell)`
  .time {
    font-weight: 700;
    font-size: 16px;
  }
  .allTime {
    color: #9795a5;
    font-size: 13px;
  }
`;
const StyledTableCell = styled(TableCell)`
  line-height: 20px;
  font-weight: 700;
  font-size: 18px;
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

export default ActiveOrders;
