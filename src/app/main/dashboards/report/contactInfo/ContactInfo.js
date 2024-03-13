import styled from 'styled-components';
import { Button } from '@mui/material';

import Inputs from '../../../../UI/Inputs';

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

const ContactInfo = () => {
  return (
    <MainInfoBlock>
      <h3>Контактная информация</h3>

      <div className="grid grid-cols-2 gap-10 mt-40">
        <div>
          <p className="label">Название сети ресторана</p>
          <Inputs width="450" placeholder="20 vby" />
        </div>

        <div>
          <p className="label">Среднее время приготовления</p>
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
          <p className="label">Поис времени</p>
          <Inputs width="450" placeholder="20 vby" />
        </div>
        <div>
          {' '}
          <p className="label">Валюта</p>
          <Inputs width="450" placeholder="20 vby" />
        </div>
        <div>
          <p className="label">Средняя сумма доставки </p>
          <Inputs width="450" placeholder="20 vby" />
        </div>
      </div>

      <div className="mt-40">
        {' '}
        <Button className="button">Сохранить</Button>
        <Button className="button">Отменить</Button>
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
  .label-second {
    margin-top: 5px;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #9795a5;
    padding: 0px 0px 5px 30px;
  }
  .button {
    width: 200px;
    height: 50px;
    background-color: #ffffff;
    margin-left: 20px;
  }
`;
export default ContactInfo;
