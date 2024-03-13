import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

const NewOrders = lazy(() => import('./new/NewOrders'));
const ActiveOrders = lazy(() => import('./active/ActiveOrders'));
const EditOrders = lazy(() => import('./edit/EditOrders'));

const OrdersDashboardConfig = {
  settings: {
    layout: {},
  },
  routes: [
    {
      path: 'dashboards/orders/new-orders',
      element: <NewOrders />,
    },
    {
      path: 'dashboards/orders/edit-orders',
      element: <EditOrders />,
    },
    {
      path: 'dashboards/orders/active-orders',
      element: <ActiveOrders />,
    },
    {
      path: 'dashboards/orders',
      element: <Navigate to="orders" />,
    },
  ],
};

export default OrdersDashboardConfig;
