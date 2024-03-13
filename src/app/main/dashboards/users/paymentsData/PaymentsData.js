import MounthPayments from './data/MounthPayments';
import TodayPayments from './data/TodayPayments';
import WeekPayments from './data/WeekPayments';
import YearPayments from './data/YearPayments';

const PaymentsData = () => {
  return (
    <>
      <TodayPayments index />
      <WeekPayments />
      <MounthPayments />
      <YearPayments />
    </>
  );
};

export default PaymentsData;
