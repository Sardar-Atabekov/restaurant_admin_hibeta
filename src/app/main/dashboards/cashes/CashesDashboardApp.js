import FusePageSimple from '@fuse/core/FusePageSimple';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import CashesDashboardHeader from './CashesDashboardHeader';

function CashesDashboardApp() {
  return (
    <FusePageSimple
      header={<CashesDashboardHeader />}
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
                variants={container}
                initial="hidden"
                animate="show"
              >
                <div className="w-full mt-16 sm:col-span-3">
                  <Typography className="text-2xl font-semibold tracking-tight leading-6">
                    Cashes
                  </Typography>
                  <Typography className="font-medium tracking-tight" color="text.secondary">
                    Demographic properties of your users
                  </Typography>
                </div>
              </motion.div>
            );
          }, [])}
        </>
      }
    />
  );
}

export default CashesDashboardApp;
