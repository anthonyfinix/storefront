const GetProducts = ({ rows }) => {
    console.log(rows)
    return rows.map(row => {
        return (
            <tr>
                <td style={{flexBasis:"10%"}}>{row.name.first_name}</td>
                <td style={{flexBasis:"30%"}}>{row.contact_details.primary_number}</td>
                <td style={{flexBasis:"30%"}}>{row.contact_details.email}</td>
                {console.log(row)}
            </tr>
        )
    })
}

export default GetProducts;