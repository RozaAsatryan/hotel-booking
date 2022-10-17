import React from "react";
import { useParams } from "react-router";

const SingleHotel = () => {
  const params = useParams();
  return <div>SingleHotel - {params.id}</div>;
};

export default SingleHotel;
