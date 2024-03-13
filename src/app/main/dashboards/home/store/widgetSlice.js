import axios from 'axios';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getWidgets = createAsyncThunk('', async () => {
  const response = await axios.get('./api');

  const data = await response.data;
  return data;
});

const wiggetsSlice = createSlice({
  name: 'homeDashboardsApp/widgets',
  initialState: null,
  reducers: {},
  extraReducers: {
    [getWidgets.fulfilled]: (state, action) => action.payload,
  },
});

export const selectWidgets = ({ homeDashboardApp }) => homeDashboardApp;

export default wiggetsSlice.reducer;
