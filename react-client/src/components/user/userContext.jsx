import React from 'react';
import getUser from './getUser';
export const UserContext = React.createContext();

class UserProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {},
            isloading: true,
            redirect: null
        };
        this.setUser = this.setUser.bind(this);
    }
    componentDidMount() {
        getUser().then(response => {
            console.log(response);
            let { error, data } = response;
            if (data) this.setState({ user: data, isloading: false });
        })
    }
    setUser(user) {
        this.setState({ user })
    }
    render() {
        return (
            <UserContext.Provider value={{ user: this.state.user, setUser: this.setUser }} >
                {this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;