import FusePageSimple from '@fuse/core/FusePageSimple';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Outlet } from 'react-router-dom';
import UsersDashboardHeader from './UsersDashboardHeader';
import CustomSelect from '../home/customSelect/CustomSelect';
import { Button } from '../home/button/Button';
import InstructionButton from '../home/buttonInstruction/InstructionButton';
import Payouts from './payouts/Payouts';

function UsersDashboardApp(factory, deps) {
  return (
    <FusePageSimple
      header={<UsersDashboardHeader />}
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
                <Payouts />
                <Outlet />
              </motion.div>
            );
          }, deps)}
        </>
      }
    />
  );
}

export default UsersDashboardApp;
