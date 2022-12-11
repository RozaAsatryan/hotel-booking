import { useSelector } from 'react-redux';
import moment from 'moment/moment';
import { useState, useEffect } from 'react';

// Bootstrap
import { Card, Container, Col, Row, Image } from 'react-bootstrap';
import { FiSettings } from 'react-icons/fi';

// Stripe info
import {
  currencyFormatter,
  getAccountBalance,
  payoutSetting,
} from '../../actions/stripe';

const UserInfo = () => {
  const { auth } = useSelector((state) => ({ ...state }));

  const { user, token } = auth;
  const [balance, setBalance] = useState(0);

  const handlePayoutSettings = async () => {
    try {
      const res = await payoutSetting(token);
      window.location.href = res.data.url;
    } catch (err) {
      console.log('Unable to access settings. Try again');
    }
  };

  useEffect(() => {
    getAccountBalance(auth.token).then((res) => {
      setBalance(res.data);
    });
  }, []);

  return (
    <Container>
      <Row>
        <Col className="mb-2">
          <Card body className="shadow bg-light">
            <div className="d-flex flex-column align-items-center pb-3 ">
              <div>
                <Image
                  width="100"
                  height="100"
                  src={`https://api.multiavatar.com/${user.name[0]}.svg`}
                  rounded
                />
              </div>
              <div>
                <h4 className="text-align-center mb-3 mt-3">{user.name}</h4>
                <p className="mb-2">{user.email}</p>
                <p>{`Joined ${moment(user.createdAt).fromNow()}`}</p>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col>
          {auth?.user?.stripe_seller?.charges_enabled && (
            <>
              <Card body className="mb-2 shadow bg-light">
                Avaliable:
                {balance &&
                  balance.pending &&
                  balance.pending.map((bp, i) => (
                    <span key={i} className="lead">
                      {currencyFormatter(bp)}
                    </span>
                  ))}
              </Card>
              <Card body className="shadow bg-light">
                Payouts
                <span
                  onClick={handlePayoutSettings}
                  className="bg-light pointer"
                >
                  <FiSettings className="h5 pt-2" />
                </span>
              </Card>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default UserInfo;
