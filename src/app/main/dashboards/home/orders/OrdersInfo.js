import AverageDeliveryTime from './generalOrders/AverageDeliveryTime';
import AverageOrdersAmount from './generalOrders/AverageOrderAmount';
import TotalOrders from './generalOrders/TotalOrders';
import TotalTurnover from './generalOrders/TotalTurnover';

const OrdersInfo = () => {
  return (
    <div>
      <TotalTurnover index />
      <TotalOrders />
      <AverageOrdersAmount />
      <AverageDeliveryTime />
    </div>
  );
};

export default OrdersInfo;
