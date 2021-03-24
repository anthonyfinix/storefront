import React from 'react';
import Rows from './Rows';
import './table.css';
const Table = ({ data }) => {
    const [loading, setLoading] = React.useState([]);
    return (
        <table className="data-table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Class</th>
                </tr>
            </thead>
            <tbody>
                <Rows rows={data} />
            </tbody>
        </table>
    )
}
export default Table;