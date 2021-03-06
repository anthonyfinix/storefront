import axios from "axios";
import config from "./config";

let baseURL = config.baseUrl;
let instance = axios.create({ baseURL });
instance.interceptors.response.use(request=>{
    console.log(request)
    return request
});

export default instance;
