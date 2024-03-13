import ReportsDashboardApp from './ReportsDashboardApp';

const ReportsDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: '/dashboards/reports',
      element: <ReportsDashboardApp />,
    },
  ],
};

export default ReportsDashboardAppConfig;
