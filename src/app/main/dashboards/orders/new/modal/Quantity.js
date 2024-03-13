/* eslint-disable consistent-return */
import styled from 'styled-components';
import { useState } from 'react';

import CustomButton from '../../../home/button/CustomButton';

const Quantity = ({ items, quantityData }) => {
  const [recommendedQuantity, setState] = useState(items.quantity);
  const [closed, setClosed] = useState(items.closed);
  const productId = items.product.id;
  console.log(closed);

  const HandleDecrement = () => {
    if (recommendedQuantity > 0) {
      setState((prevState) => prevState - 1);
    }
    const sendDataChangeHandler = {
      recommendedQuantity,
      closed,
      productId,
    };
    quantityData(sendDataChangeHandler);

    console.log(recommendedQuantity);
  };
  const HandleIncrement = () => {
    if (recommendedQuantity === items.quantity) {
      return items.quantity;
    }
    setState((count) => count + 1);
  };
  const HandleToogle = () => setClosed(!closed);
  return (
    <QuantityBlock>
      <IncDecDiv onClick={() => HandleDecrement()}>
        <img className="counter-item" src="/assets/icons/minusIcon.svg" alt="" />
      </IncDecDiv>
      <p className="num-quantity">{recommendedQuantity}</p>
      <IncDecDiv onClick={() => HandleIncrement()}>
        <img className="counter-item" src="/assets/icons/plusIcon.svg" alt="" />
      </IncDecDiv>

      <p>
        {items.product.price.salePrice} {items.product.price.currency.name}
      </p>
      <CustomButton isOn={closed} handle={HandleToogle} />
    </QuantityBlock>
  );
};
const QuantityBlock = styled.div`
  width: 60%;
  justify-content: space-around;
  p {
    padding: 10px 0 0 0;
  }
`;
const IncDecDiv = styled.div`
  /* padding: 0 10px 0 10x; */
`;
export default Quantity;
