import FusePageSimple from '@fuse/core/FusePageSimple';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PromotionsDashboardHeader from './PromotionsDashboardHeader';
import CustomSelect from '../home/customSelect/CustomSelect';

import { Button } from '../home/button/Button';
import InstructionButton from '../home/buttonInstruction/InstructionButton';
import DiscountTable from './discount/DiscountTable';

function PromotionsDashboardApp() {
  return (
    <FusePageSimple
      header={<PromotionsDashboardHeader />}
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
            const item = {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0 },
            };
            return (
              <motion.div className=" w-full p-24 md:p-32" variant={container}>
                <div className="w-full flex justify-between">
                  <div className="flex">
                    <CustomSelect />
                    <Button />
                  </div>
                  <div>
                    <InstructionButton />
                  </div>
                </div>

                {/* <Outlet /> */}

                <DiscountTable />
              </motion.div>
            );
          }, [])}
        </>
      }
    />
  );
}
const Container = styled.div`
  background-color: #f2f2f9;
  border-radius: 10px;
  div {
    padding: 20px;
  }
`;
const BlockFist = styled.div`
  display: flex;
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

export default PromotionsDashboardApp;
