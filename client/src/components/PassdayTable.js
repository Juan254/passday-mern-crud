import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

export default class PassdayTable extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj.Actividad}</td>
        <td>{this.props.obj.Departamento}</td>
        <td>{this.props.obj.Ciudad}</td>
        <td>{this.props.obj.Costo}</td>
        <td>{this.props.obj.Tipo}</td>
        <td>
          <Link
            className="m-1 button-accept btn btn-primary btn-block btn-sm w-20"
            to={"/edit-passday/" + this.props.obj._id} >
            Editar
          </Link>
        </td>
      </tr>
    );
  }
}
