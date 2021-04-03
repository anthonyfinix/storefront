import React from 'react';
import './dashboard.css';
import Widget from './entityCard';
import { ContentContext } from '../contentProvider';
const Dashboard = () => {
    let { product, customers, productCategories, suppliers, } = React.useContext(ContentContext);
    return (
        <article id="dashboard-wrapper">
            <h1>Dashboard</h1>
            <div className="widget-main-wrapper">
                <Widget entity={product.products} name={"Product"} />
                <Widget entity={productCategories.productCategory} name={"Product Category"} />
                <Widget entity={customers} name={"Customer"} />
                <Widget entity={suppliers} name={"Supply"} />
            </div>
        </article>
    )
}
export default Dashboard;