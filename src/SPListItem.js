import React, { Component } from 'react';

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