// Carousels.jsx
import sliderimage1 from '../images/slider1.jpg'
import sliderimage2 from '../images/slider2.jpg'
import sliderimage3 from '../images/slider3.jpg'
import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const Carousels = () => {
  return (
    <Container>
        <Row>
            <Col lg={12}>
                <Carousel fade>
                <Carousel.Item>
                    <img src={sliderimage1}></img>
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={sliderimage2}></img>
                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img src={sliderimage3}></img>
                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
            </Col>
        </Row>
    </Container>
  );
};

export default Carousels;
