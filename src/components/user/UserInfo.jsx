import { Container, Row, Col, Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { useSelector } from "react-redux";
import moment from "moment";

const UserInfo = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { user, token } = auth;

  return (
    <Container className="mb-4 mt-4">
      <Row>
        <Col md={4} className="mb-2">
          <Card body>
            <div className="d-flex gap-4">
              <Image
                src={`https://via.placeholder.com/70x70?text=${user.name[0]}`}
                rounded
              ></Image>
              <div>
                <h4>{user.name}</h4>
                <small>{user.email}</small> <br />
                <small>{`Joined ${moment(user.createdAt).fromNow()}`}</small>
              </div>
            </div>
          </Card>
        </Col>
        {auth?.user?.stripe_seller?.charges_enabled && (
          <>
            <Col md={4} className="mb-2">
              <Card body>Avaible</Card>
            </Col>
            <Col md={4}>
              <Card body>Payouts</Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default UserInfo;
