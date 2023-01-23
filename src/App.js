import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Navbar";
import Load from "./Pages/Load";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Load />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
