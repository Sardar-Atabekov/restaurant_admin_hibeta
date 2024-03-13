import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import httpApi from 'src/app/httpApi';

export const postProductCategoryList = createAsyncThunk(
  'postProductCategoryList ',
  async (datas) => {
    const response = await httpApi.post(`/restorants/RestorantAndCategories`, datas);

    return response.data;
  }
);

export const postTagName = createAsyncThunk('postTagName', async ({ productId, tagTitle }) => {
  const response = await httpApi.post(`/products/Tag/toproduct`, { productId, tagTitle });
  return response.data;
});

export const deleteProductTagName = createAsyncThunk(
  'deleteProductTagName',
  async ({ data, refetch }) => {
    const response = await httpApi.delete(`/products/Tag/toproduct`, { data });
    console.log(response);
    refetch();
    return response.data;
  }
);

export const deleteCategory = createAsyncThunk('deleteCategory', async ({ productId, typeId }) => {
  console.log(productId);
  console.log(typeId);
  const response = await httpApi.delete(`/restorants/RestorantAndCategories`, {
    productId,
    typeId,
  });
  console.log(response);
  return response.data;
});
export const deleteProduct = createAsyncThunk('deleteProduct', async ({ id }) => {
  const response = await httpApi.delete(`/products/Product?id=${id}`);
  console.log(response.data);
  return response.data;
});
export const postProductNewId = createAsyncThunk(
  'postProductNewId',
  async ({
    unitId,
    title,
    description,
    name,
    active,
    convFactAmount,
    convFactKilogram,
    convFactLiter,
    length,
    height,
    width,
    netWeight,
    weight,
    countryId,
    categoryId,
    restorantId,
    primartyImageName,
    isPasived,
    isPublished,
  }) => {
    const response = await httpApi.post(`/products/Product`, {
      unitId,
      title,
      description,
      name,
      active,
      convFactAmount,
      convFactKilogram,
      convFactLiter,
      length,
      height,
      width,
      netWeight,
      weight,
      countryId,
      categoryId,
      restorantId,
      primartyImageName,
      isPasived,
      isPublished,
    });
    console.log(response.data);
    return response.data;
  }
);

export const Postlanguages = createAsyncThunk(
  'Postlanguages',
  async ({ langCode, productId, title, description }) => {
    const response = await httpApi.post(`/products/Translate`, {
      langCode,
      productId,
      title,
      description,
    });
    console.log(response);
    return response.data;
  }
);

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
    getCategoryList: (state, action) => {
      state.id = action.payload;
      state.loading = false;
    },
    getProductTagName: (state, action) => {
      state.id = action.payload;
      state.loading = false;
    },
    postProductNewIdName: (state, action) => {
      state.id = action.payload;
      state.loading = false;
    },
    postProductTagDelete: (state, action) => {
      state.id = action.payload;
      state.loading = false;
    },
    postlanguages: (state, action) => {
      state.id = action.payload;
      state.loading = false;
    },
  },
  extraReducers: {
    [postProductCategoryList.fulfilled]: (state, action) => action.payload,
    // [postProductImage.fulfilled]: (state, action) => action.payload,
    [postTagName.fulfilled]: (state, action) => action.payload,
    [postProductNewId.fulfilled]: (state, action) => action.payload,
    [deleteProductTagName.fulfilled]: (state, action) => action.payload,
    [Postlanguages.fulfilled]: (state, action) => action.payload,
  },
});
export const {
  getCategoryList,
  getProductTagName,
  postProductNewIdName,
  postProductTagDelete,
  postlanguages,
} = orderSlice.actions;
export default orderSlice.reducer;
