import { useDispatch } from 'react-redux';
import { useState } from 'react';
import MenuSelectSort from 'src/app/UI/MenuSelectSort';
import styled from 'styled-components';
import CustomButton from '../../home/button/CustomButton';
import { deleteProduct } from '../store/categorySlice';
import PaginationBlock from '../../components/Paginations';

const Dishes = ({
  categoryFirst,
  Category,
  setStatus,
  setProducts,
  refetcH,
  setDeleteProduct,
  limit,
  setLimit,
  activePage,
  setActivePage,
  refetch,
  totalCount
}) => {
  const dispatch = useDispatch();

  const categoryTitle = categoryFirst?.category?.title;
  const v = categoryFirst?.category?.products?.totalCount;
  // const [activePage, setActivePage] = useState(1);
  // const [limit, setLimit] = useState(10);
  const [status, setStatusPass] = useState();
  console.log(totalCount);

  // const [products, setProduct] = useState(Category);
  // console.log(products);
  // useEffect(() => {
  //   const result = products.filter((el) => el.id !== deleteProducId);
  //   setProduct(result);
  // }, [deleteProducId]);

  const EditProductHandler = (product) => {
    setStatus(true);
    setProducts(product);
  };
  const DeleteProductClick = (id) => {
    dispatch(deleteProduct({ id }));
    setDeleteProduct(id);
  };
  return (
    <>
      <BlockStatus>
        <div className="dish-block-status">
          <h3>{categoryTitle}</h3>
          <div className="sort-block">
            <span>Сортировать</span>
            <MenuSelectSort />
            <span>Статус категории</span>
            <CustomButton />
          </div>
        </div>
        <NameProductBlock>
          <span className="name">Название</span>
          <div className="count-block">
            <p className="p">
              <span className="name1">Вес</span>
              <span className="name">Цена</span>
              <span className="name">Скидка</span>
            </p>
            <span className="span">Статус</span>
          </div>
        </NameProductBlock>
        {Category &&
          Category.map((product, key) => {
            return (
              <BlockProduct key={key}>
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
                  <button type="button" onClick={() => EditProductHandler(product, refetcH)}>
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
            );
          })}
      </BlockStatus>
      <PaginationBlock
        activePage={activePage}
        limit={limit}
        setActivePage={setActivePage}
        setLimit={setLimit}
        totalCount={totalCount}
        refetch={refetch}
      />
    </>
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

const NameProductBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;

  /* margin-top: 30px; */
  padding: 30px 0 20px 0;
  /* padding: 20px; */
  .span {
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    padding: 20px 10px;
  }

  .name {
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    padding: 0 10px;
    margin-left: 10px;
    /* margin: 0 -50px; */
  }
  .name1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    padding: 0 10px;
    margin-left: -25px;
    /* margin: 0 -50px; */
  }
  .count-block {
    display: flex;
    justify-content: space-between;
    width: 500px;
  }
  .p {
    width: 300px;
    display: flex;
    /* justify-content: space-around; */
    justify-content: start;
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    margin-right: 60px;
  }
`;
const BlockStatus = styled.div`
  padding: 30px;
  background-color: #f2f2f9;
  border-radius: 10px;
  .dish-block-status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .sort-block {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 550px;
  }
  span {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
  }
  h3 {
    font-weight: 700;
    font-size: 26px;
    line-height: 35px;
    /* margin-right: 50px; */
  }
`;
const Container = styled.div`
  /* padding: 40px; */
`;
export default Dishes;
