import axios from "axios";
import config from "./config";

let baseURL = config.api_baseUrl;

export default axios.create({baseURL});
