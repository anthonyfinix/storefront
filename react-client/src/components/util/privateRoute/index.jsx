import React from 'react';
import { UserContext } from '../../user/userContext';
import { Redirect, Route } from 'react-router-dom';
const PrivateRoute = ({ component: Component, ...rest }) => {
    const { user } = React.useContext(UserContext);
    React.useEffect(()=>{
        return ()=>{console.log("unmount prvt route")}
    })
    return <Route {...rest} component={(props) => {
        if (!!user) {
            return <Component {...props} />
        } else {
            return <Redirect to="/login" />
        }
    }} />
}

export default PrivateRoute;