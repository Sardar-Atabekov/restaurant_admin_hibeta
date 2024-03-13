import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CustomSelect() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 280, height: 40, mt: 3 }}>
        <p className="text-gray font-500 ml-11">Выбрать ресторан</p>

        <Select
          displayEmpty
          value={personName}
          onChange={handleChange}
          sx={{ borderRadius: '30px' }}
        >
          <MenuItem value="">Belliguo</MenuItem>
          <MenuItem value={10}>Navat</MenuItem>
          <MenuItem value={21}>Placeholder</MenuItem>
          <MenuItem value={22}>Placeholder</MenuItem>
          <MenuItem value={23}>jfnfdjkvn fn</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
