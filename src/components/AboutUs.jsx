import mukul from "../images/mukul.jpg"
import neeraj from "../images/neeraj.jpg"
import nitish from "../images/nitish.jpg"
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/Aboutus.css'
import aboutusgif from "../images/aboutus.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faLinkedin, faFacebook, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
export const AboutUs = () => {
    return (
        <Container className='body'>


            <Row>
                <Col lg={12}>
                    <div class="gif-container">
                        <img src={aboutusgif} alt="Your GIF" class="fullscreen-gif" />
                        <h1 class="heading-over-gif">About us </h1>
                    </div>
                </Col>

            </Row>



            <Row className='mt-5'>
                <Col lg={12}>
                    <Card>
                        <Card.Header><b>Our Vision</b></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    At SANJEEVANI Blood Bank, our vision is to create a healthier and stronger community by ensuring a
                                    readily available, safe, and sustainable blood supply. We envision a world where every individual
                                    has access to life-saving blood products whenever needed, saving countless lives and fostering
                                    a culture of volunteerism and care.
                                </p>
                                <p>
                                    We strive to implement cutting-edge technologies and best practices in blood collection, processing,
                                    and distribution. Our commitment extends beyond the immediate service; we aim to educate and raise
                                    awareness about the importance of blood donation, inspiring a sense of responsibility and unity
                                    among communities.
                                </p>
                                <p>
                                    Together, we envision a future where the gift of blood becomes a symbol of hope, compassion, and
                                    solidarity, creating a lasting impact on the lives of those in need and contributing to a healthier
                                    and more vibrant society.
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>


            <Row className='mt-5' >
                <Col lg={12}>
                    <Card>
                        <Card.Header> <b>Our Mission</b></Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p>
                                    At SANJEEVANI Blood Bank, our mission is to serve as a lifeline for our community by ensuring a
                                    consistent and adequate blood supply for patients in need. We are dedicated to collecting,
                                    processing, and distributing blood and blood products efficiently and safely.
                                </p>
                                <p>
                                    We aim to collaborate with hospitals, medical professionals, and local organizations to
                                    meet the diverse and critical needs of patients, from emergency transfusions to ongoing
                                    treatments. Our mission extends to supporting medical advancements and research, contributing
                                    to innovations in transfusion medicine and improving patient care.
                                </p>
                                <p>
                                    Through our outreach initiatives and donor programs, we strive to cultivate a culture
                                    of voluntary blood donation, emphasizing the importance of each donation in saving lives.
                                    Our mission is rooted in compassion, community engagement, and excellence in blood banking
                                    practices to ensure the well-being of those we serve.
                                </p>
                                <footer className="blockquote-footer">
                                    Someone famous in <cite title="Source Title">Source Title</cite>
                                </footer>
                            </blockquote>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>

            <Row className="mt-5">
                <Col lg={12}>
                    <h1>Our Leaders</h1>
                </Col>
            </Row>
            <Row  >
                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={neeraj} className="photo"/>
                        <Card.Body>
                            <Card.Title>G. Neeraj Kumar</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                                
                            </Card.Text>
                        </Card.Body>
                        
                        <Card.Body>
                            <Card.Link href="https://www.linkedin.com/in/g-neeraj-kumar/"><FontAwesomeIcon icon={faLinkedin} className="iconstyle" /></Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={mukul} className="photo" />
                        <Card.Body>
                            <Card.Title>Mukul Jain</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        
                        <Card.Body>
                            <Card.Link href="https://www.linkedin.com/in/mukul-jain-75538b20b/"><FontAwesomeIcon icon={faLinkedin} className="iconstyle" /></Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={nitish} className="photo"/>
                        <Card.Body>
                            <Card.Title>Nitish S. Patil</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                        
                        <Card.Body>
                            <Card.Link href="https://www.linkedin.com/in/nitish-patil-6897a6190"><FontAwesomeIcon icon={faLinkedin} className="iconstyle" /></Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>

    );
};

export default AboutUs;

const gifstyling = {

}