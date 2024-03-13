import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import styled from 'styled-components';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Dropdawn = () => {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 1130, height: 47, mt: 3 }}>
        <StyledMenuItem>Вид акции</StyledMenuItem>

        <StyleSelect
          displayEmpty
          value={personName}
          onChange={handleChange}
          sx={{ borderRadius: '30px', boder: 'none', outline: 'none' }}
        >
          <StyledMenuItem value="">Выберите акцию</StyledMenuItem>
          <StyledMenuItem value={10}>Navat</StyledMenuItem>
          <StyledMenuItem value={21}>Placeholder</StyledMenuItem>
          <StyledMenuItem value={22}>Placeholder</StyledMenuItem>
          <StyledMenuItem value={23}>jfnfdjkvn fn</StyledMenuItem>
        </StyleSelect>
      </FormControl>
    </div>
  );
};
const StyleSelect = styled(Select)`
  background-color: #ffffff;
  .muiltr-1pjm608-MuiInputBase-root-MuiOutlinedInput-root-MuiSelect-root {
    border: white;
    -moz-appearance: none;
    -webkit-appearance: none;
    border: none;
    outline: none;
  }
  .muiltr-8cjwfd-MuiSvgIcon-root-MuiSelect-icon {
    color: black;
    font-size: 2.6rem;
  }
  .muiltr-1d3z3hw-MuiOutlinedInput-notchedOutline {
    border-color: #ffffff;
    border: none;
  }
  .muiltr-1t630aw-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input {
    font-weight: 400;
    font-size: 20px;
    line-height: 27px;
  }
`;
const StyledMenuItem = styled(MenuItem)`
  color: #9795a5;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;
export default Dropdawn;
