import { useQuery } from '@apollo/client';
import { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { MENU_CATEGORIES_PRODUCT } from '../../../../../graphApi';

import Modal from '../../../../UI/Modal';
import CategoryList from './CategoryList';
import ModalMenu from './ModalMenu';

import { postProductCategoryList } from '../store/categorySlice';

const AddCategory = ({ setStatus, setPrevPage, b, setB, setProducts }) => {
  const dispatch = useDispatch();

  const { loading, error, data } = useQuery(MENU_CATEGORIES_PRODUCT);
  const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const categoryName = data?.categoriesProduct?.items;
  // const categoryrestoranName = data?.categoriesProduct?.items;
  const ClickModal = (e) => {
    e.preventDefault();
    setIsOpenDeleteUserModal(!isOpenDeleteUserModal);
  };
  const OpenModal = () => {
    setIsOpenDeleteUserModal(true);
  };

  // const [isCategory, setIsCategory] = useState();
  // const [isRestaurant, setIsRestaurant] = useState();

  const [resulState, setResultState] = useState([]);

  console.log(resulState);
  // const result = resulState.filter((item1) => item1.isPasived === true)
  // console.log('result', result)

  const SaveCaregoryList = () => {
    dispatch(postProductCategoryList(resulState));
    setB(false);
    setIsOpenDeleteUserModal(false);
  };
  return (
    <>
      <Container>
        <Block>
          <img src="/assets/icons/menuIcon.svg" alt="" />
          <p>
            HiBeta не вмешивается в стоимость блюд, кторые вы хотите продать, HiBeta следит за этими
            ценами, чтобы не допустить завышения цен.
          </p>
        </Block>
        {/* {b ? (
          <BlockSecond onClick={OpenModal}>
            <p>Добавить категории +</p>
          </BlockSecond>
        ) : ( */}
        <CategoryList
          // categoryrestoranName={categoryrestoranName}
          data1={resulState}
          setStatus={setStatus}
          categoryName={categoryName}
          setPrevPage={setPrevPage}
          OpenModal={OpenModal}
          setProducts={setProducts}
        />
        {/* } */}
      </Container>
      <Modal isOpen={isOpenDeleteUserModal}>
        <ModalBlock>
          <CloseModal onClick={ClickModal}>
            <img src="/assets/icons/exIcon.svg" alt="" />
          </CloseModal>
          <p className="main">Список категорий</p>
          {categoryName &&
            categoryName.map((item, key) => {
              return (
                <ModalMenu
                  item={item}
                  key={key}
                  setB={setB}
                  setIsOpenDeleteUserModal={setIsOpenDeleteUserModal}
                  resulState={resulState}
                  setResultState={setResultState}
                />
              );
            })}
          <ButtonSave>
            <button type="button" className="buttonSave" onClick={() => SaveCaregoryList()}>
              Сохранить
            </button>
            <p className="buttonCancel">Отменить</p>
          </ButtonSave>
        </ModalBlock>
      </Modal>
    </>
  );
};
const ButtonSave = styled.div`
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
  height: 718px;
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
const Container = styled.div`
  background-color: #f2f2f9;
  margin: 30px;
  border-radius: 10px;
  height: 100%;
  padding: 0 0 20px 0;
`;
const Block = styled.div`
  display: flex;
  padding: 20px;
  img {
    margin-bottom: 10px;
  }
  p {
    padding-left: 10px;
    width: 886px;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
  }
`;
const BlockSecond = styled.div`
  background-color: white;
  border-radius: 50px;
  height: 49px;
  width: 1164px;
  margin-left: 16px;
  p {
    padding: 14px 20px;
  }
`;
export default AddCategory;
