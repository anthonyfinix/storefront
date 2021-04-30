const GetProducts = ({ rows, editSupplier, deleteSupplier }) => {
    return rows.map(row => {
        return (
            <tr key={row._id}>
                <td style={{ flexBasis: "10%" }}>{row.company_name}</td>
                <td style={{ flexBasis: "10%" }}>{row.name.first_name + ' ' + (row.name.middle_name ? row.name.middle_name : '') + '' + (row.name.list_name ? row.name.list_name : '')}</td>
                <td style={{ flexBasis: "10%" }}>{row.contact_details.primary_number}</td>
                <td style={{ flexBasis: "10%" }}>{row.contact_details.email}</td>
                <td className="row-data product-data expand-btn"
                    style={{ flexBasis: "10%" }}
                    onClick={(e) => editSupplier(row._id)}>
                    <span className="material-icons md-18">edit</span>
                </td>
                <td className="row-data product-data expand-btn"
                    style={{ flexBasis: "10%" }}
                    onClick={(e) => deleteSupplier(row._id)}>
                    <span className="material-icons md-18">delete</span>
                </td>
            </tr>
        )
    })
}

export default GetProducts;