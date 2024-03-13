import MounthPromotion from './data/MounthPromotion';
import TodayPromotion from './data/TodayPromotion';
import WeekPromotion from './data/WeekPromotion';
import YearPromotion from './data/YearPromotion';

const PromotionData = () => {
  return (
    <>
      <TodayPromotion index />
      <WeekPromotion />
      <MounthPromotion />
      <YearPromotion />
    </>
  );
};

export default PromotionData;
