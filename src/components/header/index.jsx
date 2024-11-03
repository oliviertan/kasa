import { Link } from 'react-router-dom'
import React from "react";
import logo from "../../images/logo_header.svg"
function Header() {
    return (
        <header>
            <img src={logo}></img>
            <nav>
            <Link to="/">Accueil</Link>
            <Link to="/a_propos">A propos</Link>
            </nav>
        </header>

    )
}

export default Header