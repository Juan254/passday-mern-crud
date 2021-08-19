import React, { Component } from "react";
import axios from "axios";

import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "./Carousel.js";
import PassDayCard from "./PassdayCard.js";

export default class HomePassday extends Component {
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
  DataCard() {
    // this.componentDidMount();
    return this.state.pasadias.map((res, i) => {
      return <PassDayCard obj={res} key={i} />;
    });
  }
  render() {
    return (
      <Container className="mt-1">
        <Carousel></Carousel>
        <Container className="mt-5">
          <CardGroup>
          {this.DataCard()}
          </CardGroup>
        </Container>
      </Container>
    );
  }
}
