import React, { Component } from 'react';
import { gql} from 'apollo-boost'
import {graphql} from 'react-apollo'
const users = gql`
{
    users{
        id
        name
        email
    }
}
`
class UserList extends Component {

    displayUsers(){
        var data = this.props.data;
        if(data.loading){
            return( <div>Loading books...</div> );
        } else {
            return data.users.map(user => {
                return(
                <li key={ user.id }>{ user.name  } : {user.email}</li>
                );
            })
        }
    }
    render() {
        console.log(this.props.data.users)
        var userList = this.props.data.users;
        return (
            <div>
                <p>HelLo</p>
               <ul>{this.displayUsers()}</ul>
            </div>
        );
    }
}

export default graphql(users)(UserList);