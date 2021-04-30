import React from 'react';
import Rows from './Rows';
import './table.css';
const Table = ({ data, deleteSupplier, editSupplier }) => {
    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th style={{ flexBasis: "10%" }}>Company Name</th>
                    <th style={{ flexBasis: "10%" }}>Name</th>
                    <th style={{ flexBasis: "10%" }}>Primary Number</th>
                    <th style={{ flexBasis: "10%" }}>Email</th>
                </tr>
            </thead>
            <tbody>
                <Rows
                    deleteSupplier={deleteSupplier}
                    editSupplier={editSupplier}
                    rows={data}
                />
            </tbody>
        </table>
    )
}
export default Table;