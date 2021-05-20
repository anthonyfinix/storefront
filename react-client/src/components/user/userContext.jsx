import React from 'react';
import getUser from './getUser';
import Loading from '../util/loading';
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
            {isLoading ? (
                <div style={{height:"100vh"}}>
                    <Loading subtitle="loading user" />
                </div>
            ) : props.children}
        </UserContext.Provider>
    );
}

export default UserProvider;