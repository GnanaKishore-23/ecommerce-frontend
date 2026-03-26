import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-98df.up.railway.app//api"
});

export default API;
