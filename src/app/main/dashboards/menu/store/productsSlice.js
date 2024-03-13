// eslint-disable-next-line import/prefer-default-export
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpApi from 'src/app/httpApi';

// eslint-disable-next-line import/prefer-default-export
export const postProductImage = (imageFile, rowId) => {
  const token = localStorage.getItem('accessToken');
  if (imageFile !== null) {
    const formData = new FormData();
    formData.append('file', imageFile);
    // const token=TokenService.getLocalAccessToken();
    console.log(formData);
    fetch(
      `http://192.168.97.6:2002/images/Image?control=products&rowId=${rowId}&listWidth=100&showWitdht=425`,
      {
        method: 'POST',
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: '*/*',
        },
      }
    )
      .then((res) => {
        console.log(`Success${res.data}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }
};


const postunitproduct = ()=>{
  
}

