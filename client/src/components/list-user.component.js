import React, { Component } from "react";

import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import store from "../store";
import axios from "axios";

import Table from "react-bootstrap/Table";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Link } from "react-router-dom";
import UsersTable from "./UsersTable";


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
export default class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuarios: [],
    };
  }
  componentWillMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (!localStorage.jwtToken) {
      window.location.href = "./login";
      
    } 
  }
  
  componentDidMount(){
    axios
      .get("/api/users/list")
      .then((res) => {
        this.setState({
          usuarios: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(this.state.usuarios);

  }
  DataTable() {
    // this.componentDidMount();
    return this.state.usuarios.map((res, i) => {
      return <UsersTable obj={res} key={i} />;
    });
  }
  render() {
    return (
      <div className="table-wrapper">
        <ModalTitle className="mb-4" style={{ fontSize: 30 }}>
              Lista de Usuarios
            </ModalTitle>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
            </tr>
          </thead>
          <tbody>
          {this.DataTable()}
          </tbody>
        </Table>
        <Link to={"/create-user"} className="m-3 button-accept btn btn-primary btn-block btn-md w-50">
              Crear Nueva Usuario
        </Link>
      </div>
    );
  }
}
