import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDonorProfile, updateDonor } from "../Services/DonorService";

import { useNavigate } from 'react-router-dom';

export function DonorEditForm() {
    const params = useParams();
    
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "", email: "", phoneNumber: "", gender: "",
        dateOfBirth: "", state: "", district: "", city: "", pincode: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await updateDonor(formData, params.email);
            console.log(result);
            setIsSubmitted(true); 
            setTimeout(() => {
                setIsSubmitted(false); 
                navigate('/log-in'); 
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    }

    const populateDonorState = async () => {
        try {
            const result = await getDonorProfile(params.email);
            console.log(result)
            setFormData(result);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateDonorState();
    }, []);

    return (
        <>

            <Container>
                <h1>Update donor here</h1>
                {formData ? (
                    <Form onSubmit={handleSubmit}>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.name}
                                        placeholder="Enter name"
                                        name="name"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.email}
                                        placeholder="Enter email"
                                        name="email"
                                        
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.phoneNumber}
                                        placeholder="Enter phone number"
                                        name="phoneNumber"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Select
                                        value={formData.gender}
                                        name="gender"
                                        onChange={handleChange}
                                    >
                                        <option value="">Select Gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </Form.Select>

                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>Date of Birth</Form.Label>
                                    <Form.Control
                                        type="date"
                                        value={formData.dateOfBirth}
                                        name="dateOfBirth"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.state}
                                        placeholder="Enter state"
                                        name="state"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>District</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.district}
                                        placeholder="Enter district"
                                        name="district"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.city}
                                        placeholder="Enter city"
                                        name="city"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={4}>
                                <Form.Group className="mb-3">
                                    <Form.Label>PIN code</Form.Label>
                                    <Form.Control
                                        type="text"
                                        value={formData.pincode}
                                        placeholder="Enter PIN code"
                                        name="pincode"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={3}>
                                <Button variant="primary" type="submit">
                                    Update
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                ) : (
                    <p>No data found for the given  number.</p>
                )}

                <Row className="mt-3">
                    <Col lg={4}>{isSubmitted ? <Alert variant="success">Donor Updated</Alert> : null}</Col>
                </Row>
            </Container>

        </>
    );
}