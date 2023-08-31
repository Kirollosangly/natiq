import { Col, Container, Row } from 'react-bootstrap'
import style from './footer.module.css'
import React from 'react'


export default function Footer() {
    return <>
        <Container fluid className={`${style.mainBg} py-4`}>
            <Row >
                <Col md={6} className='d-flex justify-content-center align-items-center'>
                    <p className='m-0'>Copyrights © 2023 <span className='fw-semibold'>RDI</span> All Rights Reserved</p>
                </Col>
                <Col md={6} className='my-4 my-md-0'>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div>
                            <p className='m-0'><span className={`${style.iconWidth}`}><i className="fa-solid fa-code"></i></span> : Kirollos Angly</p>
                            <p className='m-0'><span className={`${style.iconWidth}`}><i className="fa-solid fa-mobile-screen"></i></span> : 01208293014</p>
                            <p className='m-0'><span className={`${style.iconWidth}`}><i className="fa-solid fa-envelope"></i></span> : kirollos.angly@outlook.com</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </>
}
