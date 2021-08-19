import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
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
          <Card border="primary" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.props.obj.Imagen} thumbnail />
            <Card.Body>
              <Card.Title>
                <p>{this.props.obj.Actividad}</p>{" "}
              </Card.Title>
              <hr/>
              <Card.Text className="mt-4">
                <Row>
                  <p>
                    <b>Departamento:</b> {this.props.obj.Departamento}
                  </p>
                </Row>
                <Row>
                  <p>
                    <b>Ciudad:</b> {this.props.obj.Ciudad}
                  </p>
                </Row>
              </Card.Text>
              <Link
                className="m-1 button-accept btn btn-primary btn-block btn-lg w-20"
                to={"/passday-detail/" + this.props.obj._id}
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
