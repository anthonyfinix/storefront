import React from 'react';
import useSupplier from '../supplier/useSupplier';
import useProduct from '../product/useProduct';
import useProductCategory from '../productCategory/useProductCategory';
import useCustomer from '../customer/useCustomer';
import useRole from '../role/useRole'


export const ContentContext = React.createContext();
const ContentProvider = ({ children, ...props }) => {
    const { products, addPage } = useProduct();
    const suppliers = useSupplier();
    const customers = useCustomer();
    const productCategories = useProductCategory();
    const role = useRole();
    return (
        <ContentContext.Provider value={{
            products,
            suppliers,
            customers,
            productCategories,
            role, addPage
        }} >
            {children}
        </ContentContext.Provider>
    )
}

export default ContentProvider;