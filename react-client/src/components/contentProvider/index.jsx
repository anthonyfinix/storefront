import React from 'react';
import useSupplier from '../supplier/useSupplier';

export const ContentContext = React.createContext();
const ContentProvider = ({ children, ...props }) => {
    const [products] = React.useState();
    const suppliers = useSupplier();
    const [customers] = React.useState();
    const [productCategories] = React.useState();
    return (
        <ContentContext.Provider value={{
            products,
            suppliers,
            customers,
            productCategories
        }} >
            {children}
        </ContentContext.Provider>
    )
}

export default ContentProvider;