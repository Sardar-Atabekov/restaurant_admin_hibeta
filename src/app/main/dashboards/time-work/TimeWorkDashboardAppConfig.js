import TimeWorkDashboardApp from './TimeWorkDashboardApp';

const TimeWorkDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/time',
      element: <TimeWorkDashboardApp />,
    },
  ],
};

export default TimeWorkDashboardAppConfig;
