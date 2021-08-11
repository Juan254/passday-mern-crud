import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import ModalTitle from "react-bootstrap/ModalTitle";
import { Link } from "react-router-dom";

export default class PassdayList extends Component {
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
        <Link to={"/create-passday"} className="m-3 button-accept btn btn-primary btn-block btn-md w-50">
              Crear Nueva Pasadia
        </Link>
      </div>
    );
  }
}
