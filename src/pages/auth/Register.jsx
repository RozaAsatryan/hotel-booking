import { useState } from "react";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { register } from "../../actions/auth/auth";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const registerHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await register({ name, email, password });
      console.log("Login response =>", res);
      toast.success("You are registered!");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      // toast.error(err.response.data);
    }
    console.log(name, email, password);
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }} className="mt-2">
          <div className="h3">Create account!</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <Form onSubmit={registerHandler}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign Up
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

export default Register;
