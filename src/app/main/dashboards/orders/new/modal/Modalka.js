import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { postProductOrders, postProductOrdersRefuse } from '../../store/orderSlice';
import Modal from '../../../../../UI/Modal';
import Quantity from './Quantity';

const Modalka = ({ itemId, item, isOpenDeleteUserModal, setIsOpenDeleteUserModal, refetch }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [orderLines, setOrderState] = useState([]);

  const id = itemId;

   const dataHandler = (sendDataChangeHandler) => {
    setOrderState([sendDataChangeHandler]);
    console.log(orderLines);
  };
  // console.log(orderLines);
  const closeModal = () => {
    setIsOpenDeleteUserModal(!isOpenDeleteUserModal);
  };
  const HandleOnClick = () => {
    // console.log(id);
    // const id = String(id);
    dispatch(postProductOrders(id));
    refetch();
    navigate('/dashboards/orders/active-orders');
  };
  console.log(orderLines);
  const HandleEditClick = (e) => {
    e.preventDefault();
    console.log(orderLines);
    dispatch(postProductOrdersRefuse({ id, orderLines, refetch }));
    refetch();
    navigate('/dashboards/orders/edit-orders');
  };

  // console.log(state);
  return (
    <Modal isOpen={isOpenDeleteUserModal}>
      <StyledModal>
        <Button className="close" onClick={closeModal}>
          <img src="/assets/icons/exIcon.svg" alt="" />
        </Button>
        <p className="menu">Меню заказа</p>
        {item.map((items, key) => {
          return (
            <ModalStyledData key={key}>
              <img src={items?.product?.imageList?.url} alt="" />
              <div className="food">
                <p className="p">{items?.product?.title}</p>

                <p className="p">{items?.product?.units?.title}</p>
              </div>

              <Quantity items={items} quantityData={dataHandler} />
            </ModalStyledData>
          );
        })}

        <Cutlery>
          <img src="/assets/icons/cutleryIcon.svg" alt="" />
          <div>
            <span>Столовые приборы</span>
            <span>Палочки на 4 персоны</span>
          </div>
        </Cutlery>
        <Summ>
          <div>
            <p>Общая сумма {item.total} с </p>
            <p>Итого {item.netTotal} с</p>
          </div>
          <p>Скидка {item.discountTotal} с</p>
        </Summ>
        <StyledButton>
          <Button className="button1" onClick={(e) => HandleEditClick(e)}>
            На редакцию
          </Button>
          <Button className="button2" onClick={() => HandleOnClick()}>
            Принять заказ
          </Button>
        </StyledButton>
      </StyledModal>
    </Modal>
  );
};
const Button = styled.button``;
const Summ = styled.div`
  padding: 10px 230px 10px 20px;
  div {
    flex-direction: column;
    align-items: flex-start;
    font-size: 20px;
    font-style: normal;
  }
`;
const Cutlery = styled.div`
  padding: 10px 530px 10px 20px;
  border: 1.5px solid #9795a5;
  div {
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    font-style: normal;
  }
`;
const StyledButton = styled.div`
  width: 100%;
  padding: 15px 200px;
  .button1 {
    width: 176px;
    height: 40px;
    border-radius: 50px;
    background-color: ${({ ischeck }) => (ischeck ? '#f2f2f9' : ' #ff4723')};
    font-weight: bold;
    color: ${({ ischeck }) => (ischeck ? '#ffffff' : '#9795a5')};
  }
  .button2 {
    width: 176px;
    height: 40px;
    border-radius: 50px;
    font-weight: bold;
    background-color: #f8dc2f;
    color: black;
  }
`;
const ModalStyledData = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  border-bottom: px solid #9795a5;
  .food {
    flex-direction: column;
    align-items: flex-start;
  }
  .p {
    font-size: 15px;
    font-style: normal;
  }
`;
const StyledModal = styled.div`
  width: 793px;
  .menu {
    border-bottom: 1px solid #3c3756;
    padding: 0px 0px 10px;
    font-size: 24px;
  }
  .close {
    padding: 20px 0px 0 710px;
  }
  p {
    font-size: 18px;
    line-height: 28px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`;
export default Modalka;
