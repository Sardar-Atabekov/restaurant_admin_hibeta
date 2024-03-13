import DetailsDiscount from './detailsDiscount/DetailsDiscount';
import MounthPromotion from './promotiondata/data/MounthPromotion';
import TodayPromotion from './promotiondata/data/TodayPromotion';
import WeekPromotion from './promotiondata/data/WeekPromotion';
import YearPromotion from './promotiondata/data/YearPromotion';
import PromotionsDashboardApp from './PromotionsDashboardApp';

const PromotionsDashboardAppConfig = {
  settings: {
    layout: {
      config: {},
    },
  },
  routes: [
    {
      path: 'dashboards/promotions',
      element: <PromotionsDashboardApp />,
      children: [
        {
          path: 'detail',
          element: <DetailsDiscount />,
        },
        {
          path: '',
          element: <TodayPromotion />,
        },
        {
          path: 'week',
          element: <WeekPromotion />,
        },
        {
          path: 'mounth',
          element: <MounthPromotion />,
        },
        {
          path: 'years',
          element: <YearPromotion />,
        },
      ],
    },
  ],
};

export default PromotionsDashboardAppConfig;
