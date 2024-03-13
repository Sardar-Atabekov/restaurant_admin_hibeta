import styled from 'styled-components';
import ReactDOM from 'react-dom';

const Backdrop = ({ onClose }) => {
  return ReactDOM.createPortal(
    <StyledBackdrop onClick={onClose} />,
    document.getElementById('background')
  );
};
const StyledBackdrop = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
`;

export default Backdrop;
