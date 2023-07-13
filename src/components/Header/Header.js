import React from "react";
import "./Header.css"
import {Link} from "react-router-dom";
import logo from "../../images/logo_1-01.svg"
import {NavTab} from "../NavTab/NavTab";


export function Header() {
    return (
        <header className='header'>
            <Link className='header__link' to='/'>
                <img className='header__logo' src={logo} alt='логотип perfumbox'/>
            </Link>
            <NavTab/>
        </header>
    )
}