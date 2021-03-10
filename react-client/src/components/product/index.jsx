import './product.css';
import React, { useState } from 'react';
import Table from './table';
import Sidebar from './sidebar';
import { ContentContext } from '../contentProvider';
const Product = () => {
    let { products } = React.useContext(ContentContext);
    let [productSuppliers, setProductSuppliers] = useState([]);
    let [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    const handleShowSupplier = (suppliers) => {
        toggleSidebar();
        let supplierDetailsPromise = suppliers.map(supplier => {
            console.log(supplier)
        })
    }
    return (
        <article id="product-wrapper">
            <div id="product-header">
                <h3>Product</h3>
                <button>Add</button>
            </div>
            <div id="product-content">
                <div id="table-wrapper">
                    <Table data={products} toggleSidebar={handleShowSupplier} />
                </div>
                <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} items={products} />
            </div>
        </article>
    )
}
export default Product;