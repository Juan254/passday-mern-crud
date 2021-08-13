import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ModalTitle from "react-bootstrap/ModalTitle";
import InputGroup from "react-bootstrap/InputGroup";
import axios from "axios";

import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import store from "../store";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

export default class EditPassday extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    // State
    this.state = {
      Departamento: "",
      Costo: "",
      Ciudad: "",
      Actividad: "",
      Imagen: "",
      Tipo: "",
      Descripción: "",
      URL: "",
      mail: "",
      Celular: "",
      NIT: "",
      RNT: "",
    };
  }
  componentWillMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (!localStorage.jwtToken) {
      window.location.href = "./login";
    }
  }
  componentDidMount() {
    axios
      .get(
        "/api/pasadias/edit/" +
          this.props.history.location.pathname.split("/edit-passday/")[1]
      )
      .then((res) => {
        this.setState({
          Departamento: res.data.Departamento,
          Costo: res.data.Costo,
          Ciudad: res.data.Ciudad,
          Actividad: res.data.Actividad,
          Imagen: res.data.Imagen,
          Tipo: res.data.Tipo,
          Descripción: res.data.Descripción,
          URL: res.data.URL,
          mail: res.data.mail,
          Celular: res.data.Celular,
          NIT: res.data.NIT,
          RNT: res.data.RNT,
        });
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log()
  }
  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit(e) {
    e.preventDefault();
    axios
      .put(
        "/api/pasadias/update/" +
          this.props.history.location.pathname.split("/edit-passday/")[1],
        this.state
      )
      .then((res) => this.props.history.push("/passday-list")) // re-direct to login on successful register
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <ModalTitle className="mb-3" style={{ fontSize: 30 }}>
              Editar Pasadía
            </ModalTitle>
            <Form onSubmit={this.onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="Departamento">
                <InputGroup hasValidation>
                  <Form.Label column sm={4} className="labelLogin">
                    Departamento
                  </Form.Label>
                  <Form.Control
                    column
                    sm={8}
                    value={this.state.Departamento}
                    type="text"
                    required
                    id="Departamento"
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese un departamento
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="Ciudad">
                <InputGroup hasValidation>
                  <Form.Label column sm={4} className="labelLogin">
                    Ciudad
                  </Form.Label>
                  <Form.Control
                    column
                    sm={8}
                    type="text"
                    required
                    value={this.state.Ciudad}
                    id="Ciudad"
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese una Ciudad
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="Actividad">
                <InputGroup hasValidation>
                  <Form.Label column sm={4} className="labelLogin">
                    Actividad
                  </Form.Label>
                  <Form.Control
                    column
                    sm={8}
                    type="text"
                    value={this.state.Actividad}
                    required
                    id="Actividad"
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese La actividad de la pasadía
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="Tipo">
                <InputGroup hasValidation>
                  <Form.Label column sm={4} className="labelLogin">
                    Tipo
                  </Form.Label>
                  <Form.Control
                    column
                    sm={8}
                    type="text"
                    value={this.state.Tipo}
                    required
                    id="Tipo"
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese el tipo de la pasadia
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="Celular">
                <InputGroup hasValidation>
                  <Form.Label column sm={4} className="labelLogin">
                    Celular
                  </Form.Label>
                  <Form.Control
                    column
                    sm={8}
                    type="number"
                    value={this.state.Celular}
                    required
                    id="Celular"
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese el número de celular
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="mail">
                <InputGroup hasValidation>
                  <Form.Label column sm={4} className="labelLogin">
                    E-mail
                  </Form.Label>
                  <Form.Control
                    column
                    sm={8}
                    type="email"
                    value={this.state.mail}
                    required
                    id="mail"
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese el correo electrónico
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="Imagen">
                <InputGroup hasValidation>
                  <Form.Label column sm={4} className="labelLogin">
                    URL Imagen
                  </Form.Label>
                  <Form.Control
                    column
                    sm={8}
                    type="URL"
                    value={this.state.Imagen}
                    required
                    id="Imagen"
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese la URL de la imagen
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="Costo">
                <InputGroup hasValidation>
                  <Form.Label column sm={4} className="labelLogin">
                    Costo
                  </Form.Label>
                  <Form.Control
                    column
                    sm={8}
                    type="number"
                    required
                    value={this.state.Costo}
                    id="Costo"
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese el costo de la pasadia
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="Descripción">
                <InputGroup hasValidation>
                  <Form.Label column sm={4} className="labelLogin">
                    Descripción
                  </Form.Label>
                  <Form.Control
                    column
                    sm={8}
                    as="textarea"
                    value={this.state.Descripción}
                    rows={5}
                    type="text"
                    required
                    id="Descripción"
                    onChange={this.onChange}
                  />
                  <Form.Control.Feedback type="invalid">
                    Por favor, ingrese La descripción
                  </Form.Control.Feedback>
                </InputGroup>
              </Form.Group>
              <Button
                size="lg"
                block="block"
                className="m-3 button-accept"
                type="submit"
              >
                Editar Pasadía
              </Button>
            </Form>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    );
  }
}
