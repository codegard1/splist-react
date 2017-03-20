import React, { Component } from 'react';

export class SPList extends Component {
    static propTypes = {
        listTitle: React.PropTypes.string,
        listData: React.PropTypes.array,
        listFetch: React.PropTypes.any,
        onClick: React.PropTypes.func
    }

    render() {
        let listItems = this.props.listData.map(
            (item, index) => <SPListItem key={"listItem-" + index}
                title={item.title}
                body={item.body}
                userId={item.userId}
                id={item.id} />);
        return (
            <div className="SPList">
                <h2>{this.props.listTitle}</h2>
                    {listItems}
                <button onClick={this.props.onClick}>Refresh</button>
            </div >
        );
    }
}

export class SPListItem extends Component {
    static propTypes = {
        userId: React.PropTypes.number,
        id: React.PropTypes.number,
        title: React.PropTypes.string,
        body: React.PropTypes.string
    }

    render() {
        return (
            <ul>
                <li>{this.props.userId && "UserId: " + this.props.userId }</li>
                <li>{this.props.id && "Id: " + this.props.id}</li>
                <li>{this.props.title && "Title: " + this.props.title}</li>
                <li>{this.props.body && "Body: " + this.props.body}</li>
            </ul>
        );
    }
}