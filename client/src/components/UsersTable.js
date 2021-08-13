import React, { Component } from "react";

export default class UsersTable extends Component {

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.email}</td>
      </tr>
    );
  }
}
