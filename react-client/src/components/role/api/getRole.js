import axios from "../../../axios";

export default async ({ page }) => {
    let params = {};
    if (page) params.page = page;
    return await axios.get("api/role", { params });
  };
  
