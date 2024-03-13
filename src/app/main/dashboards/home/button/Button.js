/* eslint-disable import/prefer-default-export */
import { useState } from 'react';
import styled from 'styled-components';

export const Button = () => {
  const [checked, setChecked] = useState(true)
  return (
    <ButtonStyle>
       <p className="text-gray font-500 ">Выбрать</p>
      <CheckBoxWrapper>
        <CheckBoxInput id="checkbox" type="checkbox" />
        <CheckBoxLabel htmlFor="checkbox" />
      </CheckBoxWrapper>
    </ButtonStyle>
  );
};
const ButtonStyle = styled.div`
  position: relative;
  top: 25px;
`;

const CheckBoxWrapper = styled.div`
  position: relative;
  display: inline-block;
  width: 75px;
  height: 34px;
`;
const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0px;
  width: 75px;
  height: 30px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    margin-top: 5px;
  }
`;

const CheckBoxInput = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 80px;
  height: 30px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    content: 'Выкл';
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 20px;
      height: 20px;
      margin-left: 21px;
      transition: 0.2s;
      position: relative;
      left: 30px;
      bottom: 20px;
    }

    &::before {
      content: 'Вкл';
      position: relative;
      top: 3px;
      right: -10px;
      color: white;
    }
  }
`;
