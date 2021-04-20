import React from 'react';
import Rows from './Rows';
import './table.css';
const Table = ({ data, toggleSidebar,deleteProduct }) => {
    const dataTable = React.useRef(null);
    const toggleDropdown = (e, id) => {
        let row = dataTable.current.querySelector(`.row[data-row="${id}"]+div`);
        if (row.classList.contains('hide')) {
            row.classList.remove('hide');
        } else {
            row.classList.add('hide');
        }
    }
    return (
        <table ref={dataTable} className="data-table product-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>SKU</th>
                    <th>Buying Price</th>
                </tr>
            </thead>
            <tbody>
                <Rows rows={data} deleteProduct={deleteProduct} toggleSidebar={toggleSidebar} toggleDropdown={toggleDropdown} />
            </tbody>
        </table>
    )
}
export default Table;