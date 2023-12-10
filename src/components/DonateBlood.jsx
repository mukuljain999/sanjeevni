import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../css/DonateBlood.css'
import { saveAppointment } from '../Services/AppointmentService';

// Import your CSS file for component styling

const DonateBlood = () => {
    const [appointmentData, setAppointmentData] = useState({
        appointmentName: '',
        appointmentEmail: '',
        appointmentGender: '',
        appointmentDate: '',
        appointmentPhoneNumber: '',
        appointmentTime: ''

    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // console.log(name, value);
        setAppointmentData({ ...appointmentData, [name]: value });
        console.log(appointmentData);
    };

    const handleDateChange = (event) => {
        setAppointmentData({ ...appointmentData, appointmentDate: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // for submission without reloading the page
        try {
            const result = await saveAppointment(appointmentData);
            setAppointmentData({
                appointmentName: '',
                appointmentEmail: '',
                appointmentGender: '',
                appointmentDate: '',
                appointmentPhoneNumber: '',
                appointmentTime: ''

            });
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
            }, 1500);
            console.log(result.message);
        }

        catch (error) {
            console.log(error);

        }
        console.log('Appointment data:', appointmentData);
    };

    return (
        <div className="blood-background">
            {/* Background image container */}
            <Container>
                <Row className="justify-content-center">
                    <Col md={12} lg={6}>
                        <div className="appointment-form">
                            {/* Translucent appointment form */}
                            <h2 className="h2">Book an Appointment</h2>
                            <Form className="appointment-form" onSubmit={handleSubmit}>
                                {/* Form fields go here */}
                                <Form.Group controlId="formName">
                                    <Row>
                                        <Col lg={6}>
                                            <Form.Group controlId="formName" >
                                                <Form.Label >Name</Form.Label>
                                                <Form.Control type="text" placeholder="Enter your name"
                                                    name="appointmentName"
                                                    value={appointmentData.appointmentName}
                                                    onChange={handleInputChange} />
                                            </Form.Group>
                                            <Form.Group controlId="formGender">
                                                <Form.Label>Gender</Form.Label>
                                                <Form.Control as="select" name="appointmentGender" value={appointmentData.appointmentGender} onChange={handleInputChange}>
                                                    <option value="male">Male</option>
                                                    <option value="female">Female</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId="formDate">
                                                <Form.Label>Date</Form.Label>
                                                <Form.Control type="date" value={appointmentData.appointmentDate} onChange={handleDateChange} />
                                            </Form.Group>
                                        </Col>
                                        <Col lg={6}>
                                            <Form.Group controlId="formTime">
                                                <Form.Label>Time</Form.Label>
                                                <Form.Control type="time"
                                                    name="appointmentTime"
                                                    value={appointmentData.appointmentTime}
                                                    onChange={handleInputChange} />
                                            </Form.Group>
                                            <Form.Group controlId="formEmail">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" placeholder="Enter your email"
                                                    name="appointmentEmail"
                                                    value={appointmentData.appointmentEmail}
                                                    onChange={handleInputChange} />
                                            </Form.Group>
                                            <Form.Group controlId="formPhone">
                                                <Form.Label>Phone Number</Form.Label>
                                                <Form.Control type="tel" placeholder="Enter your phone number"
                                                    name="appointmentPhoneNumber"
                                                    value={appointmentData.appointmentPhoneNumber}
                                                    onChange={handleInputChange} />
                                            </Form.Group>
                                        </Col>
                                    </Row>

                                </Form.Group>
                                {/* More form fields */}
                                <Button variant="primary" type="submit" className='donateBloodBtn'>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                        <div className="prerequisites">
                            <h3>Prerequisites for Blood Donation:</h3>
                            <ul>
                                <li>Generally 16–18 years old (with parental consent). Upper age limit may apply.</li>
                                <li>Around 110 pounds (50 kg) or meet specified criteria</li>
                                <li>Good health with no infections or illnesses at the time of donation.</li>
                                <li>Disclosure of past illnesses, surgeries, and current medications.</li>
                                <li> Valid ID (e.g., driver's license or passport) required.</li>
                                <li> Good rest, a healthy meal, and adequate fluids before donation.</li>
                                {/* Add more prerequisites as needed */}
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};



export default DonateBlood;
