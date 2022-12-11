import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { allHotels } from '../actions/hotels';
import { Link } from 'react-router-dom';
import HotelCard from '../components/cards/HotelCard';
import Col from 'react-bootstrap/Col';

const Hotels = ({ limit }) => {
  const [hotels, setHotels] = useState('');

  const getAllHotels = async () => {
    try {
      const res = await allHotels();
      if (res.data) {
        if (limit) {
          res.data.length = 3;
        }
        setHotels(res.data);
      }
    } catch (err) {
      toast.error('Err');
    }
  };

  useEffect(() => {
    getAllHotels();
  }, []);

  return (
    <>
      {hotels && hotels.length ? (
        hotels.map((hotel) => (
          <Col key={hotel._id} md={4}>
            <Link
              to={`/hotels/${hotel._id}`}
              className="text-decoration-none text-dark"
            >
              <HotelCard hotel={hotel} />
            </Link>
          </Col>
        ))
      ) : (
        <img
          src="https://media.tenor.com/Ta_hcuLCfCAAAAAM/%E4%BD%95%E3%82%82%E3%81%AA%E3%81%84-%E3%83%8A%E3%83%83%E3%82%B7%E3%83%B3%E3%82%B0.gif"
          style={{ height: '50vh', objectFit: 'contain' }}
        />
      )}
    </>
  );
};

export default Hotels;
