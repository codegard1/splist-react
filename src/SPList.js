import React, { Component } from 'react';

export class SPList extends Component {
    static propTypes = {
        listTitle: React.PropTypes.string,
        listData: React.PropTypes.array,
        listFetch: React.PropTypes.any
    }

    render() {
        let listItems = this.props.listData.map((item, index) => { return <li key={"listItem-" + index}>{item}</li> });
        return (
            <div className="SPList">
                <h2>{this.props.listTitle}</h2>
                <ul>
                    {listItems}
                </ul>
            </div >
        );
    }
}