import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useState } from "react";
import { login } from "../../actions/auth/auth";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await login({ email, password });
      if (res.data) {
        // 1. Save user's info
        window.localStorage.setItem("auth", JSON.stringify(res.data));
        dispatch({
          type: "LOGGED_IN_USER",
          payload: res.data,
        });
        // 2. Navigate to the dashboard
        navigate("/dashboard/bookings");
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <div className="h3">Sign in or create an account</div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
          <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
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
