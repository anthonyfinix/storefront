import './product.css';
import React from 'react';
import Table from './table';
import Sidebar from './sidebar';
import { ContentContext } from '../contentProvider';
import AddNewProduct from './addNewProduct';
import Dialog from '../util/dialog';
import useProduct from './useProduct';
const Product = () => {
    let [showDialog, setShowDialog] = React.useState(false);
    let { product: { products, productNextPage }, suppliers, productCategory } = React.useContext(ContentContext);
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
        setNewProduct({ ...updatedProductDetails });
    }
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const handleShowSupplier = (suppliers) => {
        toggleSidebar();
        let supplierDetailsPromise = suppliers.map(supplier => console.log(supplier))
    }
    const handleListScroll = (e) => {
        const { scrollTop, clientHeight, scrollHeight } = e.currentTarget;
        if (scrollHeight - scrollTop === clientHeight) productNextPage();
    }
    const toggleDialog = () => setShowDialog(!showDialog);
    return (
        <article className="entity-wrapper" id="product-wrapper">
            <div className="entity-header" id="product-header">
                <h3>Product</h3>
                <button onClick={toggleDialog}>Add</button>
            </div>
            <div className="entity-content" id="product-content">
                <div id="table-wrapper" onScroll={handleListScroll}>
                    <Table data={products} toggleSidebar={handleShowSupplier} />
                </div>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} items={products} />
                <Dialog toggleDialog={toggleDialog} show={showDialog}>
                    <AddNewProduct
                        handleNewProductInputChange={handleNewProductInputChange}
                        newProduct={newProduct}
                        addNewProduct={addNewProduct}
                    />
                </Dialog>
            </div>
            <button onClick={productNextPage}>Load more</button>
        </article>
    )
}
export default Product;