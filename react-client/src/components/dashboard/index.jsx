import React from 'react';
import './dashboard.css';
import Widget from './entityCard';
import { ContentContext } from '../contentProvider';
const Dashboard = () => {
    let { product, customer, productCategory, supplier, } = React.useContext(ContentContext);
    return (
        <article id="dashboard-wrapper">
            <h1>Dashboard</h1>
            <div className="widget-main-wrapper">
                <Widget entity={product.products} name={"Product"} />
                <Widget entity={productCategory.productCategories} name={"Product Category"} />
                <Widget entity={customer.customers} name={"Customer"} />
                <Widget entity={supplier.suppliers} name={"Supply"} />
            </div>
        </article>
    )
}
export default Dashboard;