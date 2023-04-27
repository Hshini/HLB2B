import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar"
import AboutUs from "./pages/AboutUs"
import Contact from "./pages/Contact"
import OurOrganization from './pages/OurOrganization'
import OurMission from './pages/OurMission'
import OurService from './pages/OurServices'
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/organization' element={<OurOrganization />} />
          <Route path='/mission' element={<OurMission />} />
          <Route path='/service' element={<OurService />} />

        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
