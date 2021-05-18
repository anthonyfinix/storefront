import React from 'react';
import './dashboard.css';
import style from './dashboard.module.css'
import SupplierWidget from './widgets/supplier_widget';
import ProductWidget from './widgets/product_widget';
import CustomerWidget from './widgets/customer_widget';
import Header from './header';
const Dashboard = () => {
    return (
        <article id="dashboard-wrapper">
            <Header />
            <div className={style.content}>
                <div className="Product-Wrapper">
                    <ProductWidget />
                </div>
                <div className="Suppliers">
                    <SupplierWidget />
                </div>
                <div className="Widget1">
                    <CustomerWidget />
                </div>
                <div className="Widget2"></div>
                <div className="Widget3"></div>
                <div className="Widget4"></div>
            </div>
        </article>
    )
}
export default Dashboard;