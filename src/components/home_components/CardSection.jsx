import donation from '../../images/blooddonation.gif'
import lab from '../../images/technology.gif'
import bloodinfo from '../../images/blooddonate.gif'
import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export function CardSection(){
        
    return(
        <Container className= "p-2">

            <Row className="mt-4 mb-2">
                <Col lg={5}>
                <Card>
                        <Card.Body>
                            <Card.Title>Bool Donation Camp</Card.Title>
                            <img src={donation} width={420} height={300}></img>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={7}>
                <Card>
                        <Card.Body>
                            <Card.Title>Sanjeevani Lifesavers</Card.Title>
                            <Card.Text>
                            Sanjeevani Blood Bank is organizing a life-saving blood donation camp, 
                            a vital initiative to meet the growing demand for blood in our community. 
                            Join us in this noble cause to contribute to the well-being of others. 
                            Your voluntary participation can make a significant impact on the lives of 
                            those in need. The camp will provide a convenient and safe environment for 
                            donors, ensuring adherence to health protocols. Your support at the blood 
                            donation camp not only helps save lives but also strengthens the spirit of 
                            compassion and community service. Let's unite for a healthier and more compassionate 
                            society at Sanjeevani's blood donation camp.
                            </Card.Text>
                            
                            <Button variant="info">Read More</Button>{'     '}
                            <Button variant="success">Organise Camp</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Row className="mt-4 mb-2">
                <Col lg={5}>
                <Card>
                        <Card.Body>
                            <Card.Title>Know Your Blood</Card.Title>
                            <img src={bloodinfo} width={420} height={300}></img>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={7}> 
                <Card>
                        <Card.Body>
                            <Card.Title>Vital Insights: Understanding Blood and Types</Card.Title>
                            <Card.Text>
                            Blood is a complex and vital fluid in the human body, comprising red blood cells, 
                            white blood cells, platelets, and plasma. It plays a crucial role in transporting 
                            oxygen, nutrients, and hormones while removing waste products. The ABO blood type 
                            system classifies blood into four major groups: A, B, AB, and O, based on the presence
                             or absence of certain antigens. Additionally, each blood type can be Rh-positive or 
                             Rh-negative. Understanding blood types is crucial for blood transfusions and organ 
                             transplants, preventing incompatible reactions. Donors with matching blood types ensure 
                             safe and effective transfusions, highlighting the significance of accurate blood typing 
                             in medical care and emergency situations.
                            </Card.Text>
                            <Button variant="info">Read More</Button>{'     '}
                            <Button variant="success">Explore...</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>


            <Row className="mt-4 mb-2">
                <Col lg={5}>
                <Card>
                        <Card.Body>
                            <Card.Title>Our Experties</Card.Title>
                            <img src={lab} width={420} height={300}></img>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={7}>
                <Card>
                        <Card.Body>
                            <Card.Title>Pioneering Excellence in Blood Services</Card.Title>
                            <Card.Text>
                            Sanjeevani Blood Bank stands as a beacon of expertise in the field of blood donation 
                            and transfusion services. With a commitment to ensuring a safe and adequate blood supply,
                             Sanjeevani employs state-of-the-art technologies for efficient blood collection, testing,
                              processing, and storage. The blood bank is staffed with highly trained professionals 
                              who adhere to stringent quality standards, prioritizing the health and well-being of 
                              both donors and recipients. Sanjeevani is renowned for organizing impactful community 
                              outreach programs, raising awareness about the importance of blood donation. Through 
                              continuous innovation and dedication to excellence, Sanjeevani Blood Bank has become 
                              a trusted institution, playing a pivotal role in meeting the region's blood requirements 
                              while maintaining the highest standards of safety, reliability, and compassionate 
                              service.
                            </Card.Text>
                            
                            <Button variant="info">Read More</Button>{'     '}
                            <Button variant="success">Know Our Reasearches</Button>{' '}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

        </Container>
    )
}
export default CardSection;