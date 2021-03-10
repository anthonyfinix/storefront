import './product.css';
import React, { useState } from 'react';
import Table from './table';
import ProductSidebar from './sidebar';
import { ContentContext } from '../contentProvider';
const Product = () => {
    let { products } = React.useContext(ContentContext);
    let [productSuppliers, setProductSuppliers] = useState([]);
    return (
        <article id="product-wrapper">
            <div id="product-header">
                <h3>Product</h3>
                <button>Add</button>
            </div>
            <div id="product-content">
                <div id="table-wrapper">
                    <Table data={products} />
                </div>
                <ProductSidebar items={productSuppliers} />
            </div>
        </article>
    )
}
export default Product;