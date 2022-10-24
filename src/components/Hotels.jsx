import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { allHotels } from "../actions/hotels";
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import HotelCard from "./cards/HotelCard";

const Hotels = () => {
  const [hotels, setHotels] = useState([]);

  const getAllHotels = async () => {
    try {
      const res = await allHotels();
      console.log(res);
      if (res.data) {
        setHotels(res.data);
      }
    } catch (err) {
      toast.error(err.response.data);
    }
  };

  useEffect(() => {
    getAllHotels();
  }, []);

  return (
    <>
      {hotels &&
        hotels.length &&
        hotels.map((hotel, index) => {
          return (
            <Col key={hotel._id} md={3}>
              <Link
                to={`hotels/${hotel._id}`}
                className="text-decoration-none text-dark"
              >
                <HotelCard hotel={hotel} />
              </Link>
            </Col>
          );
        })}
    </>
  );
};

export default Hotels;
