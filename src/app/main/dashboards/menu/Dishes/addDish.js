import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { deleteProduct } from '../store/categorySlice';
import CustomButton from '../../home/button/CustomButton';

const addDish = ({ product, setStatus, setProducts, setDeleteProduct }) => {
  
export const CounterComponent = ({ value }) => {
    const dispatch = useDispatch()
    const increaseCounter = useCallback(() => dispatch({ type: 'increase-counter' }), [])
    return (
      <div>
        <span>{value}</span>
        <button onClick={increaseCounter}>Increase counter</button>
      </div>
    )
  }
  const EditProductHandler = (products) => {
    setStatus(true);
    setProducts(product);
  };
  const DeleteProductClick = (id) => {
    dispatch(deleteProduct({ id }));
    setDeleteProduct(id);
  };
  return (
    <div>
      <BlockProduct >
        <div className="block-image">
          <img className="icon-meal" src={product?.imageList?.url} alt="" />
          <div className="block-title">
            {console.log(product)}
            <span>{product.title}</span>
            <span className="desc-title">{product.description}</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 w-256 ml-88 ">
          <span>450 гр</span>
          <span>{product?.price?.salePrice} с </span>
          <span className="discount-color">10%</span>
          <span>250 гр</span>
          <span>{product?.price?.olderSalePrice}с</span>
        </div>
        <div className="icon-block">
          <button type="button" onClick={() => EditProductHandler(product)}>
            <img className="icon-block-img" src="/assets/icons/edit-icon.svg" alt="" />
          </button>
          <button type="button" onClick={() => DeleteProductClick(product.id)}>
            {console.log(product.id)}
            <img
              className="icon-block-img"
              src="/assets/icons/delete-icon-product-list.svg"
              alt=""
            />
          </button>

          <CustomButton />
        </div>
      </BlockProduct>
    </div>
  );
};
const BlockProduct = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #9795a5;
  padding: 20px 0;
  .discount-color {
    color: #ff4723;
    margin: 0 -20px;
  }
  .icon-block-img {
    width: 38px;
    height: 38px;
  }
  .icon-block {
    display: flex;
    width: 180px;
    justify-content: space-between;
  }
  .icon-meal {
    width: 47px;
    height: 47px;
    border-radius: 10px;
  }
  .block-image {
    display: flex;
    width: 480px;
    justify-content: space-between;
  }
  .block-title {
    width: 400px;
    display: flex;
    flex-direction: column;
  }
  .desc-title {
    color: #9795a5;
    font-weight: 420;
    font-size: 16px;
    line-height: 22px;
    padding-right: 20px;
    overflow: hidden;
    height: 40px;
    text-overflow: ellipsis;
  }
  .detail-block {
  }
`;

export default addDish;
