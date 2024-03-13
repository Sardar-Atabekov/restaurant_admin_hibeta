import FusePageSimple from '@fuse/core/FusePageSimple';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import ReportsDashboardHeader from './ReportsDashboardHeader';
import CustomSelect from '../home/customSelect/CustomSelect';

import { Button } from '../home/button/Button';
import InstructionButton from '../home/buttonInstruction/InstructionButton';
import NameUsers from './users/NameUsers';

function ReportsDashboardApp() {
  return (
    <FusePageSimple
      header={<ReportsDashboardHeader />}
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
                <NameUsers/>
              </motion.div>
            );
          }, [])}
        </>
      }
    />
  );
}

export default ReportsDashboardApp;

