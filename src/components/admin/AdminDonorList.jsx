import { useEffect, useState } from "react";
import { Container, Button, Modal } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { deleteDonor, fetchDonors } from "../../Services/DonorService";

export function AdminDonorList() {

    const [donors, setDonors] = useState([]);
    const [showDialog, setShowDialog] = useState(false);
    const [selectedEmail, setSelectedEmail] = useState("");


    const navigate = useNavigate();

    const openModalDialog = () => {
        setShowDialog(true);
    }
    const closeModalDialog = () => {
        setShowDialog(false);
    }

    async function populateDonorsState() {
        try {
            const data = await fetchDonors();
            setDonors(data.Donor)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        populateDonorsState();
    }, []);

    const handleDonorDelete = async () => {
        try {
            await deleteDonor(selectedEmail);
            populateDonorsState();
            closeModalDialog();
        } catch (error) {
            console.log(error);
        }
    }

    return (

        <Container >

            <h1 className="mt=5">All donor list</h1>
            {donors.length !== 0 ? <Table striped responsive bordered hover variant="light">
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
                        donors.map((donor) => {
                            return (
                                <tr>

                                    <td>{donor.name}</td>
                                    <td>{donor.dateOfBirth}</td>
                                    <td>{donor.gender}</td>
                                    <td>{donor.email}</td>
                                    <td>
                                        <Button variant="info" onClick={() => { navigate(`/edit/${donor.email}`) }} >Edit</Button>&nbsp; &nbsp; &nbsp;
                                        <Button variant="danger" onClick={() => {
                                            openModalDialog();
                                            setSelectedEmail(donor.email);
                                        }}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </Table> : <p>No donors found....</p>}

            <Modal show={showDialog} onHide={closeModalDialog}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirmation</Modal.Title>
                </Modal.Header>
                <Modal.Body>Do you really want to delete this Donor {selectedEmail}?</Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={()=>{
                        handleDonorDelete();
                    }}>
                        Yes
                    </Button>
                    <Button variant="danger" onClick={closeModalDialog}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>

        </Container >


    );
}