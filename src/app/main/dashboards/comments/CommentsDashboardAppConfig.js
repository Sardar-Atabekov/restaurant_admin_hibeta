import CommentsDashboardApp from './CommentsDashboardApp';

const CommentsDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/comments',
      element: <CommentsDashboardApp />,
    },
  ],
};

export default CommentsDashboardAppConfig;
