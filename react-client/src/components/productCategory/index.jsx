import React from 'react';
import './productCategory.css';
import Table from './table';
import { ContentContext } from '../contentProvider';

const ProductCategory = () => {
    let { productCategories } = React.useContext(ContentContext);
    console.log(productCategories)
    return (
        <article id="product-wrapper">
            <div id="product-header">
                <h3>Product Category</h3>
                <button>Add</button>
            </div>
            <div id="table-wrapper"><Table data={productCategories} /></div>
        </article>
    )
}
export default ProductCategory;