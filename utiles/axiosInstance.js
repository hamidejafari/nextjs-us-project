import axios from "axios";
import Swal from 'sweetalert2'
import { useCookies } from "react-cookie"


const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL + "/api/",
});

axiosInstance.interceptors.request.use(function (config) {
  const [cookies] = useCookies(['user']);

  if (cookies["user"]?.token) {
    config.headers.Authorization = `Bearer ${cookies["user"]?.token}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    if (error?.response?.status >= 500 && error?.response?.status <= 599) {
      Swal.fire(`Error happened please contact admin.`);
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axiosInstance;