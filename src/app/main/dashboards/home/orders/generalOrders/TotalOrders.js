const TotalOrders = () => {
  const data = [
    {
      icon: '/assets/icons/totalOrdersIcon.svg',
      title: 'Итого заказов',
      price: '200 с',
    },
    {
      icon: '/assets/icons/orderAmountIcon.svg',
      title: 'Средняя сумма заказов',
      price: '5040 с',
    },
    {
      icon: '/assets/icons/totalturnoverIcon.svg',
      title: 'Средняя сумма заказов',
      price: '8000 с',
    },
    {
      icon: '/assets/icons/acceptanceTime.svg',
      title: 'Среднее время принятия',
      price: '10 мин',
    },
    {
      icon: '/assets/icons/cookingtime.svg',
      title: 'Среднее время готовки',
      price: '35 мин',
    },
    {
      icon: '/assets/icons/deliverytime.svg',
      title: 'Среднее время доставки',
      price: '10 мин ',
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-10  mt-32  ">
      {data.map((el) => {
        return (
          <div className=" bg-grey flex p-32 rounded-12">
            <div className="bg-white pl-10 pt-10 w-52 h-52  rounded-4">
              <img src={el.icon} alt="" />
            </div>
            <div className="ml-10">
              <div className="font-bold">{el.title}</div>
              <div className="font-bold text-4xl leading-10 ">{el.price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TotalOrders;
