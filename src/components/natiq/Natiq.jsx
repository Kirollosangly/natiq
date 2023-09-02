import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Image } from 'react-bootstrap';
import { Field, Formik, Form } from 'formik';
import { changeAudioState, connectNatiq } from '../../state-management/Slice/natiq-slice';
import gifPicture from '../../assets/images/gifLogo.gif'
import style from './natiq.module.css'

export default function Natiq() {

    const { natiqText, audioWave, loading, lastEcho } = useSelector(state => state.natiq)
    const [natiqAudio, setNatiqAudio] = useState(undefined)
    const [natiqLastWord, setNatiqLastWord] = useState(undefined)


    const dispatch = useDispatch();

    const echoFunction = (word) => {
        setNatiqLastWord(word)
    }

    useEffect(() => {
        if (audioWave) {
            const regularBase64 = audioWave.replace(/-/g, '+').replace(/_/g, '/');
            const audio = new Audio();
            audio.src = `data:audio/wav;base64,${regularBase64}`;
            setNatiqAudio(audio.src)
            audio.play();
            echoFunction(lastEcho[lastEcho.length - 1][0])
        };
    }, [audioWave])


    useEffect(() => {
        setNatiqAudio(undefined)
        dispatch(changeAudioState())
    }, [])


    const submitText = (value) => {
        dispatch(connectNatiq(value))
    }



    const validateInput = (value) => {
        let error = ''
        if (!value) error = "Required Input";
        else if (!/^[\u0621-\u064A\s]+$/i.test(value))
            error = "Please enter a valid Arabic letters";
        return error;
    }



    return <>
        {loading ? <Container fluid className={`${style.loadingScreen} d-flex justify-content-center align-items-center`}>
            <div className='d-flex justify-content-center align-items-center'>
                <Image src={gifPicture} className={`${style.loadingPic}`} />
            </div>
        </Container> : ''}
        <Container fluid>
            <div className={`${style.glassBg} py-4`}>
                <Row className='text-center'>
                    <Col md={8} className="mx-auto">
                        <p>
                            Experience the magic of hearing Arabic words brought to life by our AI voice.
                            Enter your Arabic words now and immerse yourself in the world of sound.
                        </p>
                    </Col>
                </Row>
                <Row className='text-center'>
                    <Col>
                        <Formik
                            initialValues={natiqText}
                            onSubmit={(values) => { submitText(values) }}
                        >
                            {({ errors, touched }) => (
                                <Form>
                                    <Field
                                        dir="rtl"
                                        type="text"
                                        id="text"
                                        name="text"
                                        placeholder="أكتب، أسمع"
                                        validate={validateInput}
                                        className={`${style.field} rounded-2 fs-5 px-3 py-2 text-black`} />

                                    {errors.text && touched.text ? (
                                        <div className={`warning my-2 text-danger fw-semibold w-100 `}>
                                            {errors.text}
                                        </div>
                                    ) : (
                                        ""
                                    )}
                                    <Row>
                                        <Col>
                                            <button type="submit" className={`${style.echoBtn} py-1 px-4 rounded-2 mt-4`}>Echo</button>
                                        </Col>
                                    </Row>
                                    {audioWave ? <Row>
                                        <Col>
                                            <audio src={audioWave ? natiqAudio : ''} className='mt-4' controls autoPlay></audio>
                                        </Col>
                                    </Row> : ''}
                                </Form>
                            )}
                        </Formik>
                    </Col>
                </Row>
            </div>
        </Container>
    </>
}
