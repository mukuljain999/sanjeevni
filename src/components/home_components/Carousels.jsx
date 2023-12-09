// Carousels.jsx
import sliderimage1 from '../../images/sliderA.jpg'
import sliderimage2 from '../../images/sliderB.webp'
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
  return (
    <Container style={{ width: '100%', overflow: 'hidden' }}>
        <Row height={500}>
            <Col lg={12}>
                <Carousel fade style={{ height: '300px' }}>
                <Carousel.Item>
                    <img src={sliderimage1} className="d-block w-100"></img>
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={sliderimage2} className="d-block w-100"></img>
                    <Carousel.Caption>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    </Container>
  );
};

export default Carousels;
