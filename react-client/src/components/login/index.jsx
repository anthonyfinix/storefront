import { UserContext } from '../user/userContext';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import getUser from '../user/getUser';
import './login.css';
const Login = (props) => {
    const [username, setUsername] = useState({});
    const [password, setPassword] = useState({});
    const { user, setUser } = React.useContext(UserContext);
    const history = useHistory()
    useEffect(() => {
        if (user) {
            props.history.push('/');
        }
    }, [])
    const handleLoginClick = () => {
        getUser(username, password)
            .then(response => {
                let { error, message, user } = response;
                console.log(response);
                if (error) return window.alert(error);
                if (user && message === 'success') {
                    setUser(user)
                    history.push('/')
                };
            });
    }
    const handleUsernameChange = (e) => {
        setUsername(e.currentTarget.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.currentTarget.value);
    }
    return (
        <article id="login-wrapper">
            <div id="login-card">
                <h1>LOGIN</h1>
                <div className="input-wrapper">
                    <label>Username</label>
                    <input type="text" onChange={handleUsernameChange} />
                </div>
                <div className="input-wrapper">
                    <label>password</label>
                    <input type="password" onChange={handlePasswordChange} />
                </div>
                <button className="success mt-3" onClick={handleLoginClick}>Login</button>
                <small className="mt-2">
                    does not have user credentials?
                </small>
                <Link className=" mb-4" to="/register"><small className="mt-1">Register</small></Link>
            </div>
        </article>
    )
}
export default Login;