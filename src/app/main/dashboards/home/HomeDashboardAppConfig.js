import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import AverageDeliveryTime from './orders/generalOrders/AverageDeliveryTime';
import AverageOrdersAmount from './orders/generalOrders/AverageOrderAmount';
import TotalOrders from './orders/generalOrders/TotalOrders';
import TotalTurnover from './orders/generalOrders/TotalTurnover';

const HomeDashboardApp = lazy(() => import('./HomeDashboardApp'));

const HomeDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/home',
      element: <HomeDashboardApp />,
      children: [
        {
          path: '',
          element: <TotalTurnover />,
        },
        {
          path: 'week',
          element: <TotalOrders />,
        },
        {
          path: 'mounth',
          element: <AverageOrdersAmount />,
        },
        {
          path: 'years',
          element: <AverageDeliveryTime />,
        },
      ],
    },
  ],
};

export default HomeDashboardAppConfig;
