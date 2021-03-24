import React from 'react';
import useSupplier from '../supplier/useSupplier';
import useProduct from '../product/useProduct';
import useProductCategory from '../productCategory/useProductCategory';


export const ContentContext = React.createContext();
const ContentProvider = ({ children, ...props }) => {
    const products = useProduct();
    const suppliers = useSupplier();
    const [customers] = React.useState([]);
    const productCategories = useProductCategory();
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