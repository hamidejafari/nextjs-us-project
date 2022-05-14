// import axiosInstance from "../../utiles/axiosInstance";
import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
} from "../constants/userConstant";
import axios from "axios";
import Swal from "sweetalert2";

import { useCookies } from "react-cookie";

export default function userReducer(
  state = { user: {}, loading: false, error: {} },
  action
) {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { ...state,loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {}, error: {} };
    default:
      return state;
  }
}

export const getUserDetails = (cookies) => {
  return async (dispatch) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST });

      if (!cookies["user"]?.token) {
        return;
      }

      const axiosInstance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_SERVER_URL + "/api/",
      });
      axiosInstance.interceptors.request.use(function (config) {
        if (cookies["user"]?.token) {
          config.headers.Authorization = `Bearer ${cookies["user"]?.token}`;
        }
        return config;
      });
      axiosInstance.interceptors.response.use(
        function (response) {
          return response;
        },
        function (error) {
          if (
            error?.response?.status >= 500 &&
            error?.response?.status <= 599
          ) {
            Swal.fire(`Error happened please contact admin.`);
          }
          return Promise.reject(error);
        }
      );

      const { data } = await axiosInstance.get("/user-details");

      // console.log(data);
      dispatch({
        type: USER_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: error.response,
      });
    }
  };
};
