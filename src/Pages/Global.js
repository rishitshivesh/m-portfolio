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
  Link,
  Button,
} from "konsta/react";
import { AiFillControl } from "react-icons/ai";
import Draggable from "react-draggable";
const Global = ({ children, lock, setLock }) => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
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
        {!lock ? (
          <div>
            <Page
              className="pt-2 overflow-hidden"
              style={{ background: "transparent" }}
            >
              <Draggable>
                <div
                  onClick={() => {
                    setLeftPanelOpened(true);
                  }}
                  className="absolute left-[2vw] top-[20vh] text-3xl p-2 bg-[#ffffff30] z-[290] flex flex-row rounded-full justify-center place-items-center"
                  bounds="parent"
                >
                  <span
                    onClick={() => {
                      setLeftPanelOpened(true);
                    }}
                  >
                    <AiFillControl onClick={() => setLeftPanelOpened(true)} />
                  </span>
                </div>
              </Draggable>
              <Panel
                side="left"
                opened={leftPanelOpened}
                className="z-[300]"
                onBackdropClick={() => setLeftPanelOpened(false)}
              >
                <Page>
                  <Navbar
                    title="Left Panel"
                    right={
                      <Link navbar onClick={() => setLeftPanelOpened(false)}>
                        Close
                      </Link>
                    }
                  />
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
    </>
  );
};

export default Global;
