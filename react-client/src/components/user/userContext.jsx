import React from 'react';
import getUser from './getUser';
export const UserContext = React.createContext();

function UserProvider(props) {
    const [user, setUser] = React.useState(null);
    const [isLoading, setLoading] = React.useState(true);
    const [redirect, setRedirect] = React.useState(null);
    React.useEffect(() => {
        getUser().then(response => {
            let { user } = response;
            if (user) setUser(user);
        })
            .finally(() => setLoading(false));
    }, [])
    return (
        <UserContext.Provider value={{ user, setUser }} >
            {isLoading ? <h1>Is Loading</h1> : props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;