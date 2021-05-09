import React from 'react';
import { UserContext } from '../user/userContext';
import getUserStore from './api/getUserStore';
export const StoreContext = React.createContext();
const StoreProvider = (props) => {
    const { user } = React.useContext(UserContext);
    const [stores, setStores] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [currentStore, setCurrentStore] = React.useState(null);
    React.useEffect(() => {
        getUserStore()
            .then(response => {
                setIsLoading(false);
                let { error, result } = response.data;
                if (!error) setStores([...result]);
                handleCurrentStore(result[0]);
            });
    }, []);
    const handleCurrentStore = (store) => {
        setCurrentStore(store)
    }
    return (
        <StoreContext.Provider value={{ stores, currentStore }}>
            {isLoading ? <h1>Loading Stores</h1> : props.children}
        </StoreContext.Provider>
    )
}

export default StoreProvider;