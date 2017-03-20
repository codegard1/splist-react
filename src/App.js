import React, { Component } from 'react';
import { SPListItem } from './SPList';
import './App.css';

import { List } from 'office-ui-fabric-react/lib/List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    }

    this._handleClick = this._handleClick.bind(this);
    this._renderCell = this._renderCell.bind(this);
  }

  // Fetch list data right away 
  componentWillMount() {
    this.props.ajax(this);
  }

  // Fetch list data on button click
  _handleClick() {
    this.props.ajax(this);
  }

  _renderCell(item, index) {
    return (
      <SPListItem {...item} />
    );
  }

  render() {
    return (
      <div className="App">
        <List items={this.state.listData} onRenderCell={this._renderCell} onClick={this._handleClick} />
      </div>
    );
  }
}

export default App;