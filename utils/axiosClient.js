import axios from "axios";
import {baseUrl} from "./constants";

const axiosClient = axios.create({
  baseURL: baseUrl,
});

export default axiosClient;

