import axios from "../../../axios";

export default async ({ page = 1 }) => {
  return await axios.get("api/product", { page });
};
