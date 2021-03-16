import './dialog.css';
import React from 'react';
const Dialog = ({ toggleDialog, show, ...props }) => {
    console.log(props)
    let display = show ? "flex" : "none";
    const handleDialogWrapper = (e) => {
        let target = e.target;
        let firstClass = target.getAttribute('id');
        if (firstClass && firstClass === "dialog-wrapper") toggleDialog();
    }
    return (
        <div id="dialog-wrapper" onClick={handleDialogWrapper} style={{ display }}>
            <div className="dialog-card">
                {props.children}
            </div>
        </div>
    )
}

export default Dialog;