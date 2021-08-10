import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Componentes de la api
import PassdayHome from "./components/home-passday.component";
import CreatePassday from "./components/create-passday.component";
import EditPassday from "./components/edit-passday.component";
import PassdayList from "./components/list-passday.component";
import UserList from "./components/list-user.component";
import PassdayDetail from "./components/passday-detail.component";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar expand="lg" variant="light" className="color-nav">
          <Container>
            <Navbar.Brand>
              <Link to={"/home"} className="navi-link">
                Passdays
              </Link>
            </Navbar.Brand>
            <Nav className="justify-content-end">
              <Nav>
                <Link
                  to={"/login"}
                  activeClassName="active"
                  className="m-1 button-login btn btn-block w-20"
                >
                  Iniciar Sesión
                </Link>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
        <Nav className="justify-content-center color-sub-nav">
          <Link to={"/home"} className="nav-link navi-sub-link">
            Página principal
          </Link>
          {/* Menús desplegables */}
          {/* menú desplegable pasadías */}
          <NavDropdown title="Pasadías" >
            <Link to={"/passday-list"} className="nav-link drop-link">
              Lista de pasadias
            </Link>
            <Link to={"/create-passday"} className="nav-link drop-link">
              Crear Pasadia
            </Link>
          </NavDropdown>
          {/* menú desplegable usuarios */}
          <NavDropdown title="Usuarios" >
            <Link to={"/user-list"} className="nav-link drop-link">
              Lista de usuarios
            </Link>
            <Link to={"/create-user"} className="nav-link drop-link">
              Crear usuario
            </Link>
          </NavDropdown>
        </Nav>
        <Container className="mt-5">
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/home" component={PassdayHome} />
                  <Route exact path="/" component={PassdayHome} />
                  <Route path="/create-passday" component={CreatePassday} />
                  <Route path="/edit-passday" component={EditPassday} />
                  <Route path="/passday-list" component={PassdayList} />
                  <Route path="/user-list" component={UserList} />
                  <Route path="/passday-detail" component={PassdayDetail} />
                  <Route path="/login" component={Login} />
                  <Route path="/create-user" component={Register} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}
export default App;
