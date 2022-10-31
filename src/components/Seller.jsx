import { Col, Container, Row } from "react-bootstrap";
import Connected from "./dashboard/Connected";
import NotConnected from "./dashboard/NotConnected";
import { useSelector } from "react-redux/es/exports";

const Seller = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  


  return (
    <>
      {auth?.user?.stripe_seller?.charges_enabled ? (
        <Connected />
      ) : (
        <NotConnected />
      )}
    </>
  );
};

export default Seller;
