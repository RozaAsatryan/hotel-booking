import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Error from "./pages/Error";
import SingleHotel from "./components/hotels/SingleHotel";
import Dashboard from "./pages/Dashboard";
import { ToastContainer } from "react-toastify";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/hotels/:id" element={<SingleHotel />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
