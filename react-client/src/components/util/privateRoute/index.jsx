import React from 'react';
import { UserContext } from '../../user/userContext';
import { Redirect } from 'react-router-dom';
const PrivateRoute = ({ to, component: Component, ...props }) => {
    const { user } = React.useContext(UserContext);
    if (Object.keys(user).length > 0) {
        return (<Component {...props} />);
    }
    return <Redirect to="/login" />
}

export default PrivateRoute;