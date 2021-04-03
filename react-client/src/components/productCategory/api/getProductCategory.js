import axios from "../../../axios";

export default async ({ page }) => {
    if (!page) page = 1;
    return await axios.get("api/productCategory", {
        params: { page }
    });
}
