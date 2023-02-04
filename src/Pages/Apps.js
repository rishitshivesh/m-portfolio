import React, { useState } from "react";
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
export default function Apps() {
  const [open, set] = useState(0);

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

  return (
    <div className="w-screen h-[90vh]">
      <div className="z-10 flex flex-col justify-start place-items-center w-full h-full pt-10">
        <Clock />
        <div className="flex flex-col justify-evenly px-4 mt-10">
          <div className="text-[2.5rem] font-[Hackbot] text-center">
            {data.name}
          </div>
          <div className="font-[Hackbot] text-center p-4">
            {data.home.description}
          </div>
          <div className="font-[Hackbot] text-right p-4">
            ~ {data.home.description_by}
          </div>
        </div>
      </div>
      {/*  */}
      <animated.div
        className={
          "cursor-pointer flex flex-row justify-end place-items-end absolute z-[200]"
        }
        style={{
          //   background: x.to([0, 1], ["#c9ffed20", "#ff255820"]),
          bottom: x.to([0, 1], ["15vh", "0"]),
          left: x.to([0, 1], ["3vw", "0"]),
          width: x.to([0, 1], ["20vw", "100vw"]),
          height: x.to([0, 1], ["10vh", "100vh"]),
          //   width: "100vw",
          //   height: "100vh",
        }}
        onClick={() => set((open) => Number(!open))}
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
            height: x.to([0, 1], ["10vh", "93vh"]),
            backgroundColor: x.to([0, 1], ["transparent", "#ffffff30"]),
            backdropFilter: x.to([0, 1], ["blur(0px)", "blur(10px)"]),
            color: x.to([0, 1], ["#fff", "#000"]),
            margin: x.to([0, 1], ["0px 20px 20px 0px", "0px 0px 0px 0px"]),
            zIndex: x.to([0, 1], ["0", "1"]),
          }}
        >
          {!open ? <img src={nav}></img> : "Welcome"}
        </animated.div>
      </animated.div>
    </div>
  );
}
