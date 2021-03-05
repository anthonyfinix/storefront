import React from 'react';
import './supplier.css';
import Table from './table';
import { ContentContext } from '../contentProvider';

const Supplier = () => {

    let { suppliers } = React.useContext(ContentContext);
    return (
        <article id="product-wrapper">
            <div id="product-header">
                <h3>Supplier</h3>
                <button>Add</button>
            </div>
            <div id="table-wrapper"><Table data={suppliers} /></div>
        </article>
    )
}
export default Supplier;