import * as React from "react";
import * as ReactDOM from "react-dom";
import "./app.css";

const Greet = () => {
  return <h1>Hello, world!</h1>;
};

const mount = () => {
  const root = document.querySelector("#root");

  if (!root) {
    throw new Error(
      "Expected to find an element with the ID 'root' to mount app"
    );
  }

  ReactDOM.render(
    <React.StrictMode>
      <Greet />
    </React.StrictMode>,
    root
  );
};

const onLoad = (callback: () => void) => {
  window.addEventListener("load", callback, { once: true });
};

onLoad(mount);
