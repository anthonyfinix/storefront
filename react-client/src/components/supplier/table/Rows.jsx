const GetProducts = ({ rows }) => {
    return rows.map(row => {
        return (
            <tr key={row._id}>
                <td style={{flexBasis:"10%"}}>{row.company_name}</td>
            </tr>
        )
    })
}

export default GetProducts;