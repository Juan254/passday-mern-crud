import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

class Dashboard extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    document.getElementById("logout-part").style.display = "none";
    document.getElementById("login-part").style.display = "block";
    
    this.props.logoutUser();
  };
  
  componentDidMount() {
    console.log(this.props.auth.isAuthenticated);
    if( this.props.auth.isAuthenticated){
      document.getElementById("logout-part").style.display = "block";
      document.getElementById("login-part").style.display = "none";
      console.log("hay token");
    } else{
      document.getElementById("logout-part").style.display = "none";
      document.getElementById("login-part").style.display = "block";
      console.log("no hay token");
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
              <Link
                to={"/login"}
                activeClassName="active"
                className="m-1 button-login btn btn-block w-20"
              >
                Iniciar Sesión{" "}
              </Link>
            </div>
            <div id="logout-part">
              <b>Bienvenido, </b> {user.email}
              <Button
                type="button"
                onClick={this.onLogoutClick}
                activeClassName="active"
                className="m-1 button-login btn btn-block w-20"
              >
                Cerrar Sesión
              </Button>
            </div>
          </Nav>
        {/* {this.componentDidMount()} */}
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
