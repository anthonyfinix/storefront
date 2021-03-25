import React from 'react';
import './customer.css';
import Table from './table';
import { ContentContext } from '../contentProvider';
const Customer = () => {
    let { customers } = React.useContext(ContentContext);
    return (
        <article id="product-wrapper">
            <div id="product-header">
                <h3>Customer</h3>
                <button>Add</button>
            </div>
            <div id="table-wrapper"><Table data={customers} /></div>
        </article>
    )
}
export default Customer;