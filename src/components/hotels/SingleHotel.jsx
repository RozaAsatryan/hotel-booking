import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Col, Row, Container } from "react-bootstrap";
import { getHotelById } from "../../actions/hotels";
import { toast } from "react-toastify";
import { BiBed } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";
import { diffDays } from "../../actions/hotels";

const SingleHotel = () => {
  const [hotel, setHotel] = useState({});
  const params = useParams();

  useEffect(() => {
    getSingleHotel();
  }, []);

  const getSingleHotel = async () => {
    try {
      const res = await getHotelById(params.id);
      if (res.data) {
        setHotel(res.data);
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  return (
    <>
      {Object.keys(hotel).length && (
        <Container className="mt-4">
          <Row>
            <Col md={6}>
              <img
                className="w-100 position-sticky top-30"
                src={`${import.meta.env.VITE_APP_API}/hotel/image/${params.id}`}
                alt={hotel.title}
              />
            </Col>

            <Col md={6}>
              <h2>{hotel.title}</h2>
              <p>{hotel.content}</p>
              <p>
                <GoLocation />
                {hotel.location}
              </p>
              <p>
                <BiCalendar />
                for {diffDays(hotel.from, hotel.to)}{" "}
                {diffDays(hotel.from, hotel.to) <= 1 ? " day" : " days"}
              </p>
              <p>
                <BiBed /> {hotel.bed}
              </p>
              <p>Available from {new Date(hotel.from).toLocaleDateString()}</p>
             
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default SingleHotel;
