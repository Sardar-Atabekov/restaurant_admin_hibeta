import styled from '@emotion/styled';
import { forwardRef } from 'react';
import checkboxIcon from './icons/checkboxIcon.svg';
import checkedIcon from './icons/checkedIcon.svg';

 const Checkbox = forwardRef(({ isChecked, onChange, ...props }, ref) => {
  return (
    <StyledCheckbox isChecked={isChecked} {...props}>
      <input ref={ref} type="checkbox" onChange={onChange} checked={isChecked} {...props} />
      <span className="check" />
    </StyledCheckbox>
  );
});
const StyledCheckbox = styled.label`
  cursor: pointer;
  & input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  span {
    position: absolute;
    background-image: url(${checkboxIcon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 30px;
    height: 30px;
  }
  input:checked + span {
    transition: 0.3s;
    background-image: url(${checkedIcon});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;
export default Checkbox