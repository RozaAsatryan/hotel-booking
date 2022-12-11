import Hotels from '../components/Hotels';
import { Button, Container, NavLink, Row } from 'react-bootstrap';
import HomeBanner from '../components/banners/HomeBanner';
import DividerLine from '../components/dividerLine/DividerLine';
import UsersReview from '../components/UsersReview';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <HomeBanner />
      <Container className="mt-5">
        <Row className="d-flex flex-column align-items-center mb-5 text-center">
          <h2 className="display-3">Our Rooms</h2>
          <p className="mw-40 mb-5">
            All our hotels are fabulous, they are destinations unto themselves.
            We have crossed the globe to bring you only the best.
          </p>
          <DividerLine />
        </Row>
        <Row className="mb-3">
          <Hotels limit={5} />
        </Row>
        <Row className="justify-content-center">
          <Button
            style={{
              border: '1px solid var(--main-color)',
              color: 'var(--main-color)',
              backgroundColor: 'transparent',
              width: '15vw',
            }}
            className="mb-5"
          >
            <Link to="/allhotels" className="nav-link  font-weight-bold">
              VIEW ALL HOTELS
            </Link>
          </Button>
        </Row>

        <Row className="d-flex flex-column align-items-center mb-5 text-center">
          <h2 className="display-5 mb-5"> WHAT OUR CLIENTS ARE SAYING</h2>
          <DividerLine />
        </Row>
        <Row className="mb-5">
          <UsersReview />
        </Row>
      </Container>
    </>
  );
};

export default Home;
