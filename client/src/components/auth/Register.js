import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Alert from "react-bootstrap/Alert";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ModalTitle from "react-bootstrap/ModalTitle";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {},
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };
    this.props.registerUser(newUser, this.props.history);
    document.getElementById("fila-errores").style.display = "block";
    // console.log(this.props.history);
    // console.log(newUser);
  };
  render() {
    const { errors } = this.state;
    return (
      <Form noValidate onSubmit={this.onSubmit}>
        <Row>
          <Col sm={2}></Col>
          <Col sm={8}>
            <ModalTitle className="mb-3" style={{ fontSize: 30 }}>
              Crear Nuevo Usuario
            </ModalTitle>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4" className="labelLogin">
                Nombre
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="text"
                  id="name"
                  defaultValue={this.state.name}
                  error={errors.name}
                  onChange={this.onChange}
                  placeholder="Nombre del usuario"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4" className="labelLogin">
                Correo Electrónico
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="email"
                  id="email"
                  defaultValue={this.state.email}
                  error={errors.email}
                  onChange={this.onChange}
                  placeholder="mi.correo@mail.com"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="4" className="labelLogin">
                Contraseña
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  type="password"
                  id="password"
                  defaultValue={this.state.password}
                  onChange={this.onChange}
                  error={errors.password}
                  placeholder="*********"
                />
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
                <Form.Control
                  type="password"
                  id="password2"
                  defaultValue={this.state.password2}
                  onChange={this.onChange}
                  error={errors.password2}
                  className={classnames("", {
                    invalid: errors.password2,
                  })}
                  placeholder="*********"
                />
              </Col>
            </Form.Group>
            <Button
              className="m-3 button-accept btn btn-primary btn-block btn-lg w-20"
              type="submit"
            >
              Crear Usuario
            </Button>
            <Row id="fila-errores" className="my-3" style={{ display: "none" }}>
              <Alert variant="danger">
                <Alert.Heading>Errores encontrados:</Alert.Heading>
                <hr />
                <ul class="lista-errors">
                  <li>{errors.name}</li>
                  <li>{errors.email}</li>
                  <li>{errors.password}</li>
                  <li>{errors.password2}</li>
                </ul>
              </Alert>
            </Row>
          </Col>
          <Col sm={2}></Col>
        </Row>
      </Form>
    );
  }
}
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { registerUser })(withRouter(Register));
