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

function axiosNeutralInstance() {
  const instance = axios.create({
    headers: {
      Accept: "text/html",
    },
  });
  return instance;
}

export { axiosInstance, axiosNeutralInstance };
