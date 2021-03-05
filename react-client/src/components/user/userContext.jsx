import React from 'react';
import Login from '../login';
import axios from '../../axios';
export const UserContext = React.createContext();

class UserProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: { name: "Anthony Finix" }
        };
        this.setUser = this.setUser.bind(this);
    }
    setUser(user) {
        this.setState({ user })
    }
    async getUser() {
        await axios.get('/get')
            .then((response) => {
                console.log(response)
            })
    }
    render() {
        return (
            <UserContext.Provider value={{ user: this.state.user, setUser: this.setUser }} >
                <Login />
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;