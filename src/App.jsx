import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import OurMission from './pages/OurMission'
import OurService from './pages/OurServices'
import WhyHLb2b from "./pages/WhyHLb2b";
function App() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes basename='/hlb2b.net'>
        <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/why-hlb2b' element={<WhyHLb2b />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/mission' element={<OurMission />} />
          <Route path='/service' element={<OurService />} />

        </Routes>
      </BrowserRouter>   
  );
}

export default App;
