// eslint-disable-next-line import/no-named-as-default
import Slider from './Slider';
import './index.css';

const RestauranName = ({ item, key, setActiveCategory, setCategoryId }) => {
  return (
    <div key={key}>
      <Slider data={item} setActiveCategory={setActiveCategory} setCategoryId={setCategoryId} />
    </div>
  );
};

export default RestauranName;
