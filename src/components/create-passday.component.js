import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import ModalTitle from "react-bootstrap/ModalTitle";

export default class CreatePassday extends Component {
  constructor(props) {
    super(props);
    // Setting up functions
    this.onChangePassdayName = this.onChangePassdayName.bind(this);
    this.onChangePassdayRegion = this.onChangePassdayRegion.bind(this);
    this.onChangePassdayCost = this.onChangePassdayCost.bind(this);
    this.onChangePassdayDesc = this.onChangePassdayDesc.bind(this);
    this.onChangePassdayImg = this.onChangePassdayImg.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    // Setting up state
    this.state = {
      name: "",
      region: "",
      cost: "",
      desc: "",
      img: null,
    };
  }
  onChangePassdayName(e) {
    this.setState({ name: e.target.value });
  }
  onChangePassdayRegion(e) {
    this.setState({ region: e.target.value });
  }
  onChangePassdayCost(e) {
    this.setState({ cost: e.target.value });
  }
  onChangePassdayDesc(e) {
    this.setState({ desc: e.target.value });
  }
  onChangePassdayImg(e) {
    this.setState({ img: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    console.log(`Student successfully created!`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Email: ${this.state.email}`);
    console.log(`Roll no: ${this.state.rollno}`);
    this.setState({
      name: "",
      region: "",
      cost: "",
      desc: "",
      img: null,
    });
  }
  render() {
    return (
      <Container>
        <Row>
          <Col sm={1}></Col>
          <Col sm={10}>
            <ModalTitle className="mb-3" style={{ fontSize: 30 }}>
              Crear Pasadía
            </ModalTitle>
            <Form onSubmit={this.onSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="Name">
                <Form.Label column sm={4} className="labelLogin">
                  Nombre de la pasadía
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    value={this.state.name}
                    onChange={this.onChangePassdayName}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="Region">
                <Form.Label column sm={4} className="labelLogin">
                  Región
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    value={this.state.region}
                    onChange={this.onChangePassdayRegion}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="Cost">
                <Form.Label column sm={4} className="labelLogin">
                  Costo
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="text"
                    value={this.state.cost}
                    onChange={this.onChangePassdayCost}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="img">
                <Form.Label column sm={4} className="labelLogin">
                  Imagen
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    type="file"
                    value={this.state.img}
                    onChange={this.onChangePassdayimg}
                    inputProps={{ accept: "image/*" }}
                  />
                </Col>
              </Form.Group>
              <Form.Group as={Row} className="mb-3" controlId="desc">
                <Form.Label column sm={4} className="labelLogin">
                  Descripción
                </Form.Label>
                <Col sm={8}>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={this.state.desc}
                    onChange={this.onChangePassdayDesc}
                  />
                </Col>
              </Form.Group>
              <Button
                size="lg"
                block="block"
                className="m-3 button-accept"
                type="submit"
              >
                Crear Pasadía
              </Button>
            </Form>
          </Col>
          <Col sm={1}></Col>
        </Row>
      </Container>
    );
  }
}
