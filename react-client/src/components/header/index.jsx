import './header.css';
import profileImage from '../../assets/images/profile.png';
import React from 'react';
import { UserContext } from '../user/userContext';

const Header = () => {
    const { user } = React.useContext(UserContext);
    return (
        <div id="header-wrapper">
            <p className="header-brand">Storefront</p>
            <small> {user ? user.name.first_name : null}</small>
            <div>
                <div className="header-user-wrapper">
                    <img src={profileImage} alt="profile" />
                </div>
            </div>
        </div>
    )
}
export default Header;