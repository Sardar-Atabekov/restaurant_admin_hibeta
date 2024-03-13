import { forwardRef } from 'react';
import styled from 'styled-components';

const Input = forwardRef((props, ref) => {
  return <StyledInput ref={ref} {...props} />;
});
const StyledInput = styled.input`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '50px')};
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? `${backgroundColor}` : '#ffffff'};
  border-radius: 80px;
  padding: 10px 25px;
  font-size: ${({ fontSize }) => fontSize || '18px'};
  /* border: ${({ error }) => (error ? '0.5px solid #F10000' : '1px solid #c4c4c4')}; */
  outline: none;
  transition-property: all;
  transition-duration: 0.5s;
  margin-left: 10px;
  border:${({ border }) => (border ? '1px solid #343EED' : '')}
  &:hover {
    border: ${({ borderActive }) => (borderActive ? '1px solid #343EED' : '1px solid  #343EED')};
    background-color: ${({ error }) => (error ? '#ffffff' : '#ffffff')};
    transition-property: all;
    transition-duration: 0.5s;
  }
    &:focus {
    background-color: ${({ error }) => (error ? '#ffffff' : '#ffffff')};
    border: ${({ borderActive }) => (borderActive ? '1px solid #343EED' : '1px solid  #343EED')};
  }
    &::placeholder {
    color: #969696;
  }
`;
export default Input;
