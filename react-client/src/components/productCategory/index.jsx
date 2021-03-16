import React from 'react';
import './productCategory.css';
import Table from './table';
import { ContentContext } from '../contentProvider';

const ProductCategory = () => {
    let { productCategory } = React.useContext(ContentContext);
    return (
        <article id="product-wrapper">
            <div id="product-header">
                <h3>Product Category</h3>
                <button>Add</button>
            </div>
            <div id="table-wrapper"><Table data={productCategory} /></div>
        </article>
    )
}
export default ProductCategory;