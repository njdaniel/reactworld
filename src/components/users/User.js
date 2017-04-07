/**
 * Created by nicholas on 4/7/17.
 */
import React, {Component} from 'react';

class User extends Component{
    render(){
        return(
            <li>
                {this.props.user.name}
            </li>

        )
    }
}

User.propTypes = {
    user: React.PropTypes.object.isRequired
};

export default User;
