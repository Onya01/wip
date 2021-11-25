import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// import { render } from "react-dom";
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";

// const rootElement = document.getElementById("root");
// render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   rootElement
// );