import icon1 from '../images/donationDone.png';
import icon2 from '../images/Voucher.png';
import icon3 from '../images/donationType.png'
import { Col, Container, Row, Card, ListGroup, Button,Table } from "react-bootstrap";
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useNavigate } from 'react-router-dom';
import { UpdateDonorProfile } from './UpdateDonorProfile';

var profile = null;

export const receiveProfile = (p)=>{
    console.log(p);
    profile = p;
}


export function DonorProfile() {

/*********************************************************/

/*********************************************************/
    const navigate = useNavigate();
    if (profile == null) {
        navigate('/donor');
    }

/******************************************************/
const [show1, setShow1] = useState(false);

const handleClose1 = () => setShow1(false);
const handleShow1 = () => setShow1(true);
/******************************************************/    
/****************************************************/
const [show2, setShow2] = useState(false);

const handleClose2 = () => setShow2(false);
const handleShow2 = () => setShow2(true);
/*******************************************************/
    return(
        <Container className= "p-2">
            <Row className="mt-4 mb-2">
                <Col lg={6}>
                    <Table striped bordered hover className="table table-danger">
                            <tr>
                                <th>Full Name</th>
                                <td>{profile.name}</td>
                            </tr>
                            <tr>
                                <th>Gender</th>
                                <td>{profile.gender}</td>
                            </tr>
                            <tr>
                                <th>State</th>
                                <td>{profile.state}</td>
                            </tr>
                            <tr>
                                <th>District</th>
                                <td>{profile.district}</td>
                            </tr>
                            <tr>
                                <th>City</th>
                                <td>{profile.city}</td>
                            </tr>
                            <tr>
                                <th>Pin</th>
                                <td>{profile.pincode}</td>
                            </tr>
                            <tr>
                                <th>Appointment Date</th>
                                <td>{profile.appointmentDate}</td>
                            </tr>
                    </Table>
                </Col>
                <Col lg={6}>
                <Table striped bordered hover className="table table-danger">
                        <tr>
                            <th>Email</th>
                            <td>{profile.email}</td>
                        </tr>
                        <tr>
                            <th>Date of Birth</th>
                            <td>{profile.dateOfBirth}</td>
                        </tr>
                        <tr>
                            <th>Total Donations</th>
                            <td>{profile.donationCount}</td>
                        </tr>
                        <tr>
                            <th>Blood Group</th>
                            <td>{profile.bloodGroup}</td>
                        </tr>
                        <tr>
                            <th>Phone number</th>
                            <td>{profile.phoneNumber}</td>
                        </tr>
                        <tr>
                            <th>Appointment Time</th>
                            <td>{profile.appointmentTime}</td>
                        </tr>
                    </Table>
                    <Button variant="danger">Delete Profile</Button>{' '}
                    <Button variant="info" onClick={handleShow2}>Update Profile</Button>{' '}
                    <Offcanvas show={show2} onHide={handleClose2} placement="end">
                        <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Update Yourself</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                        <UpdateDonorProfile pfl={profile}></UpdateDonorProfile>
                        </Offcanvas.Body>
                    </Offcanvas>
                </Col>
            </Row>
            <Row className="mt-4 mb-2">
                <Col lg={4}>
                    <Card style={{ width: '20rem' }}>
                        <img src={icon1} width={100} height={100}></img>
                        <Card.Body>
                            <Card.Title>Thank you</Card.Title>
                            <Card.Text>
                            For your selfless act of donating blood. Your generosity is a lifesaving
                             gift, bringing hope and health to those in need. Grateful beyond words
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Name : {profile.name} </ListGroup.Item>
                            <ListGroup.Item>Date : </ListGroup.Item>
                            <ListGroup.Item>Type : </ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Button variant="danger">Donate Again</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '20rem' }}>
                        <img src={icon2} width={100} height={100}></img>
                        <Card.Body>
                            <Card.Title>Gratitude</Card.Title>
                            <Card.Text>
                            For your noble donation! This voucher grants you a free blood bag or blood checkup. 
                            Your kindness makes a vital difference in saving lives. Thank you!
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>Code : </ListGroup.Item>
                            <ListGroup.Item>Issue Date : </ListGroup.Item>
                            <ListGroup.Item>Expiry : </ListGroup.Item>
                        </ListGroup>
                        <Card.Body>
                        <Button variant="success">Redeem</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4}>
                    <Card style={{ width: '20rem' }}>
                        <img src={icon3} width={100} height={100}></img>
                        <Card.Body>
                            <Card.Title>Blood Donation Drive</Card.Title>
                            <Card.Text>
                            Every drop counts. Your compassion fuels hope and saves lives
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item><Button variant="warning">Support Us (₹)</Button>{' '}</ListGroup.Item>
                            <ListGroup.Item>
                                <Button variant="info" onClick={handleShow1}>Upcomming Drive</Button>{' '}
                                <Offcanvas show={show1} onHide={handleClose1}>
                                    <Offcanvas.Header closeButton>
                                    <Offcanvas.Title>🩸Gatway of India, Mumbai🩸</Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                    Join us on 📅December 25, 2023, from 🕙 10 AM to 4 PM for a life-saving event. 
                                    Your blood donation can make a difference. Let's come together for this 
                                    noble cause at the iconic Gateway of India, Mumbai.<br/>
                                    Your contribution matters! Together, let's save lives.<br/>
                                    #BloodDonation #MumbaiCares
                                    </Offcanvas.Body>
                                </Offcanvas>
                            </ListGroup.Item>
                            <ListGroup.Item><Button variant="primary">Organise Drive</Button>{' '}</ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}