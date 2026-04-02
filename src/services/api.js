import axios from "axios";

const API = axios.create({
  baseURL:"https://ecommerce-backend-production-b75f.up.railway.app/api/products"
});

export default API;
