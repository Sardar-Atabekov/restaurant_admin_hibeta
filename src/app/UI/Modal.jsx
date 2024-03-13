import styled from 'styled-components';
import ReactDOM from 'react-dom';
import Backdrop from './Backdrop';

const Modal = ({ isOpen, onCloseBackDrop, children, top }) => {
  return (
    <>
      {isOpen ? (
        <>
          <Backdrop onClose={onCloseBackDrop} />
          <Div>
            {ReactDOM.createPortal(
              <StyledModalWindow top={top}>{children}</StyledModalWindow>,
              document.getElementById('modal')
            )}
          </Div>
        </>
      ) : null}
    </>
  );
};

const Div = styled.div`
  display: flex;
  align-items: center;
`;
const StyledModalWindow = styled.div`
  position: fixed;
  background: #ffffff;
  border-radius: 10px;
  position: fixed;
  text-align: center;
  top: ${({ top }) => top || '50%'};
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
`;

export default Modal;
