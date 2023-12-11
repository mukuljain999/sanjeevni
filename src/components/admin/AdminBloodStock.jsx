import { Container, Button, Modal, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import { fetchStocks, updateStockCount } from "../../Services/AdminService";

export function AdminBloodStock() {
    const [stocks, setStocks] = useState([]);
    const [selectedBlood, setSelectedBlood] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [newCount, setNewCount] = useState(0);

    async function populateStocksState() {
        try {
            const data = await fetchStocks();
            setStocks(data.Stock)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        populateStocksState();
    }, []);


    const handleEditClick = (blood) => {
        setSelectedBlood(blood);
        setShowModal(true);
    }

    const handleUpdateCount = async () => {
        try {
            const updatedStock = { ...selectedBlood, inStock: newCount };
            await updateStockCount(updatedStock);
            setShowModal(false);
            populateStocksState();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Container>
            <h1 className="mt-5">Blood stock</h1>
            <Table striped responsive bordered hover variant="light">
                <thead>
                    <tr>
                        <th>Blood Type</th>
                        <th>Number of Units</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {stocks.map((blood) => (
                        <tr key={blood.bloodGroup}>
                            <td>{blood.bloodGroup}</td>
                            <td>{blood.inStock}</td>
                            <td>
                                <Button variant="info" onClick={() => handleEditClick(blood)}>Edit</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Blood Count for {selectedBlood.bloodGroup}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="newCount">
                            <Form.Label>New Count</Form.Label>
                            <Form.Control
                                type="number"
                                value={newCount}
                                onChange={(e) => setNewCount(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
                    <Button variant="primary" onClick={handleUpdateCount}>Save Changes</Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
