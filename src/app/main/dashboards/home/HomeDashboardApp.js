import FusePageSimple from '@fuse/core/FusePageSimple';
import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { Outlet } from 'react-router-dom';
import HomeDashboardAppHeader from './HomeDashboardAppHeader';
import CustomSelect from './customSelect/CustomSelect';
import { Button } from './button/Button';
import InstructionButton from './buttonInstruction/InstructionButton';
import Discounts from './discounts/Discounts';
import Data from './data/Data';

function HomeDashboardApp(factory, deps) {
  return (
    <FusePageSimple
      header={<HomeDashboardAppHeader />}
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
                <div variant={item} className="text-black flex justify-between  w-full ">
                  <div className="flex">
                    <CustomSelect />
                    <Button />
                  </div>
                  <div>
                    <InstructionButton />
                  </div>
                </div>
                <Discounts />
                <Data />
                <Outlet />
              </motion.div>
            );
          })}
        </>
      }
    />
  );
}

export default HomeDashboardApp;
