import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Accordion, Button, Form, Row, Col } from 'react-bootstrap';
import '../css/ContactUs.css';


const ContactUs = () => {
    return (
        <Container className="Container">
            {/* Contact Us Card */}
            <Card className="Card">
                <Card.Header>Contact Us</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <strong>Email:</strong> contact@sanjeevani.com <br />
                        <strong>Phone:</strong> +1234567890 <br />
                        <strong>Address:</strong> 123 Street, Mumbai, India
                    </Card.Text>
                </Card.Body>
            </Card>

            {/* Ask a Question Section */}
            <div className="AskQuestion">
                <h3>Ask a Question</h3>
                <Form>
                    <Row>
                        <Col md={6}>
                            <Form.Group controlId="formName" className="mb-3">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter your name" />
                            </Form.Group>
                        </Col>

                        <Col md={6}>
                            <Form.Group controlId="formEmail" className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" />
                            </Form.Group>

                        </Col>
                    </Row>
                    <Form.Group controlId="formQuestion" className="mb-3">
                        <Form.Label>Your Question</Form.Label>
                        <Form.Control as="textarea" rows={3} placeholder="Enter your question" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
            </div>

            {/* FAQ Section */}
            <div className="FAQ">
                <h3>Frequently Asked Questions (FAQ)</h3>
                <Accordion>
                    <Accordion.Item eventKey="0" className='accordionItem'>
                        <Accordion.Header>Who can donate blood?</Accordion.Header>
                        <Accordion.Body>
                            This question can cover eligibility criteria such as age, weight, health conditions, 
                            and travel history that determine whether an individual is eligible to donate blood.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1" className='accordionItem'>
                        <Accordion.Header>How often can I donate blood?</Accordion.Header>
                        <Accordion.Body>
                            Explaining the time frame between blood donations can help potential donors 
                            understand the frequency with which they can safely contribute.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2" className='accordionItem'>
                        <Accordion.Header>Is donating blood safe?</Accordion.Header>
                        <Accordion.Body>
                            Addressing safety concerns by outlining the screening process for donors,
                            the sterile procedure, and the measures taken to ensure both the donor's and recipient's safety.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3" className='accordionItem'>
                        <Accordion.Header>What happens during a blood donation?</Accordion.Header>
                        <Accordion.Body>
                            Providing an overview of the donation process, including registration, 
                            screening, the actual donation, post-donation care, and the duration of the entire process.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4" className='accordionItem'>
                        <Accordion.Header>How does my blood donation help?</Accordion.Header>
                        <Accordion.Body>
                            Informing donors about the impact of their contribution, such as the different types of patients (e.g., accident victims,
                             surgical patients, those with medical conditions) who benefit from donated blood and how it saves lives.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
            <div className='Testimonials'>
                <h3 className='my-4'>Testimonials</h3>
                <Row className='TestimonialContainer mb-5'>
                    {/* Testimonial 1 */}
                    <Col md={4}>
                        <Card className='TestimonialCard'>
                            <Card.Body>
                                <Card.Title>"Saved a Life and Felt Empowered!"</Card.Title>
                                <Card.Text>
                                    "Donating blood was a meaningful experience for me. Knowing that a small act on my part could potentially save a life was empowering. 
                                    The process was smooth, the staff was supportive, and I left feeling fulfilled. I encourage everyone to join this noble cause."
                                </Card.Text>
                                <p>- John Doe</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Testimonial 2 */}
                    <Col md={4}>
                        <Card className='TestimonialCard'>
                            <Card.Body>
                                <Card.Title>"Grateful for the Gift of Giving"</Card.Title>
                                <Card.Text>
                                    "As a regular blood donor, I've seen firsthand the impact of this simple act. Last year, my donated blood helped someone during a critical surgery.
                                    It's a humbling feeling to know that my contribution made a difference. I'm grateful for the opportunity to give back to my community."
                                </Card.Text>
                                <p>- Jane Smith</p>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={4}>
                        <Card className='TestimonialCard'>
                            <Card.Body>
                                <Card.Title>"Ease and Comfort in Donation"</Card.Title>
                                <Card.Text>
                                    "I used to be apprehensive about donating blood until I visited this blood bank. The team's professionalism and care put me at ease. 
                                    The donation process was quick and comfortable.It's amazing how a brief visit can potentially change someone's life."
                                </Card.Text>
                                <p>- Jane Smith</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};




export default ContactUs;