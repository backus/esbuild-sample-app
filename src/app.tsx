import React from "react";
import logo from "./logo.svg";
import "./app.css";

export function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/app.tsx</code>. Refresh to reload
        </p>
        <a
          className="app-link"
          href="https://esbuild.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn esbuild
        </a>
      </header>
    </div>
  );
}
