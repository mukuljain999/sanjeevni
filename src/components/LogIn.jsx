import React, { useState } from 'react';
import { Form, Row, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../css/LogIn.css';
import { useNavigate } from 'react-router-dom';
import { donorLogin, getDonorProfile } from '../Services/DonorService';
import { adminLogin } from '../Services/AdminService';
import { receiveProfile } from './DonorProfile.jsx';


function LogIn() {


    const handleSwitchToggle = () => {
        setIsAdmin(!isAdmin);
    };

    const navigate = useNavigate();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [isAdmin, setIsAdmin] = useState(false);
    const [loginError, setLoginError] = useState(false);

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleDonorSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log(formData);
            const result = await donorLogin(formData);
            console.log(result);
            localStorage.setItem("token", result.token);
            localStorage.setItem("email",result.email);
            directingToDonerProfile(result.email);
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    };

    const directingToDonerProfile = async (email)=>{
        console.log(email);
        const profile = await getDonorProfile(email);
        console.log(profile);
        if (profile != null) {
            receiveProfile(profile);
            navigate('/donor-profile');
        }
    }

    const handleAdminSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await adminLogin(formData);
            localStorage.setItem("token", result.token);
            navigate("/contact-us");
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
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
                <Form className="login-form" onSubmit={isAdmin ? handleAdminSubmit : handleDonorSubmit}>
                    <Row>
                        <Form.Group controlId="formName" className="mb-3">
                            <Form.Label className="loginLabel">Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter your email" name="email"
                                value={formData.email}
                                onChange={handleInputChange} />
                        </Form.Group>
                    </Row>

                    <Row>
                        <Form.Group controlId="formPassword" className="mb-3">
                            <Form.Label className="loginLabel">Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password"
                                value={formData.password}
                                onChange={handleInputChange} />
                        </Form.Group>
                    </Row>
                    <Button variant="danger" type="submit">{isAdmin ? 'Admin Login' : 'Login'}
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