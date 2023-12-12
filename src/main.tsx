import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <h1 className="text-3xl font-bold text-center text-teal-700 p-5">This dustbin accepts:</h1>
    <App />
  </React.StrictMode>
);
