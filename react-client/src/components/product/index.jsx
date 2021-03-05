import React from 'react';
import './product.css';
import Productable from './table';
import { ContentContext } from '../contentProvider';
const Product = () => {

    let { products } = React.useContext(ContentContext);

    return (
        <article id="product-wrapper">
            <div id="product-header">
                <h3>Product</h3>
                <button>Add</button>
            </div>
            <div id="table-wrapper">
                <Productable data={products} />
            </div>
        </article>
    )
}
export default Product;