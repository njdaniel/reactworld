/**
 * Created by nicholas on 4/6/17.
 */
import React, {Component} from 'react';
import MessageList from './MessageList';
import MessageForm from './MessageForm';


class MessageSection extends Component{
    render(){
        let {activeChannel} = this.props;
        return(
            <div className="messages-container panel panel-default">
                <div className="panel-heading"><strong>{activeChannel.name}</strong></div>
                <div className="panel-body messages">
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        )
    }
}

MessageSection.PropTypes = {
    messages: React.PropTypes.array.isRequired,
    activeChannel: React.PropTypes.object.isRequired,
    addMessgae: React.PropTypes.func.isRequired
};

export default MessageSection;
