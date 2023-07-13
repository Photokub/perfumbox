import React from "react";
import {Link, NavLink} from "react-router-dom";
import './NavTab.css';
import { faVk, faTelegram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavTab() {
    return (
        <nav className='navtab'>
            <NavLink
                className={({isActive}) => `${isActive ? "navtab__navlink_active" : "navtab__navlink"} navtab__link`}
                to='/'>О нас</NavLink>
            <NavLink
                className={({isActive}) => `${isActive ? "navtab__navlink_active" : "navtab__navlink"} navtab__link`}
                to='/gallery'>Ароматы</NavLink>
            <NavLink
                className={({isActive}) => `${isActive ? "navtab__navlink_active" : "navtab__navlink"} navtab__link`}
                to='/feedback'>Обратная связь</NavLink>
            <Link className='navtab__link' to='#'>
                <FontAwesomeIcon className='navtab__link-img' icon={faVk} />
            </Link>
            <Link className='navtab__link' to='#'>
                <FontAwesomeIcon className='navtab__link-img' icon={faTelegram} />
            </Link>
        </nav>
    )
}