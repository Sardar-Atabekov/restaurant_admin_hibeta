/* eslint-disable import/no-absolute-path */
import Pagination from '@mui/material/Pagination';
import styled from 'styled-components';
import PaginationItem from '@mui/material/PaginationItem';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// eslint-disable-next-line unused-imports/no-unused-imports
// import { ReactComponent as ArrowNext } from '/assets/icons/pagination-arrow.svg';
// import { ReactComponent as ArrowPrev } from '/assets/icons/prev-arrow-icon.svg';

const PaginationBlock = ({ activePage, setActivePage, totalCount, limit, setLimit, refetch }) => {
  return (
    <PaginationShowBlock>
      {/* <Pagination count={100} size="large" /> */}

      <Pagination
        count={Math.ceil(totalCount / limit)}
        size="large"
        page={activePage}
        onChange={(e, number) => {
          console.log('number', number);
          setActivePage(number);
          refetch()
        }}
        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowForwardIcon, next: ArrowBackIcon }}
            {...item}
          />
        )}
      />
      <div className="show-block">
        <div className="show">Показать</div>
      </div>
    </PaginationShowBlock>
  );
};

const PaginationShowBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-top: 40px;
  margin-bottom: 100px;
  nav {
    margin-right: 25%;
  }

  .show-block {
    height: 50px;
    display: flex;
    align-items: center;
  }
  .show {
    height: 32px;
    margin-top: 10px;
    margin-right: 10px;
  }
`;
export default PaginationBlock;
