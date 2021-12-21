import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Wrapper from "./components/Wrapper";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Wrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Wrapper>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
