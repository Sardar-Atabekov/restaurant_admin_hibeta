import RestaurantDashboardApp from './RestaurantDashboardApp';

const RestaurantDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/restaurant',
      element: <RestaurantDashboardApp />,
    },
  ],
};

export default RestaurantDashboardAppConfig;
