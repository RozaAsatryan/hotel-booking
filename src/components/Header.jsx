import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// Bootstrap
import { Container, Col, Row } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';

const Header = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = (e) => {
    e.preventDefault();
    dispatch({
      type: 'LOGOUT',
      payload: null,
    });
    window.localStorage.clear();
    navigate('/');
  };

  return (
    <Navbar className="bg-maincolor" variant="dark">
      <Container className="w-100 d-flex">
        <Col md={4} className="d-flex align-items-center justify-content-end">
          <Nav>
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/allhotels" className="nav-link">
              All hotels
            </Link>
          </Nav>
        </Col>
        <Col
          md={4}
          className="d-flex align-items-center justify-content-center"
        >
          <Link to="/" className="navbar-brand">
            <h6 className="display-5 text-light"> B&B</h6>
          </Link>
        </Col>
        <Col md={4}>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-start"
          >
            <Nav>
              {auth && auth.token ? (
                <NavDropdown align="end" className="" title={auth.user.name}>
                  <NavDropdown.Item as={Link} to="/dashboard/bookings">
                    Dashboard
                  </NavDropdown.Item>
                  <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                  <Link to="/register" className="nav-link">
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Header;
