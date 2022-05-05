import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import axios from 'axios';
axios.defaults.baseURL = "http://localhost:8001/api/"
axios.defaults.headers.common['Authorization'] = 'Bearer :' + localStorage.getItem('token');


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



