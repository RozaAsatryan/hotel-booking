import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BiHomeAlt } from "react-icons/bi";
import { useSelector } from "react-redux/es/exports";

const Connected = () => {
  /////
  const { auth } = useSelector((state) => ({ ...state }));

  ////

  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      const authTemp = { ...auth };
      auth.user.stripe_seller = {
        charges_enabled: true,
      };
      window.localStorage.setItem("auth", JSON.stringify(authTemp));
      dispatch({
        type: "LOGGED_IN_USER",
        payload: authTemp,
      });
      setLoading(false);
    }, 1500);
  };
  return (
    <Container fluid>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="text-center">
          <div className="p-5 pointer">
            <BiHomeAlt className="h1" />
            <h4>Setup payouts tom post hotek rooms</h4>
            <p className="load">
              <strong>HotelBooking.com</strong> partners with stripe to transfer
              earnings to your bank account
            </p>
            <button
              onClick={handleSubmit}
              className="btn btn-primary mb-3"
              disabled={loading}
            >
              {loading ? "Processing..." : "Setup payouts"}
            </button>
            <p className="text-muted">
              <small>
                You'll redirected to Stripe to complete the onboarding process.
              </small>
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Connected;
