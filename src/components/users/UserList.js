/**
 * Created by nicholas on 4/4/17.
 */
import React from 'react';
import User from './User';

class UserList extends React.Component{
    render(){
        return(
            <ul>{
                this.props.users.map( user =>{
                    return(
                        <User
                            key={user.id}
                            user={user}
                        />
                    )
                })
            }</ul>
        )
    }
}

UserList.propTypes = {
    users: React.PropTypes.array.isRequired
};

export default UserList;