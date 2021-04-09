import React, { useEffect } from 'react';
import './dropdown.css';
import { MdClose } from "react-icons/md";

export default ({ el, show, close, ...props }) => {
    const dialog = React.useRef(null);
    const handleOutsideClick = (event) => {
        if (!!dialog.current) {
            if (!dialog.current.contains(event.target)) close();
        }
    }
    let position = {};
    if (!el) {
        position.left = 10;
        position.top = 10;
    } else {
        position.left = el.offsetLeft;
        position.top = el.offsetTop + 40;
    }
    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        return () => document.removeEventListener('mousedown', handleOutsideClick);
    })

    if (!!show) {
        return (
            <div className="dropdown-wrapper" style={{ ...position }} ref={dialog}>
                <div className="controls"><MdClose onClick={close} /></div>
                {props.children}
            </div>
        )
    } else {
        return (<div></div>)
    }
}