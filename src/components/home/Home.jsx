import style from './home.module.css'
import React from 'react'
import { Button, Container, Row, Col, Image } from 'react-bootstrap';
import picture from '../../assets/images/natiqLogo.png'
import { Link } from 'react-router-dom';

export default function Home() {
    return <>
        <Container fluid>
            <div className={`${style.glassBg} py-4`}>
                <Row>
                    <Col md={8}>
                        <p className='m-0 ps-5'>
                            Natiq is a web application designed to enhance your language learning experience. With the power of advanced AI voice technology, our app allows you to input Arabic words, instantly
                            transforming them into clear and accurate vocalizations. But that's not all – we've added a unique twist! After pronouncing the word, our app provides an engaging <span className={`${style.echo} fw-semibold`}>"echo"</span> feature,
                            where the last word is repeated three times in succession.
                        </p>
                        <div className='text-center text-md-end my-4 my-md-0 mt-md-2'>
                            <Link to="/natiq" className={`${style.tryBtn} rounded py-2 px-4 text-white text-decoration-none`}>Try Natiq</Link>
                        </div>
                    </Col>
                    <Col md={4} className='d-flex justify-content-center align-items-center'>
                        <Image src={picture} className={`${style.faceImage} p-1`} roundedCircle />
                    </Col>
                </Row>
            </div>
        </Container>
    </>
}
