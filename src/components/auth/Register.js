import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ModalTitle from "react-bootstrap/ModalTitle";

export default class Register extends Component {
  render() {
    return (
        <Form>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <ModalTitle className="mb-3" style={{ fontSize: 30 }}>
              Crear Nuevo Usuario
            </ModalTitle>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="4" className="labelLogin">
                Nombre
              </Form.Label>
              <Col sm="8">
                <Form.Control type="text" placeholder="Nombre del usuario" />
              </Col>
            </Form.Group>
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
                <Form.Control type="password" placeholder="*********" />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="4" className="labelLogin">
                Repetir Contraseña
              </Form.Label>
              <Col sm="8">
                <Form.Control type="password" placeholder="*********" />
              </Col>
            </Form.Group>
            <Button
              className="m-3 button-accept btn btn-primary btn-block btn-lg w-20"
              type="submit"
            >
              Crear Usuario
            </Button>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Form>
    );
  }
}
