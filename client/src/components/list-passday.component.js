import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


import Table from "react-bootstrap/Table";
import ModalTitle from "react-bootstrap/ModalTitle";

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

export default class PassdayList extends Component {
  componentWillMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (!localStorage.jwtToken) {
      window.location.href = "./login";
    }
  }
  render() {
    return (
      <div className="table-wrapper">
        <ModalTitle className="mb-4" style={{ fontSize: 30 }}>
          Lista de pasadías
        </ModalTitle>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Titulo</th>
              <th>Región</th>
              <th>Costo</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Pasadía 1</td>
              <td>Región 1</td>
              <td>$XXXXX</td>
              <td>
                <Link
                  className="m-1 button-accept btn btn-primary btn-block btn-sm w-20"
                  // to={"/edit-student/" + this.props.obj._id}
                  to={"/edit-passday"}
                >
                  Editar
                </Link>
              </td>
            </tr>
            <tr>
              <td>Pasadía 2</td>
              <td>Región 2</td>
              <td>$YYYYYY</td>
              <td>
                <Link
                  className="m-1 button-accept btn btn-primary btn-block btn-sm w-20"
                  // to={"/edit-student/" + this.props.obj._id}
                  to={"/edit-passday"}
                >
                  Editar
                </Link>
              </td>
            </tr>
          </tbody>
        </Table>
        <Link
          to={"/create-passday"}
          className="m-3 button-accept btn btn-primary btn-block btn-md w-50"
        >
          Crear Nueva Pasadia
        </Link>
      </div>
    );
  }
}
