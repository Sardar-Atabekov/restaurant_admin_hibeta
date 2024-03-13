import { combineReducers } from '@reduxjs/toolkit';
import orderSlice from './orderSlice';

const reducer = combineReducers({
  orderSlice,

});
export default reducer;
