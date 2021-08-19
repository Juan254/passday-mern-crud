 import React, { Component } from "react";
 import Carousel from "react-bootstrap/Carousel";
 import Image from "react-bootstrap/Image";
 import Col from "react-bootstrap/Col";
 import Row from "react-bootstrap/Row";
 import baileImg from "../imgCarousel/baile.jpg";
 import comidaImg from "../imgCarousel/comida.jpg";
 import paisajeImg from "../imgCarousel/paisaje.jpg";

export default class StudentTableRow extends Component {
  
  render() {
    return (
        <Row  className="align-items-center">
        <Col sm={1}></Col>
          <Col sm={10}>
            <Carousel>
              <Carousel.Item interval={2000}>
                <Image
                  className="d-block w-100 carousel"
                  src={baileImg}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>Disfruta de los paisajes de Colombia</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image
                  className="d-block w-100 carousel"
                  src={comidaImg}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Disfruta de la gastronomía colombiana</h3>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <Image
                  className="d-block w-100 carousel"
                  src={paisajeImg}
                  alt="third slide"
                />
                <Carousel.Caption>
                  <h3>Disfruta de los festivales Colombianos</h3>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
        </Row>
    );
  }
}
