import axios from "axios";
import qs from "qs";

function axiosInstance() {
  const instance = axios.create({
    paramsSerializer: (params) =>
      qs.stringify(params, { arrayFormat: "repeat" }),
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

// Taken from oderselect_input.js
function copyDataForSubmit(name) {
  // shortcuts for selection field and hidden data field
  var toSel = document.getElementById(name + "-to");
  var toDataContainer = document.getElementById(name + "-toDataContainer");

  // delete all child nodes (--> complete content) of "toDataContainer" span
  while (toDataContainer.hasChildNodes())
    toDataContainer.removeChild(toDataContainer.firstChild);

  // create new hidden input fields - one for each selection item of
  // "to" selection
  for (var i = 0; i < toSel.options.length; i++) {
    // create virtual node with suitable attributes
    var newNode = document.createElement("input");
    newNode.setAttribute("name", name.replace(/-/g, ".") + ":list");
    newNode.setAttribute("type", "hidden");
    newNode.setAttribute("value", toSel.options[i].value);


    // actually append virtual node to DOM tree
    toDataContainer.appendChild(newNode);
  }
}

export {
  axiosInstance,
  axiosNeutralInstance,
  executeScriptElements,
  copyDataForSubmit,
};
