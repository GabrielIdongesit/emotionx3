// src/App.jsx
import React from "react";
import Bike from "././components/Bike";
import Footer from "./components/Footer";
import HeadlineCard from "./components/HeadlineCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
// import { NavLink } from 'react-router-dom';
import {
  BrowserRouter as Router, Routes,
  
  Route
} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Payment from "./components/Payment";

// A Layout component to wrap common elements like Navbar & Footer
const Layout = ({ children }) => (
  <>
    <Navbar />
    <main>{children}</main> {/* Where page-specific content goes */}
    <HeadlineCard />
    <Bike />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
      {/* <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Hero</NavLink> */}
        <Route path="/" element={<Layout><Hero /></Layout>} />
        <Route path="/AboutUs" element={<Layout><AboutUs /></Layout>} />
        <Route path="/ContactUs" element={<Layout><ContactUs /></Layout>} />
        <Route path="/service" element={<Layout><HeadlineCard /></Layout>} />
        {/* <Route path="/bike" element={<Layout><Bike /></Layout>} /> */}
        <Route path="/payment" element={<Layout><Payment /></Layout>} />
        {/* Add more routes for dynamic paths (e.g., /bikes/:bikeId) */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Router >
  );
}

export default App;
