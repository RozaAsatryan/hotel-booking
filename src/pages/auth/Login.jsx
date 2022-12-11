import { login } from '../../actions/auth/auth';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

// Bootstrap
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';

// Formik
import { Formik, Form, useFormik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const validationSchema = Yup.object({
    email: Yup.string().email('Invalid email format').required('Required'),
    password: Yup.string().required('Required'),
  });
  const initialValues = {
    email: '',
    password: '',
  };
  const onSubmit = async (values) => {
    const response = await login(values);
    setTimeout(() => {
      navigate('/dashboard/bookings');
    }, 1000);
    if (response.data) {
      window.localStorage.setItem('auth', JSON.stringify(response.data));
      dispatch({
        type: 'LOGGED_IN_USER',
        payload: response.data,
      });
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <div
      style={{
        backgroundImage:
          'url(https://redpithemes.com/Documentation/assets/img/page_bg/page_bg_blur02.jpg)',
      }}
    >
      <Container>
        <Row>
          <Col
            md={{ span: 4, offset: 4 }}
            className="mt-5 mb-5 p-4 form-shadow h-100"
          >
            <div className="h3 text-align-center">Sign In</div>
            <p className="text-align-center">
              Not Registered yet? <Link to="/register">Sign Up</Link>
            </p>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <div className="d-flex flex-column mt-5 mb-5">
                  <label className="form-label">Email</label>
                  <Field name="email" className="form-input" type="email" />
                  <span className="text-danger">
                    <ErrorMessage name="email"></ErrorMessage>
                  </span>
                </div>

                <div className="d-flex flex-column mt-5 mb-5">
                  <label className="form-label">Password</label>
                  <Field
                    name="password"
                    className="form-input"
                    type="password"
                  />
                  <span className="text-danger">
                    <ErrorMessage name="password"></ErrorMessage>
                  </span>
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={loading}
                  className="w-100"
                  style={{ backgroundColor: 'var(--main-color)' }}
                >
                  {loading && (
                    <Spinner animation="border" className="spinner-custom" />
                  )}
                  Sign in
                </Button>
                <p className="mt-4 text-align-center">
                  Forget <Link>Password</Link>?
                </p>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
