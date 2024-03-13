// import RateStar from './RateStar';
import styled from 'styled-components';
import RateStar from './RateStar';

const RatingRestaurant = () => {
  return (
    <ContainerBlock>
      <RateStarBlock>
        <span className="p">4.3</span>
        <img src="/assets/icons/starIcon.svg" alt="" />

        <span className="rate-span">
          Ваш рейтинг составлен на <br />
          основании 250 отзывов
        </span>
      </RateStarBlock>
      <div>
        <RateStar />
      </div>
    </ContainerBlock>
  );
};
const ContainerBlock = styled.div`
  background-color: #ffffff;
  /* padding: 30px; */
  border-radius: 10px;
`;
const RateStarBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px;
  .p {
    width: 61px;
    height: 55px;
    font-weight: 800;
    font-size: 40px;
    line-height: 55px;
  }
  img {
    width: 128px;
  }
  .rate-span {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    width: 215px;
    height: 40px;
    padding: 23px 0 0 0;
  }
`;

export default RatingRestaurant;
