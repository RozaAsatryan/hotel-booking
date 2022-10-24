import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Hotels from "../components/Hotels";

const Home = () => {
  return (
    <Container>
      <Row>
        <Hotels />
      </Row>
    </Container>
  );
};

export default Home;
