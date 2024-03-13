import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import styled from 'styled-components';
import { InputLabel } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const CustomSelectMulti = ({ props }) => {
  const [personName, setPersonName] = React.useState();

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div>
      <StyledFormControl sx={{ m: 1, width: 450, height: 50 }}>
        <InputLabel>Острая пища</InputLabel>
        <Select value={personName} onChange={handleChange} input={<OutlinedInput />}>
          {props.map((name) => (
            <MenuItem key={name} value={name}>
              <ListItemText primary={name} />
            </MenuItem>
          ))}
        </Select>
      </StyledFormControl>
    </div>
  );
};
const StyledFormControl = styled(FormControl)`
  background-color: #ffffff;
  border-radius: 50px;
  .muiltr-rmtonw-MuiInputBase-root-MuiOutlinedInput-root {
    border-radius: 50px;
    border: 1px solid #ffffff;
    .muiltr-1d3z3hw-MuiOutlinedInput-notchedOutline {
      border: white;
      -moz-appearance: none;
      -webkit-appearance: none;
      border: none;
      outline: none;
    }
  }
  .muiltr-8cjwfd-MuiSvgIcon-root-MuiSelect-icon {
    color: black;
    font-size: 2.6rem;
  }
  .muiltr-17zf2hg-MuiFormLabel-root-MuiInputLabel-root {
    color: black;
  }
  .muiltr-rmtonw-MuiInputBase-root-MuiOutlinedInput-root {
    border: none;
    outline: none !important;
  }
  .muiltr-rmtonw-MuiInputBase-root-MuiOutlinedInput-root {
  }
  .muiltr-yf8vq0-MuiSelect-nativeInput {
  }
`;
export default CustomSelectMulti;
