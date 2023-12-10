import { useEffect, useState } from "react";
import { Container,Button } from "react-bootstrap";

import Table from 'react-bootstrap/Table';
import { fetchDonors } from "../../Services/DonorService";

export function AdminDonorList() {

    const [donors,setDonors]=useState([]);
    
    async function populateDonorsState(){
        try {
            const data = await fetchDonors();
            console.log(data)
            setDonors(data.Donor)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        populateDonorsState();
    },[]);
    return (

        <Container >

            <h1 className="mt=5">All donor list</h1>
            {donors.length !== 0 ?  <Table striped  responsive bordered hover variant="light">
                <thead>
                    <tr>
                        
                        <th>Name</th>
                        <th>DOB</th>
                        <th>Gender</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody> {/* we have create a map which fetch every request form donor table */}
                    {
                        donors.map((d)=>{
                            return(
                                <tr>
                                    
                                    <td>{d.name}</td>
                                    <td>{d.dateOfBirth}</td>
                                    <td>{d.gender}</td>
                                    <td>{d.email}</td>
                                    <td>
                                    <Button variant="info" >Edit</Button>&nbsp; &nbsp; &nbsp;
                                    <Button variant="danger" >Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table>: <p>No donors found....</p>} 
        </Container >


    );
}