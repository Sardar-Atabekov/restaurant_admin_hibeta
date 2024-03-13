// eslint-disable-next-line import/no-cycle
import { Navigate } from 'react-router-dom';
import Category from './Category/Category';
import Dishes from './Dishes/Dishes';
import MenuDashboardApp from './MenuDashboardApp';

const MenuDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/menu/dishes',
      element: <MenuDashboardApp />,
    },
    {
      path: 'dashboards/menu/dishes',
      // element: <Dishes />,
      element: <MenuDashboardApp />,
    },
    {
      path: 'dashboards/menu/category',
      element: <Category />,
    },
    {
      path: 'dashboards/menu',
      element: <Navigate to="menu" />,
    },
  ],
};

export default MenuDashboardAppConfig;
