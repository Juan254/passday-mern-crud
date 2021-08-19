import {
  BrowserRouter as Component,
  Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";

import axios from "axios";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Table from "react-bootstrap/Table";
import FormText from "react-bootstrap/FormText";
export default class EditPassday extends Component {
  constructor(props) {
    super(props);

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
  componentDidMount() {
    axios
      .get(
        "/api/pasadias/edit/" +
          this.props.history.location.pathname.split("/passday-detail/")[1]
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
  render() {
    return (
      <Container className="my-1">
        <Row>
          <Col sm={6} className="display-block mb-3">
            <Image
              className="imagen-detail"
              src={this.state.Imagen}
            ></Image>
          </Col>
          <Col sm={6}>
          <Table bordered >
            <tbody>
              <tr>
                <td class="table-head">Tipo de Actividad</td>
                <td >{this.state.Actividad}</td>
              </tr>
              <tr>
                <td class="table-head">Costo</td>
                <td>{this.state.Costo}</td>
              </tr>
              <tr>
                <td class="table-head">Departamento</td>
                <td>{this.state.Departamento}</td>
              </tr>
              <tr>
                <td class="table-head">Ciudad</td>
                <td>{this.state.Ciudad}</td>
              </tr>
              
              <tr>
                <td class="table-head">Celular</td>
                <td>{this.state.Celular}</td>
              </tr>
              <tr>
                <td class="table-head">Correo</td>
                <td>{this.state.mail}</td>
              </tr>
            </tbody>
          </Table>
          </Col>
        </Row>
        <hr/>
        <FormText>
          <p class="text-detail">
            <p>{this.state.Descripción}</p>
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
