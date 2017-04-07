import React, { Component } from 'react';
import ChannelSection from './components/channels/ChannelSection.js';
import UserSection from './components/users/UserSection';
import MessageSection from './components/messages/MessageSection';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            channels: [],
            users: [],
            messages: [],
            activeChannel: {}
        };
    }
    addChannel(name){
        let {channels} = this.state;
        channels.push({id: channels.length, name});
        this.setState({channels});
        // TODO: Send to sever
    }
    setChannel(activeChannel){
        this.setState({activeChannel});
        // TODO: Get Channels Messages
    }
    setUserName(name){
        let {users} = this.state;
        users.push({id: users.length, name});
        this.setState({users});
        // TODO: Sender to server
    }
    addMessage(body){
        let {messages, users} = this.state;
        let createdAt = new Date;
        let author = users.length > 0 ? users[0].name : 'anonymous';
        messages.push({id: messages.length, body, createdAt, author});
        this.setState({messages});
        // TODO: Send to server
    }
    render(){
        return(
            <div className="app">
                <div className="nav">
                    <ChannelSection
                        {...this.state}
                        addChannel={this.addChannel.bind(this)}
                        setChannel={this.setChannel.bind(this)}
                    />
                    <UserSection
                        {...this.state}
                        setUserName={this.setUserName.bind(this)}
                    />
                </div>
                <MessageSection
                    {...this.state}
                    addMessage={this.addMessage.bind(this)}
                />
            </div>

        )
    }
}

export default App;