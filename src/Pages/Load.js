import React, { useEffect, useState } from "react";
import { App, Button, Page } from "konsta/react";
import star from "../Assets/Images/star.svg";
import globe from "../Assets/Images/globe.svg";
import cs from "../Assets/Images/cs.svg";
import Navbar from "./Navbar";
export default function MyApp() {
  const [date, setDate] = useState(new Date());
  //   console.log(date.getMonth());
  const [day, setDay] = useState(
    date.toUTCString().split(" ").slice(0, 4).join(" ")
  );
  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <>
      {/* App component ideally should be the main root component */}
      <App theme="material" safeAreas>
        <Page>
          <div
            className="w-[100vw] h-[100vh]"
            style={{
              backgroundImage: `url(${star})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            {/* <Navbar
            title="My App"
            subtitle="Subtitle"
            className="top-0 sticky mx-auto"
          ></Navbar> */}
            {/* <div className="flex flex-row justify-between">
              <div className="text-sm">{date.toLocaleTimeString()}</div>
              <div className="text-sm">{day}</div>
            </div> */}
            <Navbar />

            <div>
              <img src={cs} className="w-[80%] mx-auto mt-14" />
              <img
                src={globe}
                alt="globe"
                className="mx-auto w-[70%] max-w-[300px] mt-10"
              />
            </div>
            <div className="font-[Helvetica] w-[80%] text-center mx-auto mt-10">
              We'll be coming to your Mobile/Tablet device soon. Stay tuned!
            </div>
            <Button
              className="w-[75%] mx-auto mt-5"
              onClick={() => {
                window.location.href = "https://portfolio.rishitshivesh.co.in";
              }}
            >
              Check my Portfolio
            </Button>
          </div>
        </Page>
      </App>
    </>
  );
}
