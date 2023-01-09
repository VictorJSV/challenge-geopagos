import axios from "axios";
const baseUrl = "http://localhost:3001/api";

export const getResume = () => {
  return axios.get(baseUrl).then((res) => res.data);
};
