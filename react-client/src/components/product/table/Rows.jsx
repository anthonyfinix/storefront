const GetProducts = ({ rows }) => {
    console.log(rows);
    console.log(typeof rows);
    return (<tr>{rows.map(row => <td>{row.name}</td>)}</tr>)
}

export default GetProducts;