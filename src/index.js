import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const fetchListData = function (component, additionalArgs) {
  console.log('fetchListData');
  //let that = this;
  return fetch('http://jsonplaceholder.typicode.com/posts/1', {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'get'
  })
    .then(function (response) {
      if (!response.ok) {
        throw new Error(response)
      } else {
        return response.json()
      }
    })
    .then(function (apiData) {
      let newState = [];
      newState.push(apiData);
      component.setState({
        listData: newState
      })
    })
    .catch(error => error);
}

ReactDOM.render(
  <App ajax={fetchListData} />,
  document.getElementById('root')
);
