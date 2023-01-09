import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  fetchCheckoutFailure,
  fetchCheckoutRequest,
  fetchCheckoutSuccess,
} from "@src/redux/states/checkout";
import { AppStore } from "../../../redux/store";
import { getResume } from "../services/checkout.service";

export const useGetCheckout = () => {
  const dispatch = useDispatch();
  const { status, data, error } = useSelector((store: AppStore) => store.checkout);

  const doRequest = async () => {
    try {
      dispatch(fetchCheckoutRequest());
      const result = await getResume();
      dispatch(fetchCheckoutSuccess(result));
    } catch (error) {
      dispatch(fetchCheckoutFailure(error));
    }
  };

  return {
    doRequest,
    status,
    data,
    error,
  };
};
