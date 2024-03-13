import DiscountSelect from 'src/app/UI/DiscountSelect';
import PayDropdown from 'src/app/UI/PayDropdown';
import SelectBuy from 'src/app/UI/SelectBuy';
import styled from 'styled-components';
import MenuList from '../menu/MenuList';
import Select from '../../../../UI/Select';

const DetailsDiscount = () => {
  return (
    <>
      <Container>
        <h3>Детали акции</h3>
        <Select />
        <BlockFirst>
          <p className="discount">Название акции</p>
          <div>
            <p className="name">
              <input placeholder="Название" />
            </p>
          </div>
        </BlockFirst>
        <div className="date-info">
          <div>
            <p className="discount">Дата начало</p>
            <div className="date-start">
              <input className="date-input" placeholder="00/00/0000" />
            </div>
          </div>

          <DiscountSelect />

          <SelectBuy />
          <div>
            <p className="discount">Дата окончания</p>
            <div className="date-start">
              <input className="date-input" placeholder="00/00/0000" />
            </div>
          </div>
          <div>
            <p className="discount">Минимальная сумма чека</p>
            <div className="date-start">
              <input className="date-input" placeholder="200 с" />
            </div>
          </div>

          <PayDropdown />
        </div>
      </Container>
      <MenuList />
    </>
  );
};
const Container = styled.div`
  border-radius: 10px;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    margin-left: 7px;
  }
  margin-top: 30px;
  background-color: #f2f2f9;
  padding: 20px;
  .date-start {
    width: 137px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 50px;
  }
  .date-input {
    width: 120px;
    margin-top: 5px;
    margin-left: 10px;
    padding: 5px;
  }
  .date-info {
    width: 900px;
    margin-left: 10px;
    display: grid;
    width: 100%;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    padding: 30px 100px 10px 0;
  }
  .discount {
    margin-left: 18px;
    color: #9795a5;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    padding: 10px 0;
  }
  & ::placeholder {
    padding: 7px;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #3c3756;
  }
`;
const BlockFirst = styled.div`
  margin-top: 20px;
  margin-left: 7px;
  div {
    width: 1130px;
    height: 40px;
    background-color: #ffffff;
    border-radius: 50px;
  }
  input {
    padding: 5px 0;
  }
  .name {
    padding: 7px;
    margin-left: 10px;
    font-weight: 400;
    font-size: 14px;
  }
  .discount {
    margin-left: 18px;
    color: #9795a5;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    padding: 10px 0;
  }
  input {
    width: 930px;
  }
  & ::placeholder {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;

    color: #3c3756;
  }
`;
export default DetailsDiscount;
