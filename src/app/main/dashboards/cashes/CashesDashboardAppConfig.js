import { lazy } from 'react';

const CashesDashboardApp = lazy(() => import('./CashesDashboardApp'));

const CashesDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/cashes',
      element: <CashesDashboardApp />,
    },
  ],
};

export default CashesDashboardAppConfig;
