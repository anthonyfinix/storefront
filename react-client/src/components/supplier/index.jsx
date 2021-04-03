import React from 'react';
import './supplier.css';
import Table from './table';
import { ContentContext } from '../contentProvider';

const Supplier = () => {

    let { supplier:{
        suppliers,
        supplierNextPage
    } } = React.useContext(ContentContext);
    return (
        <article className="entity-wrapper" id="product-wrapper">
            <div className="entity-header" id="product-header">
                <h3>Supplier</h3>
                <button>Add</button>
            </div>
            <div className="entity-content" id="table-wrapper">
                <Table data={suppliers} />
            </div>
            <button onClick={supplierNextPage}>Load more</button>
        </article>
    )
}
export default Supplier;