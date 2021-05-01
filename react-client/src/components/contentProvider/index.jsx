import React from 'react';
import useSupplier from '../supplier/useSupplier';
import useProduct from '../product/useProduct';
import useProductCategory from '../productCategory/useProductCategory';
import useCustomer from '../customer/useCustomer';
import useRole from '../role/useRole'


export const ContentContext = React.createContext();
const ContentProvider = ({ children, ...props }) => {
    React.useEffect(()=>{
        return ()=>{console.log('unmount')}
    })
    const product = useProduct();
    const supplier = useSupplier();
    const customer = useCustomer();
    const productCategory = useProductCategory();
    const role = useRole();
    return (
        <ContentContext.Provider value={{
            product,
            supplier,
            customer,
            productCategory,
            role
        }} >
            { children}
        </ContentContext.Provider >
    )
}

export default ContentProvider;