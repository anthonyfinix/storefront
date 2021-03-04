const GetProducts = ({ rows }) => {
    return (<tr>{rows.map(row => <td>{row.name}</td>)}</tr>)
}

export default GetProducts;