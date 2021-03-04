import './header.css';
import profileImage from '../../assets/images/profile.png';
import React from 'react';
import { UserContext } from '../user/userContext';

const Header = () => {
    const user = React.useContext(UserContext);
    console.log(user)
    return (
        <div id="header-wrapper">
            <p className="header-brand">Storefront</p>
            <div>
                <div className="header-user-wrapper">
                    <img src={profileImage} alt="profile" />
                </div>
            </div>
        </div>
    )
}
export default Header;