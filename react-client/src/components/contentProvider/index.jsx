import React from 'react';

export const ContentContext = React.createContext();

class ContentProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product: [
                { name: "Product 1" },
                { name: "Product 2" }
            ],
            supplier: [
                { name: "Supplier 1" },
                { name: "Supplier 2" }
            ],
            customer: [
                { name: "Customer 1" },
                { name: "Customer 2" }
            ],
            productCategory: [
                { name: "Category 1" },
                { name: "Category 2" }
            ],
            role: [],
        }
        this.setProduct = this.setProduct.bind(this);
        this.setSupplier = this.setSupplier.bind(this);
        this.setCustomer = this.setCustomer.bind(this);
        this.setProductCategory = this.setProductCategory.bind(this);
    }

    setProduct(products) {

    }
    setSupplier(suppliers) {

    }
    setCustomer(customers) {

    }
    setProductCategory(productCategories) {

    }

    render() {
        return (
            <ContentContext.Provider value={{
                products: this.state.product, 
                suppliers: this.state.supplier, 
                customers: this.state.customer, 
                productCategories: this.state.productCategories }} >
                {this.props.children}
            </ContentContext.Provider>
        )
    }
}

// const ContentProvider = ({ children, ...props }) => {
//     const [product, setProduct] = React.useState([]);
//     const [supplier, setSupplier] = React.useState([]);
//     const [customer, setCustomer] = React.useState([]);
//     const [productCategory, setProductCategory] = React.useState([]);
//     const [role, setRole] = React.useState([]);
//     return (
//     )
// }

export default ContentProvider;