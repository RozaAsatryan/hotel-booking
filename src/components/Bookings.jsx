import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HotelCard from './cards/HotelCard';
import { userHotelBookings } from '../actions/hotels';
import { useSelector } from 'react-redux';

const Bookings = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { token } = auth;

  const [hotels, setHotels] = useState([]);

  const getBookedHotels = async () => {
    try {
      const res = await userHotelBookings(token);
      setHotels(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBookedHotels();
  }, []);

  return (
    <>
      <Container>
        <Row>
          {hotels && hotels.length ? (
            hotels.map((hotel) => {
              return (
                <Col key={hotel._id} md={3}>
                  <Link
                    to={`/hotels/${hotel._id}`}
                    className="text-decoration-none text-dark"
                  >
                    <HotelCard hotel={hotel} />
                  </Link>
                </Col>
              );
            })
          ) : (
            <img
              src="https://media.tenor.com/Ta_hcuLCfCAAAAAM/%E4%BD%95%E3%82%82%E3%81%AA%E3%81%84-%E3%83%8A%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0.gif"
              style={{ height: '50vh', objectFit: 'contain' }}
            />
          )}
        </Row>
      </Container>
    </>
  );
};

export default Bookings;
