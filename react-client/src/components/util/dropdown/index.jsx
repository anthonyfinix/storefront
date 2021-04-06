import React from 'react';
import './dropdown.css';

export default ({ el, show, ...props }) => {
    const [position, setPosition] = React.useState({
        left: 0,
        right: 0,
        display: 'none'
    });

    const dialog = React.useRef(null);
    React.useEffect(() => {
        let display = show ? 'inline-block' : 'none';
        if (!!el) {
            setPosition({
                left: el.offsetLeft,
                right: el.offsetRight,
                display
            })
        }
    },[]);
    
    if (!!show) {
        return (
                <div className="dropdown-wrapper" style={position} ref={dialog}>
                    {props.children}
                </div>
        )
    } else {
        return (<div></div>)
    }
}