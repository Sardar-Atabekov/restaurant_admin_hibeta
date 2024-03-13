import MounthPayments from './paymentsData/data/MounthPayments';
import TodayPayments from './paymentsData/data/TodayPayments';
import WeekPayments from './paymentsData/data/WeekPayments';
import YearPayments from './paymentsData/data/YearPayments';
import UsersDashboardApp from './UsersDashboardApp';

const UsersDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/users',
      element: <UsersDashboardApp />,
      children: [
        {
          path: '',
          element: <TodayPayments />,
        },
        {
          path: 'week',
          element: <WeekPayments />,
        },
        {
          path: 'mounth',
          element: <MounthPayments />,
        },
        {
          path: 'years',
          element: <YearPayments />,
        },
      ],
    },
  ],
};

export default UsersDashboardAppConfig;
