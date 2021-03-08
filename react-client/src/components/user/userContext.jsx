import React from 'react';
import getUser from './getUser';
export const UserContext = React.createContext();

class UserProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            isloading: true,
            redirect: null,
        };
        this.setUser = this.setUser.bind(this);
    }
    componentDidMount() {
        getUser().then(response => {
            let { error, user } = response;
            if (user) {
                this.setState({ user:user, isloading: false })
            } else {
                this.setState({ isloading: false });
            };
        })
    }
    setUser(user) {
        this.setState({ user })
    }
    render() {
        return (
            <UserContext.Provider value={{ user: this.state.user, setUser: this.setUser }} >
                {this.state.isloading ? <h1>Is Loading</h1> : this.props.children}
            </UserContext.Provider>
        );
    }
}

export default UserProvider;