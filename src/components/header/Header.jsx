import { NavLink, Link } from 'react-router-dom'
import style from './header.module.css'
import React from 'react'
import Container from './../../../node_modules/react-bootstrap/esm/Container';
import { Image } from 'react-bootstrap';
import logo from '../../assets/images/natiqLogo.png'


export default function Header() {
    return <>
        <Container fluid className={`${style.navBg}`}>
            <nav className="navbar navbar-expand-lg">
                <Container>
                    <Link className={`${style.linkText} navbar-brand d-flex justify-content-center align-items-center`} to="/">
                        <Image className={`${style.logo} p-1`} src={logo} roundedCircle thumbnail />
                        <p className={`${style.natiq} m-0 ps-2`}>Natiq - RDI</p>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item me-3 ms-4"><NavLink className={`nav-link ${style.linkText}`} to="/">Home</NavLink></li>
                            <li className="nav-item me-3 ms-4"><NavLink className={`nav-link ${style.linkText}`} to="/about">About</NavLink></li>
                            <li className="nav-item me-3 ms-4"><NavLink className={`nav-link ${style.linkText}`} to="/natiq">Natiq</NavLink></li>
                        </ul>
                    </div>
                </Container>
            </nav>
        </Container>
    </>
}
