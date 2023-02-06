import React, { useState } from "react";
import Nav from "../Components/Navbar/Navbar";
import night from "../Assets/Theme/night.svg";
import Lock from "../Pages/Drag";
import {
  Page,
  Navbar,
  NavbarBackLink,
  Panel,
  BlockTitle,
  Block,
  Button,
} from "konsta/react";
import { AiFillControl } from "react-icons/ai";
import Draggable from "react-draggable";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
const Global = ({ children, lock, setLock }) => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  const [props, api] = useSpring(
    () => ({
      from: { transform: "translateX(-10px)" },
      to: { transform: "translateX(0px)" },
      config: {
        mass: 5,
        friction: 120,
        tension: 120,
      },
    }),

    []
  );
  return (
    <Page>
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
        {!lock ? (
          <div>
            <Page
              className="py-3 overflow-hidden"
              style={{ background: "transparent" }}
            >
              <Draggable
                bounds="parent"
                onStop={() => {
                  setLeftPanelOpened(true);
                }}
              >
                <div
                  // style={props}
                  onClick={() => {
                    setLeftPanelOpened(true);
                  }}
                  className="transition-all touch-ripple-white absolute right-[2vw] top-[20vh] text-3xl p-2 bg-[#ffffff30] z-[290] flex flex-row rounded-full justify-center place-items-center"
                  style={{
                    display: leftPanelOpened ? "none" : "block",
                  }}
                >
                  {/* <span
                    onClick={() => {
                      setLeftPanelOpened(true);
                    }}
                    className="w-[80%] bg-white h-[80%] aspect-square"
                  >*/}
                  <AiFillControl onClick={() => setLeftPanelOpened(true)} />
                </div>
              </Draggable>
              <Panel
                side="left"
                opened={leftPanelOpened}
                className="z-[310]"
                onBackdropClick={() => setLeftPanelOpened(false)}
              >
                <Page className="z-[310]">
                  <Navbar
                    title="Left Panel"
                    right={
                      <Link navbar onClick={() => setLeftPanelOpened(false)}>
                        Close
                      </Link>
                    }
                  />
                  <Link to="/apps">
                    <Button>Go to Home </Button>
                  </Link>
                  <Block className="space-y-4">
                    <p>Here comes left panel.</p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse faucibus mauris leo, eu bibendum neque congue
                      non. Ut leo mauris, eleifend eu commodo a, egestas ac
                      urna. Maecenas in lacus faucibus, viverra ipsum pulvinar,
                      molestie arcu. Etiam lacinia venenatis dignissim.
                      Suspendisse non nisl semper tellus malesuada suscipit eu
                      et eros. Nulla eu enim quis quam elementum vulputate.
                      Mauris ornare consequat nunc viverra pellentesque. Aenean
                      semper eu massa sit amet aliquam. Integer et neque sed
                      libero mollis elementum at vitae ligula. Vestibulum
                      pharetra sed libero sed porttitor. Suspendisse a faucibus
                      lectus.
                    </p>
                  </Block>
                </Page>
              </Panel>
              {children}
            </Page>
          </div>
        ) : null}
      </div>
    </Page>
  );
};

export default Global;
