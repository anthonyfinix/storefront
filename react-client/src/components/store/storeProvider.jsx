import React from 'react';
import { UserContext } from '../user/userContext';
import getUserStore from './api/getUserStore';
export const StoreContext = React.createContext();
const StoreProvider = (props) => {
    const { user } = React.useContext(UserContext);
    const [stores, setStores] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        console.log('Store Context UseEffect')
        getUserStore()
            .then(response => {
                setIsLoading(false);
                let { error, result } = response.data;
                if (!error) setStores([...result]);
            });
    }, []);
    return (
        <StoreContext.Provider value={{ stores }}>
            {isLoading ? <h1>Loading Stores</h1> : props.children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;