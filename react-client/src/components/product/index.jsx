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
    let { product: { products, productNextPage } } = React.useContext(ContentContext);
    let [isSidebarOpen, setSidebarOpen] = React.useState(false);
    let [newProduct, setNewProduct] = React.useState({
        productName: "",
        productSKU: "",
        productManufacturer: "",
        dimension: { weight: "", height: "", length: "", width: "" },
        productBrand: "",
        productSalePrice: "",
        productCurrentPrice: "",
        productBuyingPrice: "",
        productSupplier: [],
        productCategory: { name: '' },
        store: []
    });
    const addSupplier = (supplier) => {
        let product = newProduct;
        product.productSupplier.push(supplier)
        setNewProduct(product);
    }
    const setProductCategory = (productCategory) => {
        let product = newProduct;
        product.productCategory = productCategory;
        setNewProduct(product);
    }
    const addNewProduct = () => {

    }
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
    const closeDialog = () => setShowDialog(false);
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
                <Dialog
                    close={closeDialog}
                    toggleDialog={toggleDialog}
                    show={showDialog}
                >
                    <AddNewProduct
                        toggleDialog={toggleDialog}
                        addSupplier={addSupplier}
                        handleNewProductInputChange={handleNewProductInputChange}
                        newProduct={newProduct}
                        addNewProduct={addNewProduct}
                        setProductCategory={setProductCategory}
                    />
                </Dialog>
            </div>
            <button onClick={productNextPage}>Load more</button>
        </article>
    )
}
export default Product;