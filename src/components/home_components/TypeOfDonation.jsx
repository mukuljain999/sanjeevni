import { Col, Container, Row,Table } from "react-bootstrap";
import fact from '../../images/donationFact.webp'
import Button from 'react-bootstrap/Button';

export function TypeOfDonation() {
    return(
        <Container className= "p-2">
            <Row className="mt-4 mb-2 justify-content-center">
                <Col lg={6}>
                    <img src={fact} width={550} height={290}></img>
                    <h5>After donating blood, the body works to replenish the blood loss. This stimulates the
                    production of new blood cells and in turn, helps in maintaining good health.</h5>
                    <Button variant="danger">Donate Now</Button>{' '}
                </Col>
                <Col lg={6}>
                    <Table striped bordered hover>
                    <thead >
                        <tr style={{textAlign: 'center' }}>
                            <th colSpan={3} style={{background: 'lightcoral'}}>Compatible Blood Type Donors</th>
                        </tr>
                    </thead>
                        <thead>
                            <tr>
                                <th>Blood Type</th>
                                <th>Donate Blood To</th>
                                <th>Receive Blood From</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>A+</td>
                                <td>A+ AB+</td>
                                <td>A+ A- O+ O-</td>
                            </tr>
                            <tr>
                                <td>O+</td>
                                <td>O+ A+ B+ AB+</td>
                                <td>O+ O-</td>
                            </tr>
                            <tr>
                                <td>B+</td>
                                <td>B+ AB+</td>
                                <td>B+ B- O+ O-</td>
                            </tr>
                            <tr>
                                <td>AB+</td>
                                <td>AB+</td>
                                <td>Everyone</td>
                            </tr>
                            <tr>
                                <td>A-</td>
                                <td>A+ A- AB+ AB-</td>
                                <td>A- O-</td>
                            </tr>
                            <tr>
                                <td>O-</td>
                                <td>Everyone</td>
                                <td>O-</td>
                            </tr>
                            <tr>
                                <td>B-</td>
                                <td>B+ B- AB+ AB-</td>
                                <td>B- O-</td>
                            </tr>
                            <tr>
                                <td>AB-</td>
                                <td>AB+ AB-</td>
                                <td>AB- A- B- O-</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    )
}