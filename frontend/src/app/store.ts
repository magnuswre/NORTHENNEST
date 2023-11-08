import { configureStore } from "@reduxjs/toolkit";
import packageSlice from "../features/_package/packageSlice";
import packagesSlice from "../features/_package/packagesSlice";

import rentalObjectSlice from "../features/rentalObject/rentalObjectSlice";
import rentalObjectsSlice from "../features/rentalObject/rentalObjectsSlice";

// import facilitySlice from "../features/facility/facilitySlice"
import facilitiesSlice from "../features/facility/facilitiesSlice";
import orderSlice from "../features/order/orderSlice";


export const store = configureStore({
    reducer: {
      _package: packageSlice,
      packages: packagesSlice,
      rentalObject: rentalObjectSlice,
      rentalObjects: rentalObjectsSlice,
      order: orderSlice,
      // facility: facilitySlice,
      facilities: facilitiesSlice


    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
