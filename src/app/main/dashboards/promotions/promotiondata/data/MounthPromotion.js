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

const MounthPromotion = () => {
  return (
    <StyledTableContainer component={StyledPaper}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Акция</StyledTableCell>
            <StyledTableCell>Дата начала</StyledTableCell>
            <StyledTableCell>Дата окончания</StyledTableCell>
            <StyledTableCell>Продукты/категории</StyledTableCell>
            <StyledTableCell>Скидка</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <StyledTableRowSecond key={stock.id}>
              <StyledTableCellContainer>{stock.stock}</StyledTableCellContainer>
              <StyledTableCellContainer>{stock.startDate}</StyledTableCellContainer>
              <StyledTableCellContainer>{stock.endDate}</StyledTableCellContainer>
              <StyledTableCellContainer>{stock.product}</StyledTableCellContainer>
              <StyledTableCellContainerList>{stock.promotion}</StyledTableCellContainerList>
            </StyledTableRowSecond>
          ))}
        </TableBody>
      </Table>
      <Container>
        <Button>Добавить</Button>
        <p>Общее количество акций: 3</p>
      </Container>
    </StyledTableContainer>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 31px 0 0 0;
  p {
    font-weight: 600;
    line-height: 25px;
    font-size: 18px;
  }
`;
const Button = styled.button`
  width: 190px;
  height: 40;
  border-radius: 50px;
  padding: 10px;
  background-color: #f8dc2f;
  font-weight: 700;
  line-height: 18px;
  font-size: 16px;
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

export default MounthPromotion;

const stocks = [
  {
    stock: 'Название акции',
    startDate: '21.01.2022',
    endDate: '21.06.2022',
    product: 'Гамбургер /*',
    promotion: '16%',
  },
  {
    stock: 'Название акции',
    startDate: '11.02.2022',
    endDate: '09.02.2022',
    product: 'Пицца /*',
    promotion: '25%',
  },
  {
    stock: 'Название акции',
    startDate: '11.01.2022',
    endDate: '11.02.2022',
    product: 'Роллы /*',
    promotion: '15%',
  },
];
