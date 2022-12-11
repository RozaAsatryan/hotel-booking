import { useState } from 'react';
import { Container, Row, Col, Button, Spinner } from 'react-bootstrap';
import { register } from '../../actions/auth/auth';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

// Formik
import { Formik, Form, useFormik, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('Name is Required.')
      .min(2, 'Name is Too Short.'),
    email: Yup.string().email().required('Email is Required.'),
    password: Yup.string()
      .required('No password provided.')
      .min(6, 'Password is too short - should be 6 chars minimum.')
      .matches(/(?=.*[0-9])/, 'Password must contain a number.'),
  });
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
  const onSubmit = async (values) => {
    const response = await register(values);
    toast.success('successfully registered');
    setTimeout(() => {
      navigate('/login');
    }, 1000);
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
            className="mt-4 mb-5 p-4 form-shadow"
          >
            <div className="h3 text-align-center">Create account</div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <div className="d-flex flex-column mt-5 mb-5">
                  <label className="form-label">Name</label>
                  <Field name="name" className="form-input" type="text" />
                  <span className="text-danger text-align-end">
                    <ErrorMessage name="name" />
                  </span>
                </div>
                <div className="d-flex flex-column mt-5 mb-5">
                  <label className="form-label">Email</label>
                  <Field name="email" className="form-input" type="email" />
                  <span className="text-danger text-align-end">
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <div className="d-flex flex-column mt-5 mb-5">
                  <label className="form-label">Password</label>
                  <Field
                    className="form-input"
                    type="password"
                    name="password"
                  />
                  <span className="text-danger text-align-end">
                    <ErrorMessage name="password" />
                  </span>
                </div>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={loading}
                  className="w-100 mt-5"
                  style={{ backgroundColor: 'var(--main-color)' }}
                >
                  {loading && (
                    <Spinner animation="border" className="spinner-custom" />
                  )}
                  Sign up
                </Button>
                <p className="text-muted text-align-center mt-4">
                  After creating an account, you will be able to book a room,
                  see all reservations, as well as if you are the owner, you can
                  add rooms for reservation.
                </p>
              </Form>
            </Formik>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
