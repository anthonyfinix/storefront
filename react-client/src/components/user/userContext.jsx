import React from 'react';
export const UserContext = React.createContext();
class UserProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Anthony Finix"
            }
        };
        this.setUser = this.setUser.bind(this);
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