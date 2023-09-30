import React from "react";
import "../styles/header.css"

const Header = ()=>{
    return(
        <div className="header">
            <h2>Wesen</h2>
            <div className="functions">
                <h3> Word Counter</h3>
                <h3> Find a word</h3>
            </div>
        </div>
    )
}

export default Header;