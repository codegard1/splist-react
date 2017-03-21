import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { fetchListData } from './fetchListData'; 

ReactDOM.render(
  <App ajax={fetchListData} />,
  document.getElementById('root')
);
