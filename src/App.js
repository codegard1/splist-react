import React, { Component } from 'react';
import { SPListItem } from './SPListItem';
import './App.css';
import 'office-ui-fabric-react/dist/css/fabric.min.css';
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
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-u-sm1 ms-u-md2 ms-u-lg2"></div>
        <div className="ms-Grid-col ms-u-sm10 ms-u-md8 ms-u-lg8">
          <SPListItem {...item} />
        </div>
        <div className="ms-Grid-col ms-u-sm1 ms-u-md2 ms-u-lg2"></div>
      </div>
    );
  }

  render() {
    return (
      <div className="ms-Grid">
        <div className="ms-Grid-row">
          <div className="ms-Grid-col ms-u-sm1 ms-u-md2 ms-u-lg2"></div>
          <div className="ms-Grid-col ms-u-sm10 ms-u-md8 ms-u-lg8">
            <span className="ms-font-su">SPList</span>
          </div>
          <div className="ms-Grid-col ms-u-sm1 ms-u-md2 ms-u-lg2"></div>
        </div>

        <List items={this.state.listData} onRenderCell={this._renderCell} />
      </div>
    );
  }
}

export default App;