import axios from "axios";

function axiosInstance() {
  const instance = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
  });
  return instance;
}

export { axiosInstance };
