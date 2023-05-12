import axios from "axios";

const BASE_URL = "http://localhost:3001";

export const getFiles = (queryName) => {
  return axios.get(
    `${BASE_URL}/files/data${queryName ? `?fileName=${queryName}` : ""}`
  );
};
