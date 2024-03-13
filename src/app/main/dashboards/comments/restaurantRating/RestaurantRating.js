import styled from 'styled-components';
import RatingRestaurant from './rating/RatingRestaurant';

const RestaurantRating = () => {
  return (
    <RatingBlock>
      {' '}
      <div>
        <img src="/assets/icons/menuIcon.svg" alt="" />
        <p>
          Вы можете увидеть комментарии ресторана и области вашего улучшения вашего ресторана,
          которые вы получили за последние 6 месяцев. Срок рассмотрения вашего комментария
          составляет 7 дней.
        </p>
      </div>
      <h3>Оценка ресторана</h3>
      <RatingRestaurant />
    </RatingBlock>
  );
};
const RatingBlock = styled.div`
  background-color: #f2f2f9;
  margin-top: 20px;
  padding: 25px 16px;
  border-radius: 10px;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    padding: 21px 16px;
  }
  div {
    display: flex;
    padding: 18px 0 0 8px;
  }
  p {
    padding: 0 0 0 20px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;

export default RestaurantRating;
