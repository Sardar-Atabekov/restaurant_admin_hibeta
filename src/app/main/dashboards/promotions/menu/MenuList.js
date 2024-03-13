import styled from 'styled-components';
import { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Modal from '../../../../UI/Modal';
import CheckBox from '../../../../UI/Checkbox';

const MenuList = () => {
  const [isOpenDeleteUserModal, setIsOpenDeleteUserModal] = useState(false);
  const [isMenuListModal, setMenuListModal] = useState(false);
  const ClickModal = (e) => {
    e.preventDefault();
    setIsOpenDeleteUserModal(!isOpenDeleteUserModal);
  };
  const OpenModal = () => {
    setIsOpenDeleteUserModal(true);
  };
  const MenuClickModal = (e) => {
    e.preventDefault();
    setMenuListModal(!isMenuListModal);
  };
  const MenuOpenModal = () => {
    setMenuListModal(true);
  };
  return (
    <>
      <MenuBlock>
        <h3>Меню</h3>
        <div>
          <img src="/assets/icons/menuIcon.svg" alt="" />
          <p>
            HiBeta не вмешивается в стоимость блюд, кторые вы хотите продать, HiBeta следит за этими
            ценами, чтобы не допустить завышения цен.
          </p>
        </div>
        <BlockButton>
          <Button onClick={OpenModal}>Добавить категорию +</Button>
          <Button onClick={MenuOpenModal}>Добавить блюда +</Button>
        </BlockButton>
      </MenuBlock>
      <Modal isOpen={isOpenDeleteUserModal}>
        <ModalBlock>
          <CloseModal onClick={ClickModal}>
            <img src="/assets/icons/exIcon.svg" alt="" />
          </CloseModal>
          <p className="main">Список категорий</p>
          <div className="category">
            <CheckBox />
            <p>Завтраки</p>
          </div>
          <div className="category">
            <CheckBox />
            <p>Супы</p>
          </div>
          <div className="category">
            <CheckBox />
            <p>Горячие блюда</p>
          </div>
          <div className="category">
            <CheckBox />
            <p>Пицца</p>
          </div>
          <div className="category">
            <CheckBox />
            <p>Роллы</p>
          </div>
          <div className="category">
            <CheckBox />
            <p>Салаты</p>
          </div>
          <div className="category">
            <CheckBox />
            <p>Детское меню</p>
          </div>
          <ButtonSave>
            <p className="buttonSave">Сохранить</p>
            <p className="buttonCancel">Отменить</p>
          </ButtonSave>
        </ModalBlock>
      </Modal>
      <Modal isOpen={isMenuListModal}>
        <ModalBlock>
          <CloseModal onClick={MenuClickModal}>
            <img src="/assets/icons/exIcon.svg" alt="" />
          </CloseModal>
          <p className="main">Список меню</p>
        <div className='fl ' >
     <span>
     <CheckBox />
     </span>
          <h3 className="main">Завтраки</h3>
        </div>
          <Table>
            <TableHead>
              <StyledTableRow>
                <TableCell>.</TableCell>
                <TableCell>
                  <p className="title-name">Название</p>
                </TableCell>
                <TableCell>
                  <p className="title-name">Вес</p>{' '}
                </TableCell>
                <TableCell>
                  <p className="title-name">Цена</p>
                </TableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              <StyledTableRowSecond>
                <TableCell>
                  {' '}
                  <CheckBox />
                </TableCell>
                <TableCell className="flex">
                  <img src="/assets/icons/meatIcon.svg" alt="" />
                  <div>
                    <p className="title-name">Медальоны бон филе</p>
                    <p className="menu-list ">
                      Медальоны бон филе с ароматной рукколой,
                      <br /> свежим шпинатом...
                    </p>
                  </div>
                </TableCell>
                <TableCell>
                  <p className="menu-list ">450 гр</p>
                  <p className="menu-list ">250 гр</p>
                </TableCell>
                <TableCell>
                  <p className="menu-list ">2500 с</p>
                  <p className="menu-list ">1500 с</p>
                </TableCell>
              </StyledTableRowSecond>
            </TableBody>
          </Table>

          <ButtonSave>
            <p className="buttonSave">Сохранить</p>
            <p className="buttonCancel">Отменить</p>
          </ButtonSave>
        </ModalBlock>
      </Modal>
    </>
  );
};
const StyledTableRow = styled(TableRow)`
  border-bottom: 1.1px solid #3c3756;
  width: 750px;
`;
const StyledTableRowSecond = styled(TableRow)`
  border-bottom: 1.1px solid #9795a5;
  height: 70px;
`;
const MenuBlock = styled.div`
  background-color: #f2f2f9;
  margin-top: 20px;
  padding: 25px 16px;
  border-radius: 10px;
  h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 18px;
    margin-left: 7px;
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
const Button = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  background-color: #f8dc2f;
  border-radius: 50px;
  width: 220px;
  height: 40px;
`;
const BlockButton = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  width: 480px;
  margin-left: 15px;
`;
const CloseModal = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 0;
`;
const ModalBlock = styled.div`
  width: 755px;
  height: 718px;
  padding: 20px;
  .menu-list {
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    padding: 5px;
  }
  .breakfast-title {
    display: flex;
    margin-left: 30px;
    div {
      display: flex;
    }
  }
  .fl{
    display: flex;
    justify-content: space-between;
    width: 185px;
    padding: 15px;
  }
  .title-name {
    font-weight: 700;
    font-size: 18px;
    line-height: 18px;
    padding: 5px;
  }
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
  .categorySecond {
    display: flex;
    justify-content: space-between;
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
export default MenuList;
