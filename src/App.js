import React, { Component } from 'react';
import { SPList } from './SPList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: [
        "No Data in State"
      ]
    }

    this._handleClick = this._handleClick.bind(this);
    this._fetchListData = this._fetchListData.bind(this);
    this._updateListData = this._updateListData.bind(this);
  }

  _updateListData(item) {
    console.log('_updateListData', item);
    //item is an object literal
    let newState = [];
    newState.push(item);
    this.setState({
      listData: newState
    })
  }

  _fetchListData() {
    let that = this;
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
        that._updateListData(apiData);
      })
      .catch(error => error);
  }

  _handleClick() {
    this._fetchListData();
  }

  render() {
    return (
      <div className="App">
        <SPList listTitle="My List" listData={this.state.listData} onClick={this._handleClick} />
      </div>
    );
  }
}

export default App;