import ReportDashboardApp from './ReportDashboardApp';

const ReportDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/report',
      element: <ReportDashboardApp />,
    },
  ],
};

export default ReportDashboardAppConfig;
