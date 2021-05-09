import './header.css';
import profileImage from '../../assets/images/profile.png';
import React from 'react';
import { UserContext } from '../user/userContext';
import { StoreContext } from '../store/storeProvider';

const Header = () => {
    const { user } = React.useContext(UserContext);
    const { stores, currentStore } = React.useContext(StoreContext);
    const optionAttributes = (store) => {
        if(!!currentStore){
            if (store._id == currentStore._id) {
                console.log(store.name)
                return { selected: true }
            }
        }
    }
    return (
        <div id="header-wrapper">
            <p className="header-brand">Storefront</p>
            <div style={{ marginLeft: "auto" }}>
                <select>
                    {stores.map(store => {
                        return <option key={store._id} {...optionAttributes(store)} >{store.name}</option>
                    })}
                </select>
            </div>
            <div style={{ display: "flex" }}>
                <small> {user ? user.name.first_name : null}</small>
                <div className="header-user-wrapper">
                    <img src={profileImage} alt="profile" />
                </div>
            </div>
        </div>
    )
}
export default Header;