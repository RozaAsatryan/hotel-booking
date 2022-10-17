import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import HotelCard from "../components/cards/HotelCard";

const Home = () => {
  return (
    <Container>
      <Row>
        {[...Array(8)].map((hotel, index) => {
          return (
            <Col key={index} md={3}>
              <Link
                to={`hotels/${index}`}
                className="text-decoration-none text-dark"
              >
                <HotelCard />
              </Link>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
