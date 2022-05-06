import axios from "axios";

function axiosInstance() {
  const instance = axios.create({
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Prefer: "return=representation",
    },
  });
  return instance;
}

export { axiosInstance };
