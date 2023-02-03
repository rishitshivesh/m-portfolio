import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Navbar/Navbar";
import Load from "./Pages/Load";
import Clock from "./Components/Clock/Clock";
import Lock from "./Components/Lock/Lock";
import Global from "./Pages/Global";
import Drag from "./Pages/Drag";
const App = () => {
  const [lock, setLock] = React.useState(true);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Load />} />
        <Route
          path="/page"
          element={<Global lock={lock} setLock={setLock} />}
        />
        <Route path="/home" element={<Home />} />
        <Route path="/lock" element={<Drag lock={lock} setLock={setLock} />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/drag" element={<Drag />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
