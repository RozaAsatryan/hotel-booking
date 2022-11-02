import React from "react";
import { useEffect, useState } from "react";
import { sellerHotels } from "../../actions/hotels";
import { useSelector } from "react-redux/es/exports";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Connected = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { user, token } = auth;
  const [hotels, setHotels] = useState([]);

  const getSellerHotels = async () => {
    try {
      const res = await sellerHotels(token);
      if (res.data) {
        setHotels(res.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSellerHotels();
  }, []);
  return (
    <Container>
      <Row className="mt-4">
        <Col
          md={12}
          className="d-flex justify-content-between align-items-center"
        >
          <h3>Your hotels</h3>
          <Link to="/hotels/new" className="btn btn-primary">
            + Add Hotels
          </Link>
        </Col>
      </Row>
      <div className="vh-50 d-flex justify-content-center align-items-center">
        <h4 className="text-muted">No hotels found!</h4>
      </div>
    </Container>
  );
};

export default Connected;
