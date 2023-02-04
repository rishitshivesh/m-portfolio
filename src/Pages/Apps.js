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
import data from "../Components/Apps/Apps";
import styles from "../Components/Apps/Apps.module.css";
import { Canvas } from "@react-three/fiber";
import { CSS2DRenderer } from "three-stdlib";
export default function Apps() {
  const [open, set] = useState(1);

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
      <animated.div
        className={
          "cursor-pointer flex flex-row justify-end place-items-end absolute top-0 left-0"
        }
        style={{
          //   background: x.to([0, 1], ["#c9ffed20", "#ff255820"]),
          //   width: x.to([0, 1], ["50px", "100%"]),
          width: "100vw",
          height: "100vh",
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
            backgroundColor: x.to([0, 1], ["transparent", "#ffffff50"]),
            color: x.to([0, 1], ["#fff", "#000"]),
            margin: x.to([0, 1], ["0px 20px 20px 0px", "0px 0px 0px 0px"]),
          }}
        >
          {!open ? <img src={nav}></img> : "Welcome"}
        </animated.div>
      </animated.div>
    </div>
  );
}
