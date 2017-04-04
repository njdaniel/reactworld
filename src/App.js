import React, { Component } from 'react';
import ChannelSection from './components/channels/ChannelSection.js';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            channels: []
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
    render(){
        return(
            <ChannelSection
                channels={this.state.channels}
                setChannel={this.addChannel.bind(this)}
                addChannel={this.setChannel.bind(this)}
            />
        )
    }
}

export default App;