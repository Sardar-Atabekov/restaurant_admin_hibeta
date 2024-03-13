import styled from 'styled-components';
import { useState } from 'react';

import CustomButton from '../../../home/button/CustomButton';

const QuantityEdit = ({ items}) => {
  const [recommended , setState] = useState(items.recommendedQuantity);
  const [closed, setClosed] = useState(items.closed);
  const productId = items.product.id;

  const HandleDecrement = () => {
    if (items.recommendedQuantity > 0) {
      setState((prevState) => prevState - 1);
    }

    console.log(items.recommendedQuantity);
  };
  const HandleIncrement = () => {
    if (recommended === items.quantity) {
      return items.quantity;
    } 
    setState((count) => count + 1);
  };
  const HandleToogle = () => {
    setClosed((prev) => !prev);
  };

  return (
    <QuantityBlock>
      <IncDecDiv onClick={() => HandleDecrement()}>
        <img className="counter-item" src="/assets/icons/minusIcon.svg" alt="" />
      </IncDecDiv>
      <p className="num-quantity ">{recommended}</p>
      {console.log(items.recommendedQuantity)}
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
const IncDecDiv = styled.div``;
export default QuantityEdit;
