import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { DatePicker } from "antd";
import { Button } from "bootstrap";

const { RangePicker } = DatePicker;

const AddHotels = () => {
  return (
    <>
      <Container fluid className="bg-secondary p-5 text-center">
        <h2>Add Hotel</h2>
      </Container>
      <Container className="mt-4">
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Content</Form.Label>
                <Form.Control type="text" as="textarea" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Location</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Number of beds</Form.Label>
                <Form.Select className="mb-3">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </Form.Select>
              </Form.Group>

              <RangePicker className="form-control mb-3"></RangePicker>

              <Button variant="primary" type="priamry">
                Save
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AddHotels;
