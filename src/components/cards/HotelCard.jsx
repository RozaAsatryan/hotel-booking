import React from "react";
import Card from "react-bootstrap/Card";
import { BiBed } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";
import { diffDays } from "../../actions/hotels";

const HotelCard = ({ hotel }) => {
  return (
    <Card className="mb-4">
      <Card.Img
        variant="top"
        src={`${import.meta.env.VITE_APP_API}/hotel/image/${hotel._id}`}
      />
      <Card.Body>
        <Card.Title>{hotel.title}</Card.Title>
        <Card.Text className="mb-2">
          <GoLocation />
          Naama Bay, Sharl El Sheikh, Egypt
        </Card.Text>
        <Card.Text className="mb-2">
          <BiCalendar />
          for {diffDays(hotel.from, hotel.to)}{" "}
          {diffDays(hotel.from, hotel.to) <= 1 ? " day" : " days"}
        </Card.Text>
        <Card.Text className="mb-2">
          <BiBed /> 2 bed
        </Card.Text>
        <Card.Text>
          <small>
            Available from {new Date(hotel.from).toLocaleDateString()}
          </small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HotelCard;
