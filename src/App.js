import React, { Component } from 'react';
import { SPList } from './SPList';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }

    this._handleClick = this._handleClick.bind(this);
  }

  // Fetch list data right away 
  /*componentWillMount() {
    this.props.ajax(this);
  }*/

  // Fetch list data on button click
  _handleClick() {
    this.props.ajax(this);
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