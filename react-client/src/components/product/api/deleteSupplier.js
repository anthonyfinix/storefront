import axios from "../../../axios";

export default async (id) => {
  return await axios.delete("api/product", { params: { id } });
};
