/** @format */

// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import ContactPage from "./components/ContactPage";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <NavBar/> */}
        <Routes>
          <Route path="/hali-rodriguez-portfolio" element={<Home />} />
          <Route path="/hali-rodriguez-portfolio/About" element={<About />} />
          <Route
            path="/hali-rodriguez-portfolio/portfolio"
            element={<Portfolio />}
          />
          {/* <Route path="/Contact" element={<ContactPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
