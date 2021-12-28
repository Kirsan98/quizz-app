import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import Header from './Components/Header/index';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'


const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
      <Header />
     <Routes>
      <Route exact path="/" element={<App />} />
    </Routes>
  </Router>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();