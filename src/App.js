import React from 'react';
// import './App.css';

import {
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import Home from './Pages/Home';
import About from './Pages/About';
import Service from './Pages/Service';
import Contact from './Pages/Contact';
import Nav from './Navbar/Nav';
import Footer from './Footer/Footer';

const App = () => {
  return (
    <>

      <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/contact' element={<Contact />} />

          <Route path="*" element={
            <Home />} />
        </Routes>

      <Footer />
    </>
  )
}

export default App;
