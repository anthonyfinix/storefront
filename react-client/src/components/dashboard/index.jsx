import React from 'react';
import './dashboard.css';
import Widget from './entityCard';
import { ContentContext } from '../contentProvider';
const Dashboard = () => {
    let { products, customers, productCategories, suppliers, } = React.useContext(ContentContext);
    return (
        <article id="dashboard-wrapper">
            <h1>Dashboard</h1>
            <div className="widget-main-wrapper">
                <Widget entity={products} name={"Product"} />
                <Widget entity={productCategories} name={"Product Category"} />
                <Widget entity={customers} name={"Customer"} />
                <Widget entity={suppliers} name={"Supply"} />
            </div>
        </article>
    )
}
export default Dashboard;