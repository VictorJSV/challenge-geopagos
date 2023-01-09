import { createSlice } from "@reduxjs/toolkit";
import { RequestType } from "@src/const/request";
import { CheckoutState } from "@src/models";

const initialState: CheckoutState = {
  status: RequestType.Idle,
  error: null,
  data: {
    total: 0,
    items: []
  },
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    fetchCheckoutRequest: (state) => {
      return {
        ...state,
        status: RequestType.Pending,
      };
    },
    fetchCheckoutFailure: (state, action) => {
      return {
        ...state,
        status: RequestType.Rejected,
        error: action.payload,
      };
    },
    fetchCheckoutSuccess: (state, action) => {
      return {
        ...state,
        status: RequestType.Resolved,
        data: action.payload,
      };
    },
  },
});

export const {
  fetchCheckoutFailure,
  fetchCheckoutRequest,
  fetchCheckoutSuccess,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;
