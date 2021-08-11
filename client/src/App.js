import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import NavDropdown from "react-bootstrap/NavDropdown";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Componentes de la api
import PassdayHome from "./components/home-passday.component";
import CreatePassday from "./components/create-passday.component";
import EditPassday from "./components/edit-passday.component";
import PassdayList from "./components/list-passday.component";
import UserList from "./components/list-user.component";
import PassdayDetail from "./components/passday-detail.component";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

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
class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar expand="lg" variant="light" className="color-nav">
              <Container>
                <Navbar.Brand>
                  <Link to={"/home"} className="navi-link">
                    Passdays
                  </Link>
                </Navbar.Brand>
                <Dashboard></Dashboard>
              </Container>
            </Navbar>
            <Nav className="justify-content-center color-sub-nav">
              <Link to={"/home"} className="nav-link navi-sub-link">
                Página principal
              </Link>
              {/* Menús desplegables */}
              {/* menú desplegable pasadías */}
              <NavDropdown title="Pasadías">
                <Link to={"/passday-list"} className="nav-link drop-link">
                  Lista de pasadias
                </Link>
                <Link to={"/create-passday"} className="nav-link drop-link">
                  Crear Pasadia
                </Link>
              </NavDropdown>
              {/* menú desplegable usuarios */}
              <NavDropdown title="Usuarios">
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
      </Provider>
    );
  }
}
export default App;

