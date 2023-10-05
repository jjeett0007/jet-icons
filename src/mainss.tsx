import React from "react";
import "./App.css";
import YourIcon from "./JetIcons/Iconic/IconOne";

function App() {
  return (
    <>
      <YourIcon
        size={48}
        colors={{ primary: "blue", secondary: "red" }}
        trigger="click"
      />
    </>
  );
}

export default App;

