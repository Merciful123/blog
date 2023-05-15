import axios from "axios";

export const requrl = "https://mern-blog-6hv6.onrender.com/api/";

export const backend = axios.create({
  baseURL: "/api/",
});
