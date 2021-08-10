import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ModalTitle from "react-bootstrap/ModalTitle";
import Alert from "react-bootstrap/Alert";

export default class Login extends Component {
  render() {
    return (
      <Form>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Alert variant="danger">
              <Alert.Heading>Importante:</Alert.Heading>
              El ingreso a la aplicación sólo está permitido para
              administradores de la misma, en caso de no serlo, dirijase ala
              pantalla de <Link to={"/home"}  className="alert-link">Inicio</Link>
              <hr />
              <div className="d-flex justify-content-end">
                <Link className="btn btn-outline-danger" to={"/home"}>
                  ¡LLevame a la pantalla de inicio!
                </Link>
              </div>
            </Alert>
            <ModalTitle className="mb-3" style={{ fontSize: 30 }}>
              Iniciar Sesión
            </ModalTitle>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="4" className="labelLogin">
                Correo Electrónico
              </Form.Label>
              <Col sm="8">
                <Form.Control type="email" placeholder="mi.correo@mail.com" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="4" className="labelLogin">
                Contraseña
              </Form.Label>
              <Col sm="8">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
            <Button
              className="m-3 button-accept btn btn-primary btn-block btn-lg w-20"
              type="submit"
            >
              Iniciar Sesión
            </Button>
          </Col>
          <Col sm={3}></Col>
        </Row>
      </Form>
    );
  }
}
