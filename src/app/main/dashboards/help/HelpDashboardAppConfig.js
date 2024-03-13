import HelpDashboardApp from './HelpDashboardApp';

const HelpDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/help',
      element: <HelpDashboardApp />,
    },
  ],
};

export default HelpDashboardAppConfig;
