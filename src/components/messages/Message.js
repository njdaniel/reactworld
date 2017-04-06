/**
 * Created by nicholas on 4/6/17.
 */
import React, {Component} from 'react';
import fecha from 'fecha';

class Message extends Component{
    render(){
        let {message} = this.props;
        let createdAt = fecha.format(message.createAt, 'HH:mm:ss MM/DD/YYYY')
        return(
            <li className="message">
                <div className="author">
                    <strong>{message.author}</strong>
                    <i className="timestamp">{createdAt}</i>
                </div>
                <div className="body">{message.body}</div>
            </li>
        )
    }
}

Message.PropTypes = {
    message: React.PropTypes.object.isRequired
};

export default Message;
