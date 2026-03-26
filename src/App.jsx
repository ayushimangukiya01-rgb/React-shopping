import React from "react";
import Navbar from "./Componets/Navbar";
import Productlist from "./Pages/Productlist";
import Checkout from "./Pages/Checkout";
import Productdetail from "./Pages/Productdetail";
import Footer from "./Componets/Footer";
import Card from "./Pages/Card"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-950 font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Productlist />} />
          <Route path="/product/:id" element={<Productdetail />} />
          <Route path="/card" element={<Card />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        <Footer />
      </div>                           
    </Router>
  );
};

export default App;