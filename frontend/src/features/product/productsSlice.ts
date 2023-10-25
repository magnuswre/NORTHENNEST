import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import productService from './productsService'


const initialState = {
  products: [],
  loading: false,
  error: null as string | null, 
};

export const getAllProducts = createAsyncThunk('products/loadProducts', async (_, thunkAPI) => { 
    try {
       return await productService.getAllAsync()
    } catch (error){
       return thunkAPI.rejectWithValue(error)
    }
}) 

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.loading = true;
        state.error = null; // Set to null
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.error = null; // Set to null
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.loading = false;
        state.products = [];
        if (action.error.message !== undefined) {
          state.error = action.error.message;
        } else {
          state.error = null; // Set to null
        }
      });
  },
});


export default productsSlice.reducer;
