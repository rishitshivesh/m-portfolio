import React, { useState, useEffect } from "react";
import {
  useTransition,
  useSpring,
  useChain,
  config,
  animated,
  useSpringRef,
} from "@react-spring/web";
import nav from "../Assets/Icons/nav.svg";
// import data from "../Components/Apps/Apps";
import styles from "../Components/Apps/Apps.module.css";
import { Canvas } from "@react-three/fiber";
import { CSS2DRenderer } from "three-stdlib";
import Clock from "../Components/Clock/Clock";
import data from "../Data/main.json";
import Draggable from "react-draggable";
import blog from "../Assets/Icons/blog.svg";
import { Page } from "konsta/react";
import music from "../Assets/Icons/music.svg";
import { Link, useNavigate } from "react-router-dom";
export default function Apps() {
  const [open, set] = useState(0);
  const navigate = useNavigate();
  const handleStop = (e, data) => {
    console.log(data.lastX, data.lastY);
    if (data.lastX < 0) {
      // set(0);
    }
  };

  const ab = [1, 2];
  //   const springApi = useSpringRef();
  //   const { size, ...rest } = useSpring({
  //     ref: springApi,
  //     config: config.stiff,
  //     from: { size: "20%", background: "hotpink" },
  //     to: {
  //       size: open ? "100%" : "20%",
  //       background: open ? "white" : "hotpink",
  //     },
  //   });
  //   console.log(springApi, size);
  //   console.log(open);
  //   const transApi = useSpringRef();

  const [{ x }] = useSpring(
    {
      x: open,
      config: { mass: 10, tension: 2000, friction: 150, precision: 0.0001 },
    },
    [open]
  );
  console.log(open);
  const divSize = x.to([0, 1], [0, 100]);
  const expRef = React.useRef();

  // console.log(expRef.current);
  // useEffect(() => {
  //   if (open) {
  //     // expRef.current?.updatePosition({ x: 0, y: 0 });
  //   }
  // }, [open]);
  return (
    <Page className="pt-10 w-full h-full" style={{ background: "transparent" }}>
      <div className="z-10 flex flex-col justify-start place-items-center pt-10 gap-y-5">
        <Clock />
        <div className="flex flex-col justify-evenly px-4 mt-10">
          <div className="max-[300px]:text-[1.5rem] text-[2.5rem] font-[Hackbot] text-center">
            {data.name}
          </div>
          <div className="font-[Hackbot] text-center p-4 max-[300px]:text-[1rem]">
            {data.home.description}
          </div>
          <div className="font-[Hackbot] text-right p-4 max-[300px]:text-[1rem]">
            ~ {data.home.description_by}
          </div>
        </div>
      </div>
      {/*  */}
      {/* <Draggable onStop={handleStop} ref={expRef}> */}
      <animated.div
        className={
          "cursor-pointer flex flex-row justify-end place-items-end absolute z-[200]"
        }
        style={{
          //   background: x.to([0, 1], ["#c9ffed20", "#ff255820"]),
          bottom: x.to([0, 1], ["0vh", "0"]),
          right: x.to([0, 1], ["0vw", "0"]),
          width: x.to([0, 1], ["1vw", "100vw"]),
          height: x.to([0, 1], ["1%", "100%"]),
          //   width: "100vw",
          //   height: "100vh",
        }}
        onClick={() => set((open) => Number(0))}
      >
        <Canvas
          orthographic
          shadows
          dpr={[1, 2]}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          {/* {transition((style, item) => (
          <animated.div
            className={styles.item}
            style={{ ...style, background: item.css }}
          />
        ))} */}
          {/* <CSS2DRenderer>Hello World</CSS2DRenderer> */}
        </Canvas>
        <animated.div
          className=""
          style={{
            width: x.to([0, 1], ["20vw", "100vw"]),
            height: x.to([0, 1], ["10%", "95%"]),
            backgroundColor: x.to([0, 1], ["transparent", "#ffffff30"]),
            backdropFilter: x.to([0, 1], ["blur(0px)", "blur(10px)"]),
            color: x.to([0, 1], ["#fff", "#000"]),
            margin: x.to([0, 1], ["0px 20px 20px 0px", "0px 0px 0px 0px"]),
            zIndex: x.to([0, 1], ["0", "1"]),
          }}
        >
          {!open ? null : "Welcome"}
        </animated.div>
      </animated.div>

      <div className="ml-[5%] w-[90%] mx-auto rounded-xl absolute bottom-5 p-2 h-[10vh]  flex flex-row justify-evenly bg-[#ffffff10] backdrop-blur">
        {ab.map((item) => {
          return <img src={blog} className="object-contain"></img>;
        })}

        <img
          src={music}
          className="object-contain"
          onClick={() => navigate("/music")}
        ></img>
        <img
          src={nav}
          className="object-contain"
          onClick={() => set((open) => Number(!open))}
        ></img>
      </div>
      {/* </Draggable> */}
    </Page>
  );
}
