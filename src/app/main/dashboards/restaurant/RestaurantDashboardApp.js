import FusePageSimple from '@fuse/core/FusePageSimple';
import styled from 'styled-components';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Checkbox from 'src/app/UI/Checkbox';
import RestaurantDashboardHeader from './RestaurantDashboardHeader';
import CustomSelect from '../home/customSelect/CustomSelect';

import { Button } from '../home/button/Button';
import InstructionButton from '../home/buttonInstruction/InstructionButton';

function RestaurantDashboardApp() {
  return (
    <FusePageSimple
      header={<RestaurantDashboardHeader />}
      content={
        <>
          {useMemo(() => {
            const container = {
              show: {
                transition: {
                  staggerChildren: 0.06,
                },
              },
            };
            return (
              <motion.div
                className=" w-full p-24 md:p-32"
                variants={container}
                initial="hidden"
                animate="show"
              >
                <div className="w-full flex justify-between">
                  <div className="flex">
                    <CustomSelect />
                    <Button />
                  </div>
                  <div>
                    <InstructionButton />
                  </div>
                </div>
                <Container>
                  <div>
                    <BlockFist>
                      <img src="/assets/icons/menuIcon.svg" alt="" />
                      <p>
                        Правильное указание часов работы ресторана, определяет и касается нас, влияя
                        на имидж. Поддерживайте точность и актуальность режим работы, чтобы
                        предотвратить отмену заказов и повысить лояльность клиентов.
                      </p>
                    </BlockFist>
                    <BlockSecond>
                      <div>
                        {' '}
                        <Checkbox />
                        <p className="monday">Понедельник</p>
                        <p>08:30 - 21:00</p>
                      </div>
                    </BlockSecond>
                    <BlockSecond>
                      <div>
                        {' '}
                        <Checkbox />
                        <p className="monday">Вторник</p>
                        <p>08:30 - 21:00</p>
                      </div>
                    </BlockSecond>
                    <BlockSecond>
                      <div>
                        {' '}
                        <Checkbox />
                        <p className="monday">Среда</p>
                        <p>08:30 - 21:00</p>
                      </div>
                    </BlockSecond>
                    <BlockSecond>
                      <div>
                        {' '}
                        <Checkbox />
                        <p className="monday">Четверг</p>
                        <p>08:30 - 21:00</p>
                      </div>
                    </BlockSecond>
                    <BlockSecond>
                      <div>
                        {' '}
                        <Checkbox />
                        <p className="monday">Пятница</p>
                        <p>08:30 - 21:00</p>
                      </div>
                    </BlockSecond>
                    <BlockSecond>
                      <div>
                        {' '}
                        <Checkbox />
                        <p className="monday">Суббота</p>
                        <p>08:30 - 21:00</p>
                      </div>
                    </BlockSecond>
                    <BlockSecond>
                      <div>
                        {' '}
                        <Checkbox />
                        <p className="monday">Воскресенье</p>
                        <p>08:30 - 21:00</p>
                      </div>
                    </BlockSecond>
                  </div>
                </Container>
              </motion.div>
            );
          })}
        </>
      }
    />
  );
}
const Container = styled.div`
  background-color: #f2f2f9;
  margin-top: 30px;
  border-radius: 10px;
  width: 100%;
  padding: 20px;
`;
const BlockFist = styled.div`
  display: flex;
  border-bottom: 1px solid #3c3756;
  padding: 10px 0 20px 0;
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 21.82px;
    margin-left: 18px;
  }
  img {
    padding-bottom: 10px;
  }
`;
const BlockSecond = styled.div`
  padding: 20px;
  border-bottom: 1px solid #9795a5;

  div {
    display: flex;
    width: 528px;
    justify-content: space-between;
    align-items: flex-start;
  }
  .monday {
    padding: 0 200px 0 0;
  }
  p {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
`;

export default RestaurantDashboardApp;
