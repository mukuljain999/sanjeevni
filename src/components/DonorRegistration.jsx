import React, { useState } from 'react';
import { Form, Row, Button, Col } from 'react-bootstrap';
import { saveDonor } from '../Services/DonorService';

const DonorRegistration = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        gender: '',
        dateOfBirth: '',
        state: '',
        district: '',
        city: '',
        pincode: '',
        phoneNumber: '',
        bloodGroup: '',
    });
    const [isSubmitted, setIsSubmitted] = useState(false);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        // console.log(name, value);
        setFormData({ ...formData, [name]: value });
        console.log(formData);
    };

    const handleDateChange = (event) => {
        setFormData({ ...formData, dateOfBirth: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // for submission without reloading the page
        try {
          const result = await saveDonor(formData);
          setFormData({
                name: '',
                email: '',
                password: '',
                gender: '',
                dateOfBirth: '',
                state: '',
                district: '',
                city: '',
               pincode: '',
              phoneNumber: '',
               bloodGroup: '',
           });
            setIsSubmitted(true);
            setTimeout(() => {
                setIsSubmitted(false);
            }, 1500);
            console.log(result.message);
        }
        
        catch (error){
            console.log(error);

         }
         console.log('Form data:', formData);
    };


    return (
        <div>
            <h2>Donor Registration Form</h2>
            <div className="login-container">
                <Form className="login-form" onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="name" className="mb-3">
                                <Form.Label className="loginLabel">Name:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="email" className="mb-3">
                                <Form.Label className="loginLabel">Email:</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Enter your email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="password" className="mb-3">
                                <Form.Label className="loginLabel">Password:</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Enter your password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="gender" className="mb-3">
                                <Form.Label className="loginLabel">Gender:</Form.Label>
                                <Form.Control as="select" name="gender" value={formData.gender} onChange={handleInputChange}>
                                    <option value="">Select</option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row className="mb-3">


                        <Form.Group controlId="formDate" className="mb-3">
                            <Form.Label className="loginLabel">Date</Form.Label>
                            <Form.Control type="date" value={formData.dateOfBirth} onChange={handleDateChange} />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="phoneNumber" className="mb-3">
                                <Form.Label className="loginLabel">Phone Number:</Form.Label>
                                <Form.Control
                                    type="tel"
                                    placeholder="Enter your phone number"
                                    name="phoneNumber"
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="bloodGroup" className="mb-3">
                                <Form.Label className="loginLabel">Blood Group:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your blood group"
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="state" className="mb-3">
                                <Form.Label className="loginLabel">State:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your state"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="district" className="mb-3">
                                <Form.Label className="loginLabel">District:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your district"
                                    name="district"
                                    value={formData.district}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row className="mb-3">
                        <Col>
                            <Form.Group controlId="city" className="mb-3">
                                <Form.Label className="loginLabel">City:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="pincode" className="mb-3">
                                <Form.Label className="loginLabel">Pincode:</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter your pincode"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Button variant="secondary" type="submit">
                        Register
                    </Button>
                </Form>

            </div>
        </div>

    );
};

export default DonorRegistration;
