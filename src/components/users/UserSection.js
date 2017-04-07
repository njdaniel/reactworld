/**
 * Created by nicholas on 4/7/17.
 */
import React, {Component} from 'react';
import UserList from './UserList';
import UserForm from './UserForm';

class UserSection extends Component{
    render(){
        return(
            <div className="support panel panel-primary">
                <div className="panel-heading">
                    <strong>Users</strong>
                </div>
                <div className="panel-body users">
                    <UserList {...this.props}/>
                    <UserForm {...this.props} />
                </div>
            </div>
        )
    }
}

UserSection.PropTypes = {
    users: React.PropTypes.array.isRequired,
    setUserName: React.PropTypes.func.isRequired
};

export default UserSection;