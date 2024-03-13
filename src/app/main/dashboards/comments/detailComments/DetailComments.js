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

const DetailComments = () => {
  return (
    <StyledTableContainer component={StyledPaper}>
      <div>
        <h3>Комметарии</h3>
        <div>
          <span>Сортировать по</span>
          <img src="/assets/icons/selectimg.svg" alt="" />
        </div>
      </div>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>№ заказа</StyledTableCell>
            <StyledTableCell>Категория</StyledTableCell>
            <StyledTableCell>Продукт</StyledTableCell>
            {/* <StyledTableCell>Продукты/категории</StyledTableCell>
            <StyledTableCell>Скидка</StyledTableCell> */}
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <StyledTableRowSecond key={stock.id}>
              <StyledTableCellContainer>{stock.stock}</StyledTableCellContainer>
              <StyledTableCellContainer>{stock.startDate}</StyledTableCellContainer>
              <StyledTableCellContainer>{stock.endDate}</StyledTableCellContainer>

              <StyledTableCellContainerIcon>
                {' '}
                <img src="/assets/icons/starIcon.svg" alt="" />
              </StyledTableCellContainerIcon>
            </StyledTableRowSecond>
          ))}
        </TableBody>
      </Table>
      <Block>
        <p>
          Я из Алматы и был здесь один раз. Из плюсов могу отметить следующее: хорошее меню - есть
          из чего выбрать, вкусная еда (пробовал лагман, оливье и жаренные пельмени, все из этого
          понравилось), сытные порции и быстрый вынос блюд, не дорого.
        </p>
        <img src="/assets/icons/CommentImg.svg" alt="" />
      </Block>
    </StyledTableContainer>
  );
};
const Block = styled.div`
  margin-top: 10px;
  justify-content: space-between;
  width: 100%;
  padding: 18px;
  background-color: #ffffff;
  border-radius: 10px;
  p {
    width: 860px;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;
const StyledTableCellContainerIcon = styled(TableCell)``;
const StyledTableContainer = styled(TableContainer)`
  box-shadow: none;
  width: 100%;
  background-color: #f2f2f9;
  padding: 30px;
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
  }
  span {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #9795a5;
    padding: 0 10px 0 0;
  }
`;
const StyledTableCellContainer = styled(TableCell)`
  font-weight: 600;
  font-size: 16px;
  line-height: 18px;
`;

const StyledTableRow = styled(TableRow)`
  border-bottom: 1.1px solid #3c3756;
`;
const StyledTableRowSecond = styled(TableRow)`
  border-bottom: 1.1px solid #9795a5;
  height: 70px;
  width: 100%;
`;
const StyledTableCell = styled(TableCell)`
  line-height: 18px;
  font-weight: 700;
  font-size: 18px;
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

export default DetailComments;

const stocks = [
  {
    stock: '№ 34559',
    startDate: 'Колбаса, сосиски',
    endDate: 'Докторская колбаса ТойБос 200 гр',
  },
];
