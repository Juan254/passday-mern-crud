import {
  BrowserRouter as Redirect,
  Router,
  Link,
  Route,
  Switch,
} from "react-router-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    document.getElementById("logout-part").style.display = "none";
    document.getElementById("login-part").style.display = "flex";

    this.props.logoutUser();
    window.location.href = "./login";
  };

  componentDidMount() {
    // console.log(this.props.auth.isAuthenticated);
    if (this.props.auth.isAuthenticated) {
      document.getElementById("logout-part").style.display = "flex";
      document.getElementById("login-part").style.display = "none";
      // console.log("hay token");
    } else {
      document.getElementById("logout-part").style.display = "none";
      document.getElementById("login-part").style.display = "flex";
      // console.log("no hay token");
    }
  }
  render() {
    const { user } = this.props.auth;
    return (
      // <b>Hey there,</b> {user.name.split(" ")[0]}
      <Container id="contenedor">
        <Nav className="justify-content-end">
          <Nav id="name-login">
            <div id="login-part">
              <Row>
                <Link
                  to={"/login"}
                  activeClassName="active"
                  className="m-1 button-login btn btn-block w-20"
                >
                  Iniciar Sesión{" "}
                </Link>
              </Row>
            </div>
            <div id="logout-part">
              <Row>
                <Col sm={6}>
                 
                    < b class="orange-welcome">Bienvenido, </b>
                
                  <Badge bg="light" text="dark">
                    {user.email}
                  </Badge>
                </Col>
                <Col sm={6}>
                  <Button
                    type="button"
                    onClick={this.onLogoutClick}
                    activeClassName="active"
                    className="m-1 button-login btn btn-block w-20"
                  >
                    Cerrar Sesión
                  </Button>
                </Col>
              </Row>
            </div>
          </Nav>
        </Nav>
      </Container>
    );
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Dashboard);
