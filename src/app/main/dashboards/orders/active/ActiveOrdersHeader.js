import { motion } from 'framer-motion';
import Typography from '@mui/material/Typography';
import { Input, Paper } from '@mui/material';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';

function ActiveOrdersHeader() {
  return (
    <div className="flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32">
      <Typography
        component={motion.span}
        initial={{ x: -20 }}
        aninate={{ x: 0, transition: { delay: 0.2 } }}
        delay={300}
        className="text-24 md:text-32 font-extrabold tracking-tight"
      >
        Active Orders
      </Typography>
      <div className="flex flex-1 items-center justify-end space-x-8 w-full sm:w-auto">
        <Paper
          component={motion.div}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
          className="flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0"
        >
          <FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>

          <Input
            placeholder="Search orders"
            className="flex flex-1"
            disableUnderline
            fullWidth
            inputProps={{
              'aria-label': 'Search Orders',
            }}
          />
        </Paper>
      </div>
    </div>
  );
}

export default ActiveOrdersHeader;
