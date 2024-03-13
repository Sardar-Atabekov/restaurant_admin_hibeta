import FusePageSimple from '@fuse/core/FusePageSimple';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import HelpDashboardHeader from './HelpDashboardHeader';

function HelpDashboardApp() {
  return (
    <FusePageSimple
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
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-32 w-full p-24 md:p-32"
                variant={container}
              >
                <motion.div variant={item} className="sm:col-span-2 lg:col-span-1 ">
                  <Paper className="flex flex-col flex-auto shadow rounded-2xl overflow-hidden">
                    <div className="flex items-start justify-between m-24 mb-0">
                      <Typography className="text-lg font-medium tracking-tight leading-6 truncate">
                        Conversions
                      </Typography>
                      <div className="ml-8">
                        <Chip size="small" className="font-medium text-sm" label=" 30 days" />
                      </div>
                    </div>
                  </Paper>
                </motion.div>
              </motion.div>
            );
          })}
        </>
      }
      header={<HelpDashboardHeader />}
    />
  );
}

export default HelpDashboardApp;
