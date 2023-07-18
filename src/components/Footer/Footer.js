import React from "react";
import {Link} from "react-router-dom";
import './Footer.css'

export class Footer extends React.Component {
    render() {
        return (
            <footer className='footer'>
                <p className='footer__text'>2021 - 2023 | Designed and developed by</p>
                <Link  className ="footer__link" to='www.photokub.ru'>Aleksandr Kubyshkin aka Photokub&#169;</Link>
            </footer>
        )
    }
}