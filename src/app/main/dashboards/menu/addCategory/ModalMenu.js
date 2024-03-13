import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { useState } from 'react';
import CheckBox from '../../../../UI/Checkbox';

const ModalMenu = ({
  item,
  key,
  setB,
  setIsOpenDeleteUserModal,
  setIsCategory,
  setIsRestaurant,

  resulState,
  setResultState,
}) => {
  const restorantId = useSelector((state) => state.user.restorants[0]);
  const [isPassived, setIsPassived] = useState(item.isPasived);
  

  const datas = {
    categoryId: item.id,
    restorantId,
    isPasived: isPassived,
  };

  const handleChecked = () => {
    setIsPassived(!isPassived);
    console.log(isPassived);
    if (isPassived) {
      setResultState([...resulState, datas]);
    } else {
      console.log('resulState', resulState);
      const result = resulState.filter((i) => i.categoryId !== datas.categoryId);
      console.log('resu', result);
      setResultState([...result]);
    }

    // setIsRestaurant(restorantId);
  };
  // const SaveCaregoryList = () => {
  //   console.log(isPasived);
  //   dispatch(postProductCategoryList({ categoryId, restorantId, isPasived }));
  //   setB(false);
  //   setIsOpenDeleteUserModal(false);
  // };
  return (
    <>
      <div className="category" key={key}>
        <CheckBox onClick={handleChecked} />
        <p>{item.name}</p>
      </div>
      {/* <ButtonSave>
        <buttton className="buttonSave" onClick={() => SaveCaregoryList()}>
          Сохранить
        </buttton>
        <p className="buttonCancel">Отменить</p>
      </ButtonSave> */}
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

export default ModalMenu;
