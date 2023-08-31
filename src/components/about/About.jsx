import { Container, Row, Col } from 'react-bootstrap'
import style from './about.module.css'
import React from 'react'

export default function About() {
    return <>
        <Container fluid>
            <Row>
                <h2>How It Works</h2>
            </Row>
            <Row>
                <Col>
                    <p className='ps-4'>
                        1. <span className='fw-semibold'>Input and Pronunciation:</span> Natiq offers a user-friendly interface where you can easily input any Arabic word.
                        Once entered, our advanced AI voice technology instantly translates the word into clear, accurate, and authentic pronunciation.
                        Hear the word come to life in a way that mirrors native speech patterns.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='ps-4'>
                        2. <span className='fw-semibold'>Echo Effect:</span> But we've taken it a step further. Natiq doesn't just pronounce the word;
                        it reinforces learning through repetition. After enunciating the word, Natiq employs its unique "echo" feature, where the last word is echoed three times.
                        This helps etch the pronunciation into your memory, enhancing your linguistic recall and fluency.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2>Join Us on the Language Journey</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className='ps-4'>
                        At Natiq, we believe that language learning should be immersive, engaging, and effective. With our state-of-the-art technology,
                        we're committed to helping you build your Arabic language skills with confidence.
                        Embark on your language journey with Natiq – where words come to life and learning becomes an adventure.
                    </p>
                </Col>
            </Row>
        </Container>
    </>
}
