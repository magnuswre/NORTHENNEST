import { configureStore } from "@reduxjs/toolkit";
import packageSlice from "../features/_package/packageSlice";
import packagesSlice from "../features/_package/packagesSlice";

import productSlice from "../features/product/productSlice";
import productsSlice from "../features/product/productsSlice";

export const store = configureStore({
    reducer: {
      package: packageSlice,
      packages: packagesSlice,
      product: productSlice,
      products: productsSlice

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
