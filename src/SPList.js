import React, { Component } from 'react';


export class SPList extends Component {
    static propTypes = {
        listData: React.PropTypes.array.isRequired,
        onClick: React.PropTypes.func.isRequired
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
        let fieldLabelClass = "ms-font-l SPListItem-fieldLabel";
        let fieldValueClass = "ms-font-m SPListItem-fieldValue";
        
        return (
            <div className="SPListItem">
                <p>
                    <span className={fieldLabelClass}>{this.props.id && "Id"}</span>
                    <br />
                    <span className={fieldValueClass}>
                        <a href="#">{this.props.id}</a>
                    </span>
                </p>
                <p>
                    <span className={fieldLabelClass}>{this.props.userId && "UserId"}</span>
                    <br />
                    <span className={fieldValueClass}>
                        <a href="#">{this.props.userId}</a>
                    </span>
                </p>
                <p>
                    <span className={fieldLabelClass}>{this.props.title && "Title"}</span>
                    <br />
                    <span className={fieldValueClass}>{this.props.title}</span>
                </p>
                <p>
                    <span className={fieldLabelClass}>{this.props.body && "Body"}</span>
                    <br />
                    <span className={fieldValueClass}>{this.props.body}</span>
                </p>
            </div>
        );
    }
}