import React from 'react';
import './dropdown.css';
import { MdClose } from "react-icons/md";

export default ({ el, show, close, ...props }) => {
    let display = show ? 'block' : 'none';
    const dialog = React.useRef(null);
    const handleClose = ()=>{
        close()
    }
    let position = {};
    if (!el) {
        display = 'none';
        position.left = 10;
        position.top = 10;
    } else {
        position.left = el.offsetLeft;
        position.top = el.offsetTop + 40;
    }

    if (!!show) {
        return (
            <div className="dropdown-wrapper" style={{ ...position, display }} ref={dialog}>
                <div className="controls"><MdClose onClick={handleClose} /></div>
                {props.children}
            </div>
        )
    } else {
        return (<div></div>)
    }
}