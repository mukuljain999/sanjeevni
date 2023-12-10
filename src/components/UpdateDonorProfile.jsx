import { useEffect, useState } from "react";
import { getDonorProfile, updateDonor } from "../Services/DonorService";
import { Form, Button } from "react-bootstrap";

export function UpdateDonorProfile(props){
    console.log("Line no 6");
    console.log(props.pfl);
    const [formData, setFormData] = useState({
        name: '',
        email :'',
        state: '',
        city: '',
        phone : '',
        district : '',
        pincode : ''
      });
    
      const handleChange = (e) => {
        setFormData({...formData,[e.target.name]: e.target.value});
    };

    const handleUpdate = async (e) => {
        console.log('Updating profile:', formData);
        e.preventDefault();
        try {
            const result = await updateDonor(formData);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
      };

    const populateStudentState=async()=>{
        try {

            setFormData(props.pfl);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        populateStudentState();
    },[]);

    return(    
        <div>
            <form>
                <label>Name:</label>
                <Form.Control type="text"  name="name" value={formData.name} onChange={handleChange} /><br/>

                <label>Email:</label>
                <Form.Control type="text"  name="email" value={formData.email} /><br/>

                <label>State:</label>
                <Form.Control type="text"  name="state" value={formData.state} onChange={handleChange} /><br/>

                <label>District:</label>
                <Form.Control type="text"  name="district" value={formData.district} onChange={handleChange}/><br/>

                <label>City:</label>
                <Form.Control type="text"  name="city" value={formData.city} onChange={handleChange} /><br/>

                <label>PIN code:</label>
                <Form.Control type="text"  name="pincode" value={formData.pincode} onChange={handleChange} /><br/>

                <Button variant="success" onClick={handleUpdate}>Update</Button>
            </form>
        </div>
    )
}