import React from 'react'
import Header from './../header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import { Container } from 'react-bootstrap';
import style from './layout.module.css'

export default function Layout() {
    return <>
        <div>
            <Header />
            <Container fluid className={`${style.mainBG} d-flex justify-content-center align-items-center`}>
                <Container>
                    <Outlet />
                </Container>
            </Container>
            <Footer />
        </div>
    </>
}
