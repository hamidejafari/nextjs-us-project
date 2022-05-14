import {
  BUSINESS_DETAILS_FAIL,
  BUSINESS_DETAILS_REQUEST,
  BUSINESS_DETAILS_RESET,
  BUSINESS_DETAILS_SUCCESS,
} from "../constants/businessConstant";
import businessAxiosInstance from "../../utiles/businessAxiosInstance";

export default function businessReducer(
  state = { business: {}, loading: false, error: {} },
  action
) {
  switch (action.type) {
    case BUSINESS_DETAILS_REQUEST:
      return { ...state, loading: true };
    case BUSINESS_DETAILS_SUCCESS:
      return { loading: false, business: action.payload };
    case BUSINESS_DETAILS_FAIL:
      return { ...state, loading: false, error: action.payload };
    case BUSINESS_DETAILS_RESET:
      return { business: {}, error: {} };
    default:
      return state;
  }
}

export const getBusinessDetails = (cookies) => {
  return async (dispatch) => {
    try {
      dispatch({ type: BUSINESS_DETAILS_REQUEST });

      if (!cookies["business"]?.token) {
        return;
      }

      const { data } = await businessAxiosInstance(cookies).get(
        "/site/business/user-details"
      );
      dispatch({
        type: BUSINESS_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: BUSINESS_DETAILS_FAIL,
        payload: error.response,
      });
    }
  };
};
