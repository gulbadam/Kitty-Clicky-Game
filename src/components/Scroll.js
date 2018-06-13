import React from "react";
import { width } from "window-size";
const Scroll = (props) => {
    return (
        //<div style={{ overflowY: 'scroll', border: '3px inset blue', height: '60rem', padding: '2rem'}}>
            <div className="mw8 tc center pa4 ph5">
        
            {props.children}
        </div>
    //</div>
    )

}

export default Scroll;