import { configureStore } from "@reduxjs/toolkit";
import packageSlice from "../features/_package/packageSlice";
import packagesSlice from "../features/_package/packagesSlice";

import rentalObjectSlice from "../features/rentalObject/rentalObjectSlice";
import rentalObjectsSlice from "../features/rentalObject/rentalObjectsSlice";

export const store = configureStore({
    reducer: {
      _package: packageSlice,
      packages: packagesSlice,
      rentalObject: rentalObjectSlice,
      rentalObjects: rentalObjectsSlice

    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
