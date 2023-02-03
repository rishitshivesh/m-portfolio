import React, { useState, useEffect } from "react";
import { Page, Navbar } from "konsta/react";
import { MdSignalWifi4Bar, MdNetworkCell } from "react-icons/md";
import { BsLightningChargeFill } from "react-icons/bs";
import data from "../../Data/main.json";
const Nav = ({ children, logo }) => {
  const [date, setDate] = useState(new Date());
  const [battery, setBattery] = React.useState();

  //   console.log(date.getMonth());
  const [day, setDay] = useState(
    date.toUTCString().split(" ").slice(0, 4).join(" ")
  );
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000 * 60);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  function refreshBattery() {
    // setDate(new Date());
    navigator.getBattery().then((battery) => setBattery(battery));
    // setBattery();
  }
  // useEffect(() => {
  //   setNotTime(date.toLocaleTimeString());
  // }, [date]);
  useEffect(() => {
    const timerId = setInterval(refreshBattery, 10000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);

  const getTime = (time) => {
    // remove seconds from time string

    if (time.split(" ")[1]) {
      time = time.split(":").slice(0, 2).join(":");
      time += " " + date.toLocaleTimeString().split(" ")[1];
    } else {
      if (time.split(":")[0] > 12) {
        time = time.split(":").slice(0, 2).join(":");
        time += " PM";
      } else {
        time = time.split(":").slice(0, 2).join(":");
        time += " AM";
      }
    }
    // console.log(time.split(":"));
    return time;
  };
  // console.log(battery);
  // console.log(navigator);
  return (
    <div className="transition-all flex flex-row justify-between w-full px-2 place-items-center py-1">
      <div>{getTime(date.toLocaleTimeString())}</div>
      {logo ? <div className="font-[Monoton] text-2xl">{data.logo}</div> : null}
      <div className="flex flex-row place-items-center gap-x-2">
        <div>
          <MdSignalWifi4Bar />
        </div>
        <div>
          <MdNetworkCell />
        </div>
        {battery && (
          <div className="flex flex-row gap-x-2">
            <div className="h-[15px] w-[10px] rounded-[1px] border-[1px] border-white my-auto flex flex-col justify-end relative">
              <div
                className="bg-white"
                style={{
                  height: `${battery.level * 15}px`,
                }}
              ></div>
              <div
                className={`text-[9px] absolute top-[3px] left-0 invert ${
                  battery.charging ? "block" : "hidden"
                }`}
              >
                <BsLightningChargeFill />
              </div>
            </div>
            {/* {parseInt(battery.level * 100)} % */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
