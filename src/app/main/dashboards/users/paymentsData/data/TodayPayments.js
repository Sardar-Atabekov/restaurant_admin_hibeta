import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material';
import styled from 'styled-components';

const TodayPayments = () => {
  return (
    <StyledTableContainer component={StyledPaper}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Дата заказа</StyledTableCell>
            <StyledTableCell>Номер заказа</StyledTableCell>
            <StyledTableCell>Количество заказов</StyledTableCell>
            <StyledTableCell>Сумма</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <StyledTableRowSecond key={stock.id}>
              <StyledTableCellContainer>{stock.stock}</StyledTableCellContainer>
              <StyledTableCellContainer>{stock.startDate}</StyledTableCellContainer>
              <StyledTableCellContainer>{stock.endDate}</StyledTableCellContainer>
              <StyledTableCellContainer>{stock.product}</StyledTableCellContainer>
            </StyledTableRowSecond>
          ))}
        </TableBody>
      </Table>
      <Container>
        <p>Общее количество акций: 3</p>
        <p>Сумма:3000 c</p>
      </Container>
      <Button>
        <img src="/assets/icons/arrowDown.svg" alt="" />
        <span>Экспорт</span>
        <img src="assets/icons/exelIcon.svg" alt="" />
      </Button>
    </StyledTableContainer>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0 20px 520px;

  p {
    font-weight: 600;
    line-height: 25px;
    font-size: 18px;
  }
`;
const Button = styled.button`
  width: 161px;
  height: 38px;
  border-radius: 50px;
  padding: 10px;
  background-color: #207245;
  justify-content: space-around;
  font-weight: 700;
  line-height: 18px;
  font-size: 16px;
  display: flex;
  margin-left: 950px;
  span {
    color: #ffffff;
  }

`;
const StyledTableCellContainer = styled(TableCell)`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
`;
const StyledTableCellContainerList = styled(TableCell)`
  color: #ff4723;
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
`;
const StyledTableRow = styled(TableRow)`
  border-bottom: 1.1px solid #3c3756;
  width: 1200px;
`;
const StyledTableRowSecond = styled(TableRow)`
  border-bottom: 1.1px solid #9795a5;
  height: 70px;
`;
const StyledTableCell = styled(TableCell)`
  line-height: 18px;
  font-weight: 700;
  font-size: 18px;
`;

const StyledTableContainer = styled(TableContainer)`
  box-shadow: none;
  width: 100%;
  background-color: #f2f2f9;
  padding: 30px;
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

export default TodayPayments;

const stocks = [
  {
    stock: '11.01.2022',
    startDate: '№ 34559',
    endDate: '8',
    product: '3400 с',
  },
  {
    stock: '11.01.2022',
    startDate: '№ 34559',
    endDate: '10',
    product: '10',
  },
  {
    stock: 'Название акции',
    startDate: '№ 34559',
    endDate: '24',
    product: '3400 с',
  },
];
