import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./app";
import "./index.css";

const mount = () => {
  const root = document.querySelector("#root");

  if (!root) {
    throw new Error(
      "Expected to find an element with the ID 'root' to mount app"
    );
  }

  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    root
  );
};

const onLoad = (callback: () => void) => {
  window.addEventListener("load", callback, { once: true });
};

onLoad(mount);
