import React from "react";
const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', height: '60rem'}}>
            <div className="mw8 tc center">
        {props.children}
        </div>
    </div>
    )
}
export default Scroll;