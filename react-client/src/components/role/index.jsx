import React from 'react';
// import './role.css';
import Table from './table';
import { ContentContext } from '../contentProvider';
const Role = () => {
    let { role } = React.useContext(ContentContext);
    return (
        <article id="product-wrapper">
            <div id="product-header">
                <h3>Roles</h3>
                <button>Add</button>
            </div>
            <div id="table-wrapper"><Table data={role} /></div>
        </article>
    )
}
export default Role;