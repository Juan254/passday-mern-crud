import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import jwt_decode from "jwt-decode";
import setAuthToken from "../utils/setAuthToken";
import { setCurrentUser, logoutUser } from "../actions/authActions";
import store from "../store";
import axios from "axios";

import Table from "react-bootstrap/Table";
import ModalTitle from "react-bootstrap/ModalTitle";
import PassdayTable from "./PassdayTable";

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
  constructor(props) {
    super(props);
    this.state = {
      pasadias: [],
    };
  }
  
  componentDidMount(){
    axios
      .get("/api/pasadias/list")
      .then((res) => {
        this.setState({
          pasadias: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
      console.log(this.state.pasadias);

  }
  DataTable() {
    // this.componentDidMount();
    return this.state.pasadias.map((res, i) => {
      return <PassdayTable obj={res} key={i} />;
    });
  }
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
              <th>Actividad</th>
              <th>Departamento</th>
              <th>Ciudad</th>
              <th>Costo</th>
              <th>Tipo</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
          {this.DataTable()}
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
