import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from 'styled-components';
// eslint-disable-next-line prettier/prettier

const SliderBlock = ({ data, setActiveCategory, setCategoryId }) => {
  const CategoryListHandler = (list) => {
    setActiveCategory(list.category.products.items);
    setCategoryId(list);
  };
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    focusOnSelect: false,
    centerMode: false,
    swipeToSlide: true,
  };

  const slider = data.categories.map((list, key) => {
    return (
      <Button type="button" key={key} onClick={() => CategoryListHandler(list)}>
        {list.category.title}
      </Button>
    );
  });

  return (
    <SliderContainer>
      <div>
        <Slider {...settings}>{slider}</Slider>
      </div>
    </SliderContainer>
  );
};
const Button = styled.button`
  white-space: nowrap;
`;
const SliderContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 48px;
  margin-left: 20px;
  padding: 10px;
  border-radius: 50px;

  div {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    color: #3c3756;
  }
  .svg.slick-arrow.slick-next {
    width: 70px;
    height: 70px;
  }
`;
export default SliderBlock;
