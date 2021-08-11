import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Link } from "react-router-dom";

export default class UserList extends Component {
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
            <tr>
              <td>Nombre 1</td>
              <td>correo1@mail.com</td>
            </tr>
            <tr>
              <td>Nombre 2</td>
              <td>corre2@mail.com</td>
            </tr>
          </tbody>
        </Table>
        <Link to={"/create-user"} className="m-3 button-accept btn btn-primary btn-block btn-md w-50">
              Crear Nueva Usuario
        </Link>
      </div>
    );
  }
}
