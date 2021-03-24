const GetProducts = ({ rows }) => {
    return rows.map(row => <tr><td>{row.name}</td></tr>)
}

export default GetProducts;