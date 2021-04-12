import React from 'react';
// import './role.css';
import Table from './table';
import { ContentContext } from '../contentProvider';
const Role = () => {
    let { role: { roles, roleNextPage }, } = React.useContext(ContentContext);
    return (
        <article className="entity-wrapper" id="product-wrapper">
            <div className="entity-header" id="product-header">
                <h3>Roles</h3>
                <button>Add</button>
            </div>
            <div className="entity-content" id="table-wrapper">
                <Table data={roles} />
            </div>
            <button onClick={roleNextPage}>Load more</button>
        </article>
    )
}
export default Role;