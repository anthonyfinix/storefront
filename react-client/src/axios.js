import axios from "axios";
import config from "./config";

let baseURL = config.baseUrl;
let instance = axios.create({ baseURL, withCredentials: true });

instance.interceptors.request.use((request) => {
    // request.headers.post['Access-Control-Allow-Origin'] = "*"
    // request.headers.post['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept";
    return request
})
instance.interceptors.response.use((response) => response);

export default instance;
