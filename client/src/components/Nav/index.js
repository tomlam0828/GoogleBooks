import React from "react";
// import { NavLink } from "react-router-dom"
import "./style.css"

function Nav() {
    return (
        <div className="nav-bar">
        <nav className="nav">
            <a className="nav-link active" href="/"><strong>Google Book Search!</strong></a>
            <a className="nav-link" href="/">Search</a>
            <a className="nav-link" href="/saved">Saved</a>
        </nav>
        </div>
    )
}

export default Nav;