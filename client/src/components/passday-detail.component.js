import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import ModalTitle from "react-bootstrap/ModalTitle";
import FormText from "react-bootstrap/FormText";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";
export default class EditPassday extends Component {
  render() {
    return (
      <Container className="my-1">
        <Row>
          <Col sm={5}>
            <Image
              className="d-block w-100 border border-dark"
              src={Logo}
            ></Image>
          </Col>
          <Col>
            <Row>
              <ModalTitle className="mb-5" style={{ fontSize: 40 }}>
                Título de la pasadía
              </ModalTitle>
            </Row>
            <Row className="mb-5">
              <Col sm={5}>
                <h2>Región:</h2>
              </Col>
              <Col sm={2}></Col>
              <Col sm={5} style={{ fontSize: 30 }}>
                <p>Mi Región</p>
              </Col>
            </Row>
            <Row className="mb-5">
              <Col sm={5}>
                <h2>Costo:</h2>
              </Col>
              <Col sm={2}></Col>
              <Col sm={5} style={{ fontSize: 30 }}>
                <p>$XXXXX</p>
              </Col>
            </Row>
          </Col>
        </Row>
        <FormText>
          <p class="text-detail">
            Lorem ipsum dolor sit amet consectetur adipiscing elit facilisis
            velit sapien, lacinia vivamus odio laoreet phasellus ullamcorper
            dictum donec. Praesent ridiculus primis varius blandit fringilla
            vehicula, vel taciti scelerisque commodo sed euismod ultricies,
            metus suscipit etiam et rutrum. Velit sociosqu dui habitant dis
            vulputate cum suscipit tortor, diam duis donec litora et mattis nibh
            luctus sagittis, phasellus himenaeos porttitor lectus neque pulvinar
            eget. Class facilisis velit turpis pretium quam magnis, urna laoreet
            dictumst platea dis, potenti a mattis volutpat scelerisque. Fusce
            lectus nam semper fames lobortis pellentesque orci sociis vivamus,
            odio laoreet nisi etiam elementum gravida dapibus primis. Fermentum
            morbi maecenas varius accumsan ullamcorper dis natoque hendrerit
            molestie porttitor nisl, vivamus consequat tellus duis aenean
            blandit senectus quisque habitant rutrum.
          </p>
        </FormText>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <Link
              className="m-3 button-accept btn btn-primary btn-block btn-lg w-100"
              to={"/home"}
            >
              Volver
            </Link>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Container>
    );
  }
}
