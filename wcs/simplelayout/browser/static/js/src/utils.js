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

function executeScriptElements(containerElement) {
  const scriptElements = containerElement.querySelectorAll("script");

  Array.from(scriptElements).forEach((scriptElement) => {
    const clonedElement = document.createElement("script");

    Array.from(scriptElement.attributes).forEach((attribute) => {
      clonedElement.setAttribute(attribute.name, attribute.value);
    });

    clonedElement.text = scriptElement.text;

    scriptElement.parentNode.replaceChild(clonedElement, scriptElement);
  });
}

export { axiosInstance, axiosNeutralInstance, executeScriptElements };
