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

const NameUsers = () => {
  return (
    <StyledTableContainer component={StyledPaper}>
      <Table>
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Имя сотрудника</StyledTableCell>
            <StyledTableCell>Должность</StyledTableCell>
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {stocks.map((stock) => (
            <StyledTableRowSecond key={stock.id}>
              <StyledTableCellContainer>
                <div className="flex">
                  {' '}
                  <img src="/assets/icons/usersIcon.svg" alt="" />
                  <div>{stock.name}</div>
                </div>
              </StyledTableCellContainer>
              <StyledTableCellContainer>
                {' '}
                <div className="flex">
                  <img src="/assets/icons/jobTitleIcon.svg" alt="" /> <div>{stock.jobTitile}</div>
                </div>
              </StyledTableCellContainer>
              <StyledTableCellContainer>
                <div className="flex">
                  <img src="/assets/icons/deleteIcon.svg" alt="" />{' '}
                  <img src="/assets/icons/editIconUsers.svg" alt="" />
                </div>
              </StyledTableCellContainer>
            </StyledTableRowSecond>
          ))}
        </TableBody>
      </Table>
      <Button>Добавить пользователя</Button>
    </StyledTableContainer>
  );
};
const Button = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  background-color: #f8dc2f;
  border-radius: 50px;
  width: 234px;
  height: 40px;
  margin-top: 30px;
  margin-left: 800px;
`;
const StyledTableCellContainer = styled(TableCell)`
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

export default NameUsers;
const stocks = [
  {
    name: 'Айлин',
    jobTitile: 'Менеджер',
  },
  {
    name: 'Айлин',
    jobTitile: 'Менеджер',
  },
  {
    name: 'Айлин',
    jobTitile: 'Менеджер',
  },
];
