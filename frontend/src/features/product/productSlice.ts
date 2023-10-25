import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productsService from "./productsService"


const initialState = {
    product: null,
    error: null as string | null,
    loading: false
}


export const getProductById = createAsyncThunk('product/getById', async (id: string, thunkAPI) => { 
    try {
       return await productsService.getByIdAsync(id)
    } catch (err){
       console.log(err)
       return thunkAPI.rejectWithValue(err) 
    }
}) 
 
export const productSlice = createSlice({ 
    name: 'product',
    initialState,
    reducers: {
      clearProduct: (state) => {
        state.product = null
      }
    },
    extraReducers: (builder) => { 
      builder
          .addCase(getProductById.pending, (state) => {
            state.loading = true
          })
          .addCase(getProductById.fulfilled, (state, action)=> {
            state.loading = false
            state.product = action.payload
            state.error = null
          })
          .addCase(getProductById.rejected, (state, action) => {
            state.loading = false
            state.product = null
            state.error = action.payload as string | null
          })

      }
    
})

export const { clearProduct, } = productSlice.actions 

export default productSlice.reducer