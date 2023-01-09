import { configureStore } from "@reduxjs/toolkit";
import { CheckoutState } from "@src/models";
import { checkoutSlice } from "./states/checkout";

export interface AppStore {
  checkout: CheckoutState;
}

export default configureStore<AppStore>({
  reducer: {
    checkout: checkoutSlice.reducer,
  },
});
