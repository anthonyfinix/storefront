import axios from "axios";
import config from "./config";

let baseURL = config.baseUrl;
let instance = axios.create({ baseURL, withCredentials: true });
instance.interceptors.response.use((request) => {
  console.log(request);
  return request;
});

export default instance;
