import React from "react";
import Card from "react-bootstrap/Card";
import { BiBed } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BiCalendar } from "react-icons/bi";

const HotelCard = () => {
  return (
    <Card className="mb-4">
      <Card.Img variant="top" src="https://via.placeholder.com/300" />
      <Card.Body>
        <Card.Title>Albatros Palace Sharm</Card.Title>
        <Card.Text className="mb-2">
          <GoLocation />
          Naama Bay, Sharl El Sheikh, Egypt
        </Card.Text>
        <Card.Text className="mb-2">
          <BiCalendar />
          for 7 days
        </Card.Text>
        <Card.Text className="mb-2">
          <BiBed /> 2 bed
        </Card.Text>
        <Card.Text>
          <small>Available from 10/19/2022</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default HotelCard;
