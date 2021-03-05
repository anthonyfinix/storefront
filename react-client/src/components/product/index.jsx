import React from 'react';
import './product.css';
import Table from './table';
import { ContentContext } from '../contentProvider';
const Product = () => {

    let { products } = React.useContext(ContentContext);
    console.log(products)

    return (
        <article id="product-wrapper">
            <div id="product-header">
                <h3>Product</h3>
                <button>Add</button>
            </div>
            <div id="table-wrapper">
                <Table data={products} />
            </div>
        </article>
    )
}
export default Product;