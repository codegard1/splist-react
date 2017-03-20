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
    this._updateListData = this._updateListData.bind(this);
  }

  componentWillMount() {
    this.props.ajax(this);
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

  _handleClick() {
    this.props.ajax(this);
  }

  render() {
    return (
      <div className="App">
        <SPList listTitle="My List" listData={this.state.listData || []} onClick={this._handleClick} />
      </div>
    );
  }
}

export default App;