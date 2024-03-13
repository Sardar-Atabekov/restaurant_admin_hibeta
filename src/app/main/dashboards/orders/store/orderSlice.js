import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpApi from 'src/app/httpApi';

export const postProductOrders = createAsyncThunk('postProductOrders', async (rowId) => {
  console.log(rowId);
  const response = await httpApi.put(`/orders/Order/acceptrestorant?orderId=${rowId}`);
  console.log(response.data);
  return response.data;
});
export const postProductOrdersRefuse = createAsyncThunk(
  'postProductOrdersRefuse',
  async ({ id, orderLines, refetch }) => {
    console.log(id);
    console.log(orderLines);
    const response = await httpApi.put(`/orders/Order/restorantrefuse`, {
      id,
      orderLines,
    })
    // .than(res=> 
    //   // dataHandler()
    // )
    console.log(response.data);
    refetch();
    return response.data;
  }
);
export const postOrderStatus = createAsyncThunk(
  'postRestarantOrderStatus',
  async ({ id, acceptedOrderRestorantStatus }) => {
    console.log(id);
    console.log(acceptedOrderRestorantStatus);
    const response = await httpApi.put('orders/Order/restorantChangingStatusOrder', {
      id,
      acceptedOrderRestorantStatus,
    });
    console.log(response);
    return response;
  }
);
export const postProductEditOrders = createAsyncThunk('postProductEditOrders', async (rowId) => {
  console.log(rowId);
  const response = await httpApi.put(`/orders/Order/acceptrestorant?orderId=${rowId}`);
  console.log(response.data);
  return response.data;
});

const initialState = {
  user: [],
  error: null,
  loading: true,
  counter: 0,
};

const orderSlice = createSlice({
  name: 'orderProfile',
  initialState,
  reducers: {
    getOrdersSuccess: (state, action) => {
      state.id = action.payload;
      state.loading = false;
    },
    getOrdersRefuse: (state, action) => {
      state.id = action.payload;
      state.loading = false;
    },
    getOrdersStatus: (state, action) => {
      state.id = action.payload;
      state.loading = false;
    },
  },
  extraReducers: {
    [postProductOrders.fulfilled]: (state, action) => action.payload,
    [postProductOrdersRefuse.fulfilled]: (state, action) => action.payload,
    [postOrderStatus.fulfilled]: (state, action) => action.payload,
  },
});
export const { getOrdersSuccess, getOrdersRefuse, getOrdersStatus } = orderSlice.actions;
export default orderSlice.reducer;
