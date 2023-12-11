import { useEffect, useState } from "react";
import { getDonorProfile, updateDonor } from "../Services/DonorService";
import { Form, Button } from "react-bootstrap";
import {useParams} from "react-router-dom";
import { useNavigate } from 'react-router-dom';

export function UpdateDonorProfile(props) {
    //console.log("Line no 6");
    console.log(props.pfl);
    const params = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: props.pfl.name || '',
        email: props.pfl.email || '',
        state: props.pfl.state || '',
        city: props.pfl.city || '',
        phoneNumber: props.pfl.phoneNumber || '',
        district: props.pfl.district || '',
        pincode: props.pfl.pincode || ''
    });
    
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        console.log('Updating profile:', formData);
        e.preventDefault();
        try {
            const result = await updateDonor(formData,params.email);
            console.log(result);
            navigate('/log-in')
        } catch (error) {
            console.log(error);
        }
    };

    const populateDonorState = async () => {
        try {
            const result = await getDonorProfile(params.email);
            setFormData(result.Donor);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateDonorState();
    }, [props.pfl]);

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                
                <Form.Group controlId="name">
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                </Form.Group>

                

                

                <Form.Group controlId="district">
                    <Form.Label>District:</Form.Label>
                    <Form.Control
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="city">
                    <Form.Label>City:</Form.Label>
                    <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="pincode">
                    <Form.Label>PIN code:</Form.Label>
                    <Form.Control
                        type="text"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Form.Group controlId="phoneNumber">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control
                        type="text"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </Form.Group>

                <Button variant="success" type="submit">
                    Update
                </Button>
            </Form>
        </div>
    )
}