import axios from "../../axios";

const getUser = async (username, password) => {
  let body = {};
  if (!!username && !!password) {
    body.username = username;
    body.password = password;
  }
  return await axios.post("/login", body).then(response => {
    if (response.status !== 200) return { error: "could not reach to server" };
    return response.data;
  });
};

export default getUser;
