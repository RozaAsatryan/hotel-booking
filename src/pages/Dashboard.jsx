import UserInfo from "../components/user/UserInfo";
import { useSelector } from "react-redux";
import DashboradTabs from "../components/DashboradTabs";
import { Outlet } from "react-router";
import { Container } from "react-bootstrap";

const Dashboard = () => {
  const { auth } = useSelector((state) => ({ ...state }));
  const { user, token } = auth;

  return (
    <>
      <UserInfo />
      <DashboradTabs />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Dashboard;
