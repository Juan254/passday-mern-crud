import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ModalTitle from "react-bootstrap/ModalTitle";
import Alert from "react-bootstrap/Alert";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
    this.props.history.push("/passday-list");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/passday-list"); // push user to dashboard when they login
    }
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
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
    window.location.reload(false);
  };
  render() {
    const { errors } = this.state;
    return (
      <Form  noValidate onSubmit={this.onSubmit}>
        <Row>
          <Col sm={3}></Col>
          <Col sm={6}>
            <Alert variant="danger">
              <Alert.Heading>Importante:</Alert.Heading>
              El ingreso a la aplicación sólo está permitido para
              administradores de la misma, en caso de no serlo, dirijase a la
              pantalla de{" "}
              <Link to={"/home"} className="alert-link">
                Inicio
              </Link>
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
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound,
                  })}
                  placeholder="mi.correo@mail.com"
                />
              </Col>
            </Form.Group>

            <Row id="fila-errores" className="my-3" style={{ display: "none" }}>
              <Alert variant="danger">
                <Alert.Heading>Errores encontrados:</Alert.Heading>
                <hr />
                <ul class="lista-errors">
                  <li>{errors.email}</li>
                  <li>{errors.emailnotfound}</li>
                </ul>
              </Alert>
            </Row>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="4" className="labelLogin">
                Contraseña
              </Form.Label>
              <Col sm="8">
                <Form.Control
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect,
                  })}
                  placeholder="Password"
                />
              </Col>
            </Form.Group>
            
            <Row id="fila-errores" className="my-3" style={{ display: "none" }}>
              <Alert variant="danger">
                <Alert.Heading>Errores encontrados:</Alert.Heading>
                <hr />
                <ul class="lista-errors">
                  <li>{errors.password}</li>
                  <li>{errors.passwordincorrect}</li>
                </ul>
              </Alert>
            </Row>
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
Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});
export default connect(mapStateToProps, { loginUser })(Login);