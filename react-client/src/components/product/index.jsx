import './product.css';
import React from 'react';
import Table from './table';
import Sidebar from './sidebar';
import { ContentContext } from '../contentProvider';
import AddNewProduct from './addNewProduct';
const Product = () => {
    let [showDialog, setShowDialog] = React.useState(false);
    let { products, suppliers, productCategory } = React.useContext(ContentContext);
    let [productSuppliers, setProductSuppliers] = React.useState([]);
    let [isSidebarOpen, setSidebarOpen] = React.useState(false);
    let [newProduct, setNewProduct] = React.useState({
        productName: "",
        productSKU: "",
        productManufacturer: "",
        productBrand: "",
        productSalePrice: "",
        productCurrentPrice: "",
        productBuyingPrice: "",
    });
    const addNewProduct = () => { }
    const handleNewProductInputChange = (e) => {
        let updatedProductDetails = newProduct;
        updatedProductDetails[e.currentTarget.getAttribute('name')] = e.currentTarget.value;
        setNewProduct({ ...updatedProductDetails })
        console.log('updated');
    }
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const handleShowSupplier = (suppliers) => {
        toggleSidebar();
        let supplierDetailsPromise = suppliers.map(supplier => console.log(supplier))
    }
    const toggleDialog = () => setShowDialog(!showDialog);
    return (
        <article id="product-wrapper">
            <div id="product-header">
                <h3>Product</h3>
                <button onClick={toggleDialog}>Add</button>
            </div>
            <div id="product-content">
                <div id="table-wrapper">
                    <Table data={products} toggleSidebar={handleShowSupplier} />
                </div>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} items={products} />
                <AddNewProduct
                    show={showDialog}
                    handleNewProductInputChange={handleNewProductInputChange}
                    newProduct={newProduct}
                    toggleDialog={toggleDialog}
                    items={products}
                    addNewProduct={addNewProduct}
                    
                />
            </div>
        </article>
    )
}
export default Product;