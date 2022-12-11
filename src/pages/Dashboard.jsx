import UserInfo from '../components/user/UserInfo';
import DashboardTabs from '../components/DashboardTabs';
import { Outlet } from 'react-router';
import { Container, Col, Row } from 'react-bootstrap';

const Dashboard = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col md={3} className="mb-5">
          <UserInfo />
        </Col>
        <Col md={9}>
          <DashboardTabs />
          <Container>
            <Outlet />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
