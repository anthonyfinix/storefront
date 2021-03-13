import './product.css';
import React, { useState } from 'react';
import Table from './table';
import Sidebar from './sidebar';
import { ContentContext } from '../contentProvider';
import Dialog from '../util/dialog';
const Product = () => {
    let [showDialog, setShowDialog] = React.useState(false);
    let { products } = React.useContext(ContentContext);
    let [productSuppliers, setProductSuppliers] = useState([]);
    let [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const handleShowSupplier = (suppliers) => {
        toggleSidebar();
        let supplierDetailsPromise = suppliers.map(supplier => console.log(supplier))
    }
    const toggleDialog = () => {
        console.log('toggle')
        setShowDialog(!showDialog);
    }
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
                {console.log(products)}
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} items={products} />
                <Dialog toggleDialog={toggleDialog} show={showDialog}>
                    <h3 className="mt-0">Add Product</h3>
                    <div>
                        <div className="input-wrapper">
                            <label>Name</label>
                            <input type="text" name="name" />
                        </div>
                        <div className="input-wrapper">
                            <label>SKU</label>
                            <input type="text" name="sku" />
                        </div>
                        <div className="input-wrapper">
                            <label>Manufacturer</label>
                            <input type="text" name="manufacturer" />
                        </div>
                        <div className="input-wrapper">
                            <label>Brand</label>
                            <input type="text" name="brand" />
                        </div>
                        <div className="input-wrapper">
                            <label>Sale Price</label>
                            <input type="text" name="sale_price" />
                        </div>
                        <div className="input-wrapper">
                            <label>Current Price</label>    
                            <input type="text" name="current_price" />
                        </div>
                        <div className="input-wrapper">
                            <label>Buying Price</label>
                            <input type="text" name="buying_price" />
                        </div>
                    </div>
                </Dialog>
            </div>
        </article>
    )
}
export default Product;