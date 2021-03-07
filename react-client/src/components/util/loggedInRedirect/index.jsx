import React from 'react';
import { UserContext } from '../../user/userContext';
import { Redirect, Route } from 'react-router-dom';
const LoggedInRedirect = ({ component: Component, ...rest }) => {
    const { user } = React.useContext(UserContext);
    console.log("log redirect");
    console.log(user);
    return <Route {...rest} component={(props) => {
        if (user.length > 0) {
            return <Redirect to="/" {...props} />
        } else {
            return <Component {...props} />
        }
    }} />
}

export default LoggedInRedirect;