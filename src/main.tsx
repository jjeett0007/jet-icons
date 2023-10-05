import React from "react";
import ReactDOM from "react-dom/client";
// import App from './main'
import "./index.css";
import YourIcon from "./JetIcons/Iconic/IconOne";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <YourIcon
      size={48}
      colors={{ primary: "blue", secondary: "red" }}
      trigger="click"
    />
  </React.StrictMode>
);
