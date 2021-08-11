import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import CardGroup from "react-bootstrap/CardGroup";
import Carousel from "./Carousel.js";
import PassDayCard from "./PassdayCard.component.js";

export default class HomePassday extends Component {
  render() {
    return (
      <Container className="mt-1">
        <Carousel></Carousel>
        <Container className="mt-5">
          <CardGroup>
            <PassDayCard></PassDayCard>
            <PassDayCard></PassDayCard>
            <PassDayCard></PassDayCard>
            <PassDayCard></PassDayCard>
            <PassDayCard></PassDayCard>
            <PassDayCard></PassDayCard>
          </CardGroup>
        </Container>
      </Container>
    );
  }
}
