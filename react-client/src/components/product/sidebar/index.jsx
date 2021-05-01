import React from 'react';

const Sidebar = ({ isSidebarOpen, toggleSidebar, items, ...props }) => {
    const sidebar = React.useRef();
    let display = isSidebarOpen ? "block" : "none";
    return (
        <div className={`sidebar`} style={{ display }}>
            <div style={{ textAlign: "right" }} onClick={toggleSidebar}><span className="material-icons md-18">close</span></div>
            {/* {!items ? <NoSupplier /> : items.map(item => <Supplier supplier={item} />)} */}
            {(!items || (items.length == 0)) ? <NoSupplier /> : items.map(item => <Supplier supplier={item} />)}
        </div>
    )
}

const NoSupplier = () => {
    return (
        <p>No Supplier</p>
    )
}
const Supplier = ({ supplier }) => {
    console.log(supplier)
    return (
        <div>
            <p>{supplier.company_name}</p>
            <small>{supplier.id ? supplier.id.contact_details.primary_number : "either deleted or no provided"}</small>
            <hr />
        </div>
    )
}

export default Sidebar;