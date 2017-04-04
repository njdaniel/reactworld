/**
 * Created by nicholas on 4/4/17.
 */
import React, {Component} from 'react';
import Channel from './Channel.js';

class ChannelList extends Component{
    render(){
        return(
            <ul>
                {this.props.channels.map(chan => {
                    return <Channel
                        channel={chan}
                        key={chan.id}
                        setChannel={this.props.setChannel}
                    />
                })
                }</ul>
        )
    }
}

export default ChannelList;