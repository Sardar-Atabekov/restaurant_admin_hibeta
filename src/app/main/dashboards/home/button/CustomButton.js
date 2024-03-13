// eslint-disable-next-line import/prefer-default-export
import styled from 'styled-components';

const CustomButton = ({ isOn, handle }) => {
  return <Toogle isOn={isOn} onClick={handle} />;
};
const Toogle = styled.div`
  width: 66px;
  height: 29px;
  margin: 10px 0;
  border-radius: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  background-color: ${(props) => (props.isOn === true ? '#23D17C' : ' #FF4723')};

  &:before {
    content: '';
    width: 21px;
    height: 21px;
    background-color: white;
    border-radius: 50%;
    margin: 0 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: ${(props) => (props.isOn === true ? '38px' : '0')};
  }
`;
export default CustomButton;
