import React from 'react';
import './customer.css';
import Table from './table';
import { ContentContext } from '../contentProvider';
const Customer = () => {
    let { customer: { customers, customerNextPage } } = React.useContext(ContentContext);
    return (
        <article class="entity-wrapper" id="product-wrapper">
            <div class="entity-header" id="product-header">
                <h3>Customer</h3>
                <button>Add</button>
            </div>
            <div className="entity-content" id="table-wrapper">
                <Table data={customers} />
            </div>
            <button onClick={customerNextPage}>Load more</button>
        </article>
    )
}
export default Customer;