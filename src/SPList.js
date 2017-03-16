import React, { Component } from 'react';

export class SPList extends Component {
    static propTypes = {
        listTitle: React.PropTypes.string,
        listData: React.PropTypes.array,
        listFetch: React.PropTypes.any
    }

    render() {
        let listItems = this.props.listData.map((item, index) => <SPListItem key={"listItem-" + this.props.index} item={item} />);
        return (
            <div className="SPList">
                <h2>{this.props.listTitle}</h2>
                <ul>
                    {listItems}
                </ul>
                <button onClick={this.props.onClick}>Refresh</button>
            </div >
        );
    }
}

export class SPListItem extends Component {
    static propTypes = {
        item : React.PropTypes.string.isRequired,
        index : React.PropTypes.number.isRequired
    }

    render() {
        return (
            <li>{this.props.item}</li>
        );
    }
}