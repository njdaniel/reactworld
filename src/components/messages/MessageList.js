/**
 * Created by nicholas on 4/6/17.
 */
import React, {Component} from 'react';
import Message from './Message';

class MessageList extends Component{
    render() {
        return (
            <ul>{
                this.props.messages.map(message => {
                    return (
                        <Message key={message.id} message={message}/>
                    )
                })
            }</ul>
        )
    }
}

MessageList.PropTypes = {
    messages: React.PropTypes.array.isRequired
};

export default MessageList;
