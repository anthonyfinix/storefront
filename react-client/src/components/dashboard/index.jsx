import React from 'react';
import './dashboard.css';
import Widget from './entityCard';
import { ContentContext } from '../contentProvider';
import ProductWidget from './widgets/product_widget';
const Dashboard = () => {
    let { product, customer, productCategory, supplier, } = React.useContext(ContentContext);
    return (
        <article id="dashboard-wrapper">
            <h1>Dashboard</h1>
            <div className="widget-main-wrapper">
                <div className="Product-Wrapper">
                    <ProductWidget />
                </div>
                <div className="Suppliers"></div>
                <div className="Widget1"></div>
                <div className="Widget2"></div>
                <div className="Widget3"></div>
                <div className="Widget4"></div>
            </div>
        </article>
    )
}
export default Dashboard;