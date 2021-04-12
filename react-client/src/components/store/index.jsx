import React from 'react';
import { UserContext } from '../user/userContext';
export const StoreContext = React.createContext();

export default ({ props }) => {
    const { user } = React.useContext(UserContext);
    React.useEffect(()=>{

    })
    return (
        <StoreContext.Provider value={ }>
            {props.children}
        </StoreContext.Provider>
    )
}