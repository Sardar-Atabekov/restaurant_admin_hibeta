import { useState } from 'react';
import Select from 'react-select';
import styled from '@emotion/styled';
import { useDispatch } from 'react-redux';
import { postOrderStatus } from '../store/orderSlice';

function Dropdown({ orderId }) {
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState(null);

  const data1 = [
    {
      id: orderId,
      acceptedOrderRestorantStatus: 'GettingReady',
      text: 'Готовится',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 5.73914V12H17.2174"
            stroke="#3C3756"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12.2611"
            cy="12.2608"
            r="9.65217"
            stroke="#3C3756"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      arrow: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M5.39744 7.5L9.5 1L1 1L5.39744 7.5Z"
            fill="#3C3756"
            stroke="#3C3756"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: orderId,
      text: 'Готов',
      acceptedOrderRestorantStatus: 'Ready',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M11.791 5.53052V11.7914H17.0084"
            stroke="#343EED"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="12.0521"
            cy="12.0522"
            r="9.65217"
            fill="#343EED"
            stroke="#343EED"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7.7998 12.5143L10.5427 15.6L16.1998 8.40002"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      arrow: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M5.39744 7.5L9.5 1L1 1L5.39744 7.5Z"
            fill="#3C3756"
            stroke="#3C3756"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: orderId,
      text: 'У курьера',
      acceptedOrderRestorantStatus: 'InTheCurrier',
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            cx="12.0521"
            cy="12.0522"
            r="9.65217"
            fill="#23D17C"
            stroke="#23D17C"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 12.0001L16.3615 12.0001"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12.6216 7.99999L16.3614 12.0002L12.6216 16.0004"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      arrow: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="8"
          viewBox="0 0 10 8"
          fill="none"
        >
          <path
            d="M5.39744 7.5L9.5 1L1 1L5.39744 7.5Z"
            fill="#3C3756"
            stroke="#3C3756"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const handleChange = (e) => {
    setSelectedOption(e);
  };
  const customStyles = {
    control: (base, state) => ({
      ...base,
      borderRadius: 50,
    }),
    menu: (base) => ({
      ...base,
      borderRadius: 20,
      marginTop: 0,
    }),
    menuList: (base) => ({
      ...base,
      padding: 0,
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: 'none',
      background: 'yellow',
    }),
    myDropDown__indicator: (base) => ({
      ...base,
      '&.myDropDown__dropdown-indicator': {
        '&.indicatorContainer': {
          color: '#000000',
        },
      },
    }),
  };

  const HandleSelect = (id, acceptedOrderRestorantStatus) => {
    dispatch(postOrderStatus({ id, acceptedOrderRestorantStatus }));
  };

  return (
    <div className="App">
      <Dropdawn
        value={selectedOption}
        options={data1}
        styles={customStyles}
        onChange={handleChange}
        components={{
          DropdownIndicator: () => null,
          IndicatorSeparator: () => null,
        }}
        getOptionLabel={(e) => (
          <SelectLi onClick={() => HandleSelect(e.id, e.acceptedOrderRestorantStatus)}>
            <p>{e.icon}</p>
            <p style={{ marginLeft: 5, fontWeight: 'bold' }}>{e.acceptedOrderRestorantStatus}</p>
            <p>{e.arrow}</p>
          </SelectLi>
        )}
      />
    </div>
  );
}
const Dropdawn = styled(Select)`
  width: 164px;
  height: 32px;
  .css-1s2u09g-control {
    border-radius: 50px;
  }
  .css-qc6sy-singleValue {
    height: 32px;
  }
`;
const SelectLi = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default Dropdown;
