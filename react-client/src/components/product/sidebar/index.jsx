import React from 'react';

const Sidebar = ({ isSidebarOpen, toggleSidebar, items, ...props }) => {
    const sidebar = React.useRef();
    let display = isSidebarOpen ? "block" : "none";
    return (
        <div className={`sidebar`} style={{ display }}>
            <div style={{ textAlign: "right" }} onClick={toggleSidebar}><span className="material-icons md-18">close</span></div>
            {(!!items && (typeof items === 'array' && items.length > 0)) ? (<h1>Bad Data</h1>) : items.map(item => <p>{item.name}</p>)}
        </div>
    )
}

export default Sidebar;