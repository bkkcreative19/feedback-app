import axios from "axios";

export const instance = axios.create({
  baseURL: "http://localhost:5001/api",
  timeout: 1000,
  headers: { "x-access-token": JSON.parse(localStorage.getItem("data")).token },
});
