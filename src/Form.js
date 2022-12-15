import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Form() {
  return (
    <Container>
      <Row>
        <Col>
          <form autocomplete="off">
            <input
              className="search_inp"
              type="text"
              placeholder="Search Country"
              id="search-box"
              autofocus="on"
            />
            <input type="submit" value="Search" className="submitBut" />
          </form>
        </Col>
      </Row>
    </Container>
  );
}
