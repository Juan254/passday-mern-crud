import React, { Component } from "react";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Logo from "../logo.svg";

export default class StudentTableRow extends Component {
  render() {
    return (
      <Row className="align-items-center my-3">
        <Col sm={1}></Col>
        <Col sm={10}>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={Logo} />
            <Card.Body>
              <Card.Title><h3>Mi Pasadía</h3> </Card.Title>
              <Card.Text className="mt-4">
                <Row >
                  <Col sm={5}>
                    <h4>Región:</h4>
                  </Col>
                  <Col sm={2}></Col>
                  <Col sm={5} >
                    <p>Mi Región</p>
                  </Col>
                </Row>
                <Row  >
                  <Col sm={5} >
                    <h4>Costo:</h4>
                  </Col>
                  <Col sm={2}></Col>
                  <Col sm={5} >
                    <p>$XXXXX</p>
                  </Col>
                </Row>
              </Card.Text>
              <Link
                className="m-3 button-accept btn btn-primary btn-block btn-lg w-20"
                to={"/passday-detail"}
              >
                Ver Más detalles
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={1}></Col>
      </Row>
    );
  }
}
