import axios from "axios";
import { params } from "./constants";

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = params.API_URL;
axiosInstance.defaults.headers.common["Content-Type"] = "application/json";
axiosInstance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axiosInstance.defaults.headers.common["Access-Control-Allow-Methods"] =
  "GET,PUT,POST,DELETE,PATCH,OPTIONS";

export default axiosInstance;
