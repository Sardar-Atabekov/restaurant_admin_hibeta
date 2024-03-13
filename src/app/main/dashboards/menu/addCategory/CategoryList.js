import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CATEGORY_LIST_MENU_PAGE } from '../../../../../graphApi';
import { postProductNewId } from '../store/categorySlice';
import Modal from '../../../../UI/Modal';
import Inputs from '../../../../UI/Inputs';
import RestauranName from './RestauranName';
import Dishes from '../Dishes/Dishes';

const CategoryList = ({ data1, setStatus, OpenModal, setProducts }) => {
  const [activePage, setActivePage] = useState(1);
  const [limit, setLimit] = useState(5);
  const variables = {
    take: limit,
    skip: (activePage - 1) * limit,
  };

  const { loading, error, data, refetch } = useQuery(CATEGORY_LIST_MENU_PAGE, {
    variables,
  });
  const categoryName = data?.restorants?.items;
  const dispatch = useDispatch();
  // const [activeCategory, setActiveCategory] = useState(null);
  const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false);
  const [description, setDescription] = useState('');
  const [statusDish, setStatusDish] = useState(true);
  const [name, setName] = useState('');
  const [activeCategory, setActiveCategory] = useState([]);
  const [categoryFirst, setCategoryId] = useState(null);
  const [deleteProducId, setDeleteProduct] = useState(null);
  const [totalCount, setTotalCount] = useState(null);
  const categoryId = categoryFirst?.categoryId;
  console.log(categoryFirst);

  useEffect(() => {
    const result = activeCategory.filter((el) => el.id !== deleteProducId);
    setActiveCategory(result);
  }, [deleteProducId]);

  const ClickModal = (e) => {
    e.preventDefault();
    setIsOpenDeleteUserModal(!isOpenDeleteUserModal);
  };

  const SaveProductList = () => {
    // dispatch(postProductCategoryList(resulState));
    // e.preventDefault();

    const res = {
      unitId: 1,
      title: name,
      description,
      name: '',
      active: true,
      convFactAmount: 1,
      convFactKilogram: 1,
      convFactLiter: 1,
      length: 1,
      height: 1,
      width: 1,
      netWeight: 1,
      weight: 1,
      countryId: 1,
      categoryId,
      restorantId: 3,
      primartyImageName: '',
      isPasived: false,
      isPublished: true,
    };
    dispatch(postProductNewId(res));
    setActiveCategory([res, ...activeCategory]);
    // setStatus(true);
    // eslint-disable-next-line prefer-const

    setStatusDish(false);
    setIsOpenDeleteUserModal(false);
  };
  const OpenModalHandler = () => {
    setIsOpenDeleteUserModal(true);
  };

  console.log('data', data)
  useEffect(() => {
    setTotalCount(data?.shipments?.totalCount);
  }, [data]);
  // console.log('activeCategoryactiveCategory', activeCategory)
  return (
    <>
      <BlockCategoryList>
        <div className="category-block">
          <div className="slider-category">
            {categoryName &&
              categoryName.map((item, key) => {
                return (
                  <RestauranName
                    setCategoryId={setCategoryId}
                    item={item}
                    key={key}
                    setActiveCategory={setActiveCategory}
                  />
                );
              })}
          </div>
          <button type="button" onClick={OpenModal}>
            {' '}
            <img className="img" src="/assets/icons/buttonIcon.svg" alt="" />
          </button>
        </div>
        {activeCategory.length < 1 ? (
          <div className="div">
            <p>
              <img src="/assets/icons/categoryMenuIcon.svg" alt="" />
              <p>
                Вы пока не создавали категории <br /> Вашего меню
              </p>
            </p>
          </div>
        ) : (
          <Dishes
            setDeleteProduct={setDeleteProduct}
            categoryFirst={categoryFirst}
            Category={activeCategory}
            setStatus={setStatus}
            setProducts={setProducts}
            refetch={refetch}
            setActivePage={setActivePage}
            activePage={activePage}
            limit={limit}
            totalCount={totalCount}
            setLimit={setLimit}
          />
        )}
        {/* <NavLink to={`category/${data1[0].categoryId}/`} > */}
        <ButtonSave onClick={OpenModalHandler}>Добавить блюдо +</ButtonSave>
        {/* </NavLink> */}
      </BlockCategoryList>
      <Modal isOpen={isOpenDeleteUserModal}>
        <ModalBlock>
          <CloseModal onClick={ClickModal}>
            <img src="/assets/icons/exIcon.svg" alt="" />
          </CloseModal>
          <p className="main">Добавить блюдо</p>
          <InputsBlock>
            <p>Название блюда</p>
            <Inputs value={name} width="600" onChange={(e) => setName(e.target.value)} />
            <p>Описание блюда</p>
            <textarea
              value={description}
              className="text-area"
              onChange={(e) => setDescription(e.target.value)}
            />
          </InputsBlock>

          <ButtonSave1>
            <button type="button" className="buttonSave" onClick={() => SaveProductList()}>
              Сохранить
            </button>
            <p className="buttonCancel">Отменить</p>
          </ButtonSave1>
        </ModalBlock>
      </Modal>
    </>
  );
};
const InputsBlock = styled.div`
  textarea {
    width: 1140px;
    margin-left: 20px;
    height: 80px;
    border-radius: 10px;
  }
  .text-area {
    width: 600px;
  }
  p {
    padding-left: 40px;
    margin-top: 20px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: #9795a5;
  }
`;
const ButtonSave1 = styled.div`
  display: flex;
  padding: 35px 20px 20px 400px;
  .buttonSave {
    background-color: #f8dc2f;
    border-radius: 20px;
    width: 148px;
    height: 40px;
    padding: 8px;
    margin-right: 15px;
    font-size: 16px;
  }
  .buttonCancel {
    background-color: #f2f2f9;
    border-radius: 20px;
    width: 148px;
    height: 40px;
    align-items: center;
    padding: 8px;
    font-size: 16px;
  }
`;
const CloseModal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 0;
`;
const ModalBlock = styled.div`
  width: 755px;
  background-color: #f2f2f9;
  border-radius: 20px;
  .main {
    font-size: 24px;
  }
  .category {
    display: flex;
    width: 691px;
    border-bottom: 1px solid #9795a5;
    margin-left: 25px;
    padding: 10px;
  }
  p {
    padding: 0 40px;
    font-weight: 700;
    font-size: 22px;
  }
`;
const BlockCategoryList = styled.div`
  h3 {
    font-weight: 700;
    font-size: 26px;
    line-height: 35px;
    /* padding: 20px; */
  }
  .category-block {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
  }
  .div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    padding: 20px;
    font-weight: 600;
    font-size: 22px;
    line-height: 30px;
    text-align: center;
  }
  .slider-category {
    width: 93%;
  }
`;

const ButtonSave = styled.div`
  /* width: 176px; */
  width: 300px;
  height: 40px;
  border-radius: 50px;
  padding: 10px 75px;
  font-weight: bold;
  background-color: #f8dc2f;
  margin-left: 450px;
  color: black;
`;
export default CategoryList;
