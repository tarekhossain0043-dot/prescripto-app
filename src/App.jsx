import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Appoinment from "./pages/Appoinment";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MyAppoinment from "./pages/MyAppoinment";
import Profile from "./pages/MyProfile";
export default function App() {
  return (
    <div className="container">
      {/* Setup Routing */}
      {/* Default show this navbar */}
      <Navbar />
      {/* Default show this navbar */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<Profile />} />
        <Route path="/my-appoinment" element={<MyAppoinment />} />
        <Route path="/appoinment/:docId" element={<Appoinment />} />
      </Routes>
      {/* Setup Routing */}
      <Footer />
    </div>
  );
}
