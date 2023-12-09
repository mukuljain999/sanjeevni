import { Container, Row,Card,Col } from "react-bootstrap";
import React, { useState, useEffect } from 'react';


export function Counters() {

/**************************************************************/
const [donors, setDonors] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the counter by 1 on each interval
      setDonors(prevCounter => prevCounter + 1);
    }, 1); // Adjust the interval duration as needed
    
    // Stop the interval when the counter reaches 1000
    if (donors >= 15743) {
      clearInterval(interval);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [donors]); // Empty dependency array ensures useEffect runs only once

/***********************************************************************/

/******************************************/
const [donation, setDonation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the counter by 1 on each interval
      setDonation(prevCounter => prevCounter + 1);
    }, 1); // Adjust the interval duration as needed
    
    // Stop the interval when the counter reaches 1000
    if (donation >= 10592) {
      clearInterval(interval);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [donation]); // Empty dependency array ensures useEffect runs only once

/****************************************************************/

/***************************************************************/
const [camp, setCamp] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the counter by 1 on each interval
      setCamp(prevCounter => prevCounter + 1);
    }, 500); // Adjust the interval duration as needed
    
    // Stop the interval when the counter reaches 1000
    if (camp >= 94) {
      clearInterval(interval);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [camp]); // Empty dependency array ensures useEffect runs only once

/*********************************************************************/

/**************************************************************/
const [dignos, setDignos] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Increment the counter by 1 on each interval
      setDignos(prevCounter => prevCounter + 1);
    }, 1); // Adjust the interval duration as needed
    
    // Stop the interval when the counter reaches 1000
    if (dignos >= 21984) {
      clearInterval(interval);
    }

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, [dignos]); // Empty dependency array ensures useEffect runs only once

/***********************************************************/
/*************************************************************/

    return(
        <Container className= "p-2">
            <Row className="mt-4 mb-2 justify-content-center">
                <Col lg={6}>
                    <Card border="success" bg="success" style={{ width: '18rem', margin:"10px auto", marginRight:"40px" }}>
                        <Card.Header><b>Our Donor Community</b></Card.Header>
                        <Card.Body>
                        <Card.Title><h1>{donors}</h1></Card.Title>
                        <Card.Text>
                        Commitment to saving lives is truly appreciated
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="danger" bg="danger" style={{ width: '18rem',margin:"10px auto", marginRight:"40px" }}>
                        <Card.Header><b>Total Donations</b></Card.Header>
                        <Card.Body>
                        <Card.Title><h1>{donation}</h1></Card.Title>
                        <Card.Text>
                        Your generosity strengthens our community's well-being
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={6}>
                    <Card border="warning" bg="warning" style={{ width: '18rem' ,margin:"10px auto", marginLeft:"40px"}}>
                        <Card.Header><b>Our Bood Donation Camps</b></Card.Header>
                        <Card.Body>
                        <Card.Title><h1>{camp}</h1></Card.Title>
                        <Card.Text>
                        Successful blood donation camps empower health
                        </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card border="info" bg="info" style={{ width: '18rem',margin:"10px auto", marginLeft:"40px" }}>
                        <Card.Header><b>Our Dignostic</b> </Card.Header>
                        <Card.Body>
                        <Card.Title><h1>{dignos}</h1></Card.Title>
                        <Card.Text>
                        Kudos to our skilled lab experts for accurate blood sample diagnostics.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}