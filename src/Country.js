import React from "react";
import Extradescription from "./Extradescription";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./App.css";
import Temperature from "./Temperature";

export default function Country() {
  return (
    <Container>
      <Row>
        <Col className="countryName">
          <h1 id="lagosHaiD">Lagos</h1>
        </Col>
        <Col className="Col" xs={6}></Col>
        <Col className="Col"></Col>
      </Row>
      <Row>
        <Col>
          <Temperature />
          <Extradescription />
          <button className="onlyButt mb-4">Location</button>
        </Col>
      </Row>
    </Container>
  );
}
