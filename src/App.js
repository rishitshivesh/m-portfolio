import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Pages/Navbar";
import Load from "./Pages/Load";
import Clock from "./Components/Clock/Clock";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Load />} />
        <Route path="/home" element={<Home />} />

        <Route path="/clock" element={<Clock />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
