import React from "react";
import Content from "./components/Content";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";

const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <NavBar />
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
