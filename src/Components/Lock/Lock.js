import React, { useEffect, useState } from "react";
import data from "../../Data/main.json";
import { Link } from "react-router-dom";
import Nav from "../Navbar/Navbar";
import Draggable from "react-draggable";
import { IoLockClosedOutline } from "react-icons/io5";
// import DateTime from "../Components/datetime";
import wallpaper from "../../Assets/Images/lock.svg";
// import MusicTaskbar from "../Components/MusicTaskbar";
// import "../Utility/handleMouse";
import Toggle from "../Toggle/Toggle";
import Drag from "../Toggle/Drag";

const Lock = ({ lock, setLock, playing, nowPlaying }) => {
  // Import Lockscreen Background
  // console.log(data.name);
  const bg = require(`../../Assets/Theme/${data.lock_screen}`);
  const profile = require(`../../Assets/Theme/${data.lockprofile}`);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // console.log(bg);

  const handleOut = () => {
    if (lock) {
      const doc = document.querySelector("#main-lock");
      localStorage.setItem("lastlogin", new Date().getTime());

      doc.style.transform = "translateY(-100vh)";
      const main = document.querySelector("#main-div-lock");
      console.log(doc);
      setTimeout(() => {
        setLock(false);
        // main.style.display = "none";
        // localStorage.setItem("lastlogin", new Date().getTime());
      }, 1000);
    } else {
      return;
    }
  };
  // const handleStart = (e, ui) => {
  //   // console.log("start", ui);
  // };
  // const handleDrag = (e, ui) => {
  //   // console.log("drag", ui);
  //   setPosition({ x: ui.x, y: ui.y });
  // };
  // const handleStop = (e, ui) => {
  //   console.log("stop", ui.x, ui.y, ui);
  //   // setPosition({ x: ui.x, y: ui.y });
  // };
  // const [dimensions, setDimensions] = useState({});
  // const thisRef = React.useRef(null);
  // useEffect(() => {
  //   setDimensions({
  //     width: thisRef.current.offsetWidth,
  //     height: thisRef.current.offsetHeight,
  //   });
  // }, [thisRef?.current]);
  // console.log(dimensions);
  const [value, setValue] = useState(0.5);
  return (
    <div id="main-div-lock overflow-hidden absolute top-0 left-0">
      {lock ? (
        <div
          className=" w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat backdrop-filter overflow-hidden z-[100] backdrop-blur-lg transition duration-1000"
          id="main-lock"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundColor: "black",
          }}
        >
          <div className="backdrop-blur-xl backdrop-brightness-75">
            <Nav />
          </div>
          <div className="w-[100vw] h-[100vh] bg-cover bg-center bg-no-repeat bg-[#ffffff10] backdrop-blur-xl pt-8 backdrop-brightness-75">
            {/* <div className="w-screen flex-row justify-center flex">
              <DateTime />
            </div> */}

            <div className="flex flex-col justify-center align-middle place-items-center mt-20 gap-y-10">
              <img
                src={profile}
                className="w-[50vw] mx-auto rounded-full border-2 border-white  "
              />
              <div className="font-[Monoton] text-[2.5rem] text-white">
                {data.name}
              </div>
              <Link onClick={handleOut}>
                <div className="flex flex-row gap-x-2">
                  <div className="px-6 py-2 text-lg bg-white rounded-3xl font-[Helvetica] cursor-pointer text-black">
                    Unlock
                  </div>
                </div>
              </Link>
              {/* <div
                className=" bg-[#0000ff10] p-3 relative block rounded-full"
                style={{
                  width: "15vh",
                  height: "15vh",
                }}
                ref={thisRef}
              >
                <Draggable
                  bounds="parent"
                  axis="both"
                  onStart={handleStart}
                  onDrag={handleDrag}
                  onStop={handleStop}
                  scale={1}
                >
                  <div className=" w-max rounded-full bg-blue-900">
                    <IoLockClosedOutline className="text-2xl" />
                  </div>
                </Draggable>
              </div> */}
              <div className="w-[200px] h-[200px] bg-red-100">
                {/* <Toggle /> */}

                <Drag>Hello</Drag>
              </div>
              <div>
                {/* {playing && nowPlaying ? (
                  <MusicTaskbar playing={playing} nowPlaying={nowPlaying} />
                ) : null} */}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Lock;
