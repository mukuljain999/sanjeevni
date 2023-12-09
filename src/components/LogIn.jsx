import React, { useState } from 'react';
import { Form, Row, Button, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/LogIn.css';


function LogIn() {
    const [isAdmin, setIsAdmin] = useState(false);

    const handleSwitchToggle = () => {
        setIsAdmin(!isAdmin);
    };

    const handleNormalSubmit = (e) => {
        e.preventDefault();
        alert('Login button clicked for normal section!');
    };

    const handleAdminSubmit = (e) => {
        e.preventDefault();
        alert('Login button clicked for admin section!');
    };

    const handleRegister = () => {

    };

    return (

        <Container>

            <div className='switch-container p-4 m-0'>
                <p>Switch to Admin Mode</p>
                <label className="switch">
                    <input type="checkbox" checked={isAdmin} onChange={handleSwitchToggle} />
                    <span className="slider"></span>
                </label>
                <div className={isAdmin ? "admin-content show" : "admin-content"}>
                    <h4>Admin Login</h4>
                </div>
            </div>

            <div className="login-container">
                <Form className="login-form" onSubmit={isAdmin ? handleAdminSubmit : handleNormalSubmit}>
                    <Row>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label className="loginLabel">Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter your email" />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label className="loginLabel">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Row>
                    <Button variant="danger" type="submit">{isAdmin ? 'Login' : 'Login'}
                    </Button>
                    <a href='#'>Forgotten password?</a>
                    <div className='registerRedirect'>
                        <p>Haven't registered yet?</p>
                        <Link to="/register">
                            <Button variant="secondary">Register</Button>
                        </Link>
                    </div>

                </Form>

            </div>

        </Container>

    );
}



export default LogIn;