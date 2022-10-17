import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";

const Login = () => {
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div className="h3">Sign in or create an account</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
            <p className="mt-3">
              <small className="text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Et
                explicabo aspernatur totam dicta libero non aliquam earum
                pariatur aperiam rerum
              </small>
            </p>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
