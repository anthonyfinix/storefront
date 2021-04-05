import React from 'react';
import './productCategory.css';
import Table from './table';
import { ContentContext } from '../contentProvider';

const ProductCategory = () => {
    let { productCategory } = React.useContext(ContentContext);
    return (
        <article className="entity-wrapper" id="product-wrapper">
            <div className="entity-header" id="product-header">
                <h3>Product Category</h3>
                <button>Add</button>
            </div>
            <div className="entity-content" id="table-wrapper">
                <Table data={productCategory.productCategories} />
            </div>
            <button onClick={productCategory.productCategoriesNextPage}>Load More</button>
        </article>
    )
}
export default ProductCategory;