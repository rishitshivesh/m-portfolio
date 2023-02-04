import axios from "axios";

// const token = process.env.TOKEN;
// async function hash() {
//   const auth = await bcryptjs.hash(process.env.TOKEN, 12);
//   return auth;
// }
// console.log(env);
const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: process.env.REACT_APP_AUTHORIZATION,
  },
});

export default instance;
