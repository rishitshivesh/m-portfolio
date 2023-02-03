import React from "react";
import Nav from "../Components/Navbar/Navbar";
import night from "../Assets/Theme/night.svg";
import Lock from "../Pages/Drag";
const Global = ({ children, lock, setLock }) => {
  return (
    <>
      <div
        className=" w-[100vw] h-[100vh] overflow-hidden"
        style={{
          background: `url(${night}),#252525`,
          backgroundSize: "cover",
        }}
      >
        {lock ? <Lock setLock={setLock} lock={lock} /> : null}
        <Nav logo />
        <div></div>
      </div>
    </>
  );
};

export default Global;
