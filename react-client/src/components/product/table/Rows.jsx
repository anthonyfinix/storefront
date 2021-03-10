import React from 'react';
const GetProducts = ({ rows, toggleDropdown, toggleSidebar }) => {
    return rows.map(row =>
        <>
            <tr className="row product_row" key={row._id} data-row={row._id}>
                <td className="row-data product-data">{row.name}</td>
                <td className="row-data product-data">{row.sku}</td>
                <td className="row-data product-data">{row.buying_price}</td>
                <td className="row-data product-data expand-btn" onClick={(e) => toggleDropdown(e, row._id)}>
                    <span className="material-icons">expand_more</span>
                </td>
            </tr>
            <div className="row-dropdown hide">
                <p>{row._id}</p>
                <small onClick={(e) => toggleSidebar(row.suppliers)}>Show Suppliers</small>
            </div>
        </>
    )
}

export default GetProducts;