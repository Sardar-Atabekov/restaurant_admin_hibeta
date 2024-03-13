import styled from 'styled-components';
import { Button } from '@mui/material';
import Foto from './sendInfo/Foto';
import Inputs from '../../../../UI/Inputs';
import CustomSelectMulti from '../../../../UI/CustomSelectMulti';
import SelectDrop from './sendInfo/SelectDrop';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];
const valute = ['сом', 'валюта', 'юань'];
const title = 'Среднее время приготовления';
const item = '20 мин';

const MainInfo = () => {
  return (
    <MainInfoBlock>
      <h3>Главная информация</h3>
      <Foto />
      <div className="grid grid-cols-2 gap-10 mt-40">
        <div>
          <p className="label-select">Название сети ресторана</p>
          <CustomSelectMulti props={names} title={title} />
        </div>

        <div>
          <p className="label-second">Среднее время приготовления</p>
          <Inputs width="450" placeholder="20 vby" />
        </div>

        <div>
          <p className="label">Название филиала</p>
          <Inputs width="450" placeholder="20 vby" />
        </div>

        <div>
          <p className="label">Средняя сумма доставки </p>
          <Inputs width="450" placeholder="20 vby" />
        </div>
        <div>
          <p className="label-select">Поис времени</p>
          <CustomSelectMulti props={names} title={title} />
        </div>
        <div>
          {' '}
          <p className="label-select">Валюта</p>
          <CustomSelectMulti props={valute} />
        </div>
      </div>
      <div className="flex">
        <SelectDrop />
        <img className="img" src="/assets/icons/buttonIcon.svg" alt="" />
      </div>
      <div className="mt-40">
        {' '}
        <Button className="save-button">Сохранить</Button>
        <Button className="cancel-button">Отменить</Button>
      </div>
    </MainInfoBlock>
  );
};
const MainInfoBlock = styled.div`
  background-color: #f2f2f9;
  border-radius: 10px;
  padding: 30px;
  margin-top: 30px;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    padding: 0px 20px 30px 0;
  }
  .img {
    padding: 45px 0 0 50px;
  }
  .label {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #9795a5;
    padding: 0px 0px 5px 30px;
  }
  .label-select {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #9795a5;
    padding: 0px 0px 0px 30px;
  }
  .label-second {
    margin-top: 5px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #9795a5;
    padding: 0px 0px 5px 30px;
  }
  .save-button {
    width: 200px;
    height: 50px;
    background-color: #f8dc2f;
  }
  .cancel-button {
    width: 200px;
    height: 50px;
    background-color: #ffffff;
    margin-left: 20px;
  }
`;
export default MainInfo;
