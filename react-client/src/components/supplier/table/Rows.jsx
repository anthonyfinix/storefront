const GetProducts = ({ rows }) => {
    return rows.map(row => {
        return (
            <tr key={row._id}>
                <td style={{ flexBasis: "10%" }}>{row.company_name}</td>
                <td style={{ flexBasis: "10%" }}>{row.name.first_name + ' ' + (row.name.middle_name ? row.name.middle_name : '') + '' + (row.name.list_name ? row.name.list_name : '')}</td>
                <td style={{ flexBasis: "10%" }}>{row.contact_details.primary_number}</td>
                <td style={{ flexBasis: "10%" }}>{row.contact_details.email}</td>
            </tr>
        )
    })
}

export default GetProducts;