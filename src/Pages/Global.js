import React, { useState, useEffect } from "react";
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
import { BsLightningChargeFill, BsMoonFill, BsSun } from "react-icons/bs";
import { FiHelpCircle } from "react-icons/fi";
import { AiOutlineDown } from "react-icons/ai";
import { CiLock } from "react-icons/ci";
import { IoMdMusicalNote } from "react-icons/io";
import { IoNotificationsOutline } from "react-icons/io5";
import MusicNavbar from "../Components/Music/MusicNavbar";
import NavBtn from "../Components/Navbar/NavBtn";

const Global = ({
  children,
  lock,
  setLock,
  notifications,
  help,
  setHelp,
  playing,
  nowPlaying,
  musicStop,
  theme,
  setTheme,
}) => {
  const [leftPanelOpened, setLeftPanelOpened] = useState(false);
  const notTime = new Date().toLocaleTimeString();

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
  console.log(nowPlaying);
  const [notificationMessage, setNotificationMessage] = React.useState();
  // console.log()
  const [battery, setBattery] = React.useState();
  console.log(notifications);
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    if (notifications)
      setNotificationMessage(
        notifications[Math.floor(Math.random() * notifications.length)]
      );
  }, [open, notifications]);
  // const [msg, setMsg] = React.useState();
  function refreshBattery() {
    // setDate(new Date());
    navigator.getBattery().then((battery) => setBattery(battery));
    // setBattery();
  }
  // useEffect(() => {
  //   setNotTime(date.toLocaleTimeString());
  // }, [date]);
  useEffect(() => {
    const timerId = setInterval(refreshBattery, 5000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  function playNeverGonna() {
    const pattern = [
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
      1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0,
      0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 2, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 1, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0,
      0, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,
      0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0,
      1, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1,
      2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
      0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0,
      1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2,
      1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0,
      0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
      0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 1, 0, 1, 0, 0, 0,
      0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0,
      0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 1, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1,
      0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      2, 1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2,
      1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0,
      0, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 1,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 0, 0, 0, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1,
      0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 1, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0,
      1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 1, 2,
      1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 1, 0, 2, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,
      0, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0,
      0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0,
      2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 2, 1, 2, 1, 2, 1, 2,
      1, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0,
      1, 0, 2, 1, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1,
      2, 1, 2, 1, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0,
      2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2,
      1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1,
      1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2,
      1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 0, 2, 1, 2, 1, 2, 1, 2, 1, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1,
      0, 2, 1, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 2, 1, 2, 1, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2,
      1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1,
      1, 0, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1,
      0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 2, 1, 2, 1,
      2, 1, 2, 1, 2, 1, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 2, 1, 1, 0, 1,
      0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 2, 1,
      2, 1, 1, 0, 1, 0, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2,
      1, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 1, 0, 1, 0, 1, 0, 1, 0,
      1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 2, 1, 2, 1, 2, 1, 2,
    ];
    // Convert the pattern to the format expected by the Vibration API
    const convertedPattern = pattern.map((duration) => duration / 1000);

    // Check if the device supports the Vibration API
    if ("vibrate" in navigator) {
      // Vibrate the device with the pattern
      navigator.vibrate(convertedPattern);
    } else {
      // Handle unsupported devices
      console.error("Vibration API is not supported on this device.");
    }
  }
  useEffect(() => {
    if (notifications)
      setNotificationMessage(
        notifications[Math.floor(Math.random() * notifications.length)]
      );
  }, [open]);
  // console.log(notifications);
  const msg = "Hello, Friend!";
  return (
    <Page>
      <div
        className=" w-[100vw] h-[100vh] overflow-hidden setPortraitDisplay"
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
                style={{
                  background: "transparent",
                }}
              >
                <Page
                  className="z-[310]"
                  style={{
                    background: "#ffffff10",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {/* <Navbar
                    title="Control"
                    // right={
                    //   // <Link navbar onClick={() => setLeftPanelOpened(false)}>
                    //   //   Close
                    //   // </Link>
                    // }
                    className="bg-[#ffffff10]"
                    style={{
                      background: "#ffffff10",
                      backdropFilter: "blur(10px)",
                    }}
                  /> */}
                  <div className="font-sm p-4 font-[Helvetica] flex flex-row justify-between">
                    Centre
                    <div
                      className="flex flex-row place-items-center gap-x-0"
                      style={{
                        opacity: 0.5,
                      }}
                    >
                      {battery && (
                        <div className="flex flex-row gap-x-2">
                          <div className="h-[15px] w-[10px] rounded-[2px] border-[1px] border-white my-auto flex flex-col justify-end relative">
                            <div
                              className="bg-white my-[1px] rounded-[1px] mx-[1px]"
                              style={{
                                height: `${battery.level * 13}px`,
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
                          <div style={{ fontSize: "0.8rem" }}>
                            {parseInt(battery.level * 100)} %
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* <Link to="/apps">
                    <Button>Go to Home </Button>
                  </Link> */}
                  {/* <Button onClick={playNeverGonna}>Click me</Button> */}

                  <Block className="space-y-4">
                    {/* <div className="flex flex-row justify-between" style={{}}>
                      <div
                        style={{
                          fontSize: "0.9rem",
                        }}
                      >
                        {msg}
                      </div>
                      <div
                        className="flex flex-row place-items-center gap-x-0"
                        style={{
                          opacity: 0.5,
                        }}
                      >
                        {battery && (
                          <div className="flex flex-row gap-x-2">
                            <div className="h-[15px] w-[10px] rounded-[2px] border-[1px] border-white my-auto flex flex-col justify-end relative">
                              <div
                                className="bg-white my-[1px] rounded-[1px] mx-[1px]"
                                style={{
                                  height: `${battery.level * 13}px`,
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
                            <div style={{ fontSize: "0.8rem" }}>
                              {battery.level * 100} %
                            </div>
                          </div>
                        )}
                      </div>
                    </div> */}
                    <div className="flex flex-row flex-wrap gap-x-1 justify-between">
                      <div
                        onClick={(e) => {
                          // if (!invert) {
                          //   setInvert((invert) => !invert);
                          //   localStorage.setItem(
                          //     "color-theme",
                          //     invert ? "light" : "dark"
                          //   );
                          //   setTheme((theme) => !theme);
                          //   dispatch(toggleTheme(!theme));
                          // }
                          // e.target.classList.toggle("invert");
                          // checkInvert();
                          setTheme(true);
                        }}
                        className="transition-all duration-50 cursor-pointer flex-row px-2 w-[49%] mt-2 place-items-center"
                      >
                        {/* <NavBtn icon={BsMoonFill} text="Dark Mode" /> */}
                        <NavBtn
                          icon={<BsMoonFill />}
                          text="Dark Mode"
                          // select={invert === true}
                        />
                        {/* <CgDarkMode />
            Mode */}
                      </div>
                      <div
                        onClick={(e) => {
                          // if (invert) {
                          //   setInvert((invert) => !invert);
                          //   // localStorage.setItem(
                          //   //   "color-theme",
                          //   //   invert ? "light" : "dark"
                          //   // );
                          //   // setTheme((theme) => !theme);
                          //   // dispatch(toggleTheme(!theme));
                          // }
                          setTheme(false);

                          // e.target.classList.toggle("invert");
                          // checkInvert();
                        }}
                        className="transition-all duration-50 cursor-pointer flex-row px-2 w-[49%] mt-2 place-items-center"
                      >
                        {/* <NavBtn icon={BsMoonFill} text="Dark Mode" /> */}
                        <NavBtn
                          icon={<BsSun />}
                          text="Light Mode"
                          // select={invert !== true}
                        />
                        {/* <CgDarkMode />
            Mode */}
                      </div>
                      <div
                        onClick={(e) => {
                          setHelp(true);
                        }}
                        // onClick={(e) => {
                        //   if (!invert) {
                        //     setInvert((invert) => !invert);
                        //     localStorage.setItem("color-theme", invert ? "light" : "dark");
                        //     setTheme((theme) => !theme);
                        //     dispatch(toggleTheme(!theme));
                        //   }

                        //   // e.target.classList.toggle("invert");
                        //   // checkInvert();
                        // }}
                        className="transition-all duration-50 cursor-pointer flex-row px-2 w-[49%] mt-2 place-items-center"
                      >
                        {/* <NavBtn icon={BsMoonFill} text="Dark Mode" /> */}
                        <NavBtn
                          icon={<FiHelpCircle />}
                          text="Need Help?"
                          select={false}
                        />
                        {/* <CgDarkMode />
            Mode */}
                      </div>
                      <div
                        // onClick={(e) => {
                        //   if (!invert) {
                        //     setInvert((invert) => !invert);
                        //     localStorage.setItem("color-theme", invert ? "light" : "dark");
                        //     setTheme((theme) => !theme);
                        //     dispatch(toggleTheme(!theme));
                        //   }

                        //   // e.target.classList.toggle("invert");
                        //   // checkInvert();
                        // }}
                        onClick={(e) => {
                          // localStorage.removeItem("lastlogin");
                          // dispatch(toggleLock(true));
                          setLock(true);
                        }}
                        className="transition-all duration-50 cursor-pointer flex-row px-2 w-[49%] mt-2 place-items-center"
                      >
                        {/* <NavBtn icon={BsMoonFill} text="Dark Mode" /> */}
                        <NavBtn icon={<CiLock />} text="Lock" select={false} />
                        {/* <CgDarkMode />
            Mode */}
                      </div>
                      {/* <div
            onClick={(e) => {
              setInvert((invert) => !invert);
              localStorage.setItem("color-theme", invert ? "light" : "dark");
              setTheme((theme) => !theme);
              dispatch(toggleTheme(!theme));
              // e.target.classList.toggle("invert");
              // checkInvert();
            }}
            className="transition duration-500 bg-white text-black flex text-md gap-x-3 cursor-pointer flex-row px-2 w-[45%] rounded-lg py-1 mt-2 place-items-center"
            style={{
              filter: invert ? "invert(1)" : "invert(0)",
            }}
          >
            <CgDarkMode />
            Mode
          </div> */}
                    </div>
                    {!musicStop ? (
                      <div className="flex flex-col gap-y-2 h-max">
                        <div className="flex flex-row justify-start gap-x-4 place-items-center mt-3 text-white">
                          <IoMdMusicalNote />
                          Music
                        </div>
                        <MusicNavbar
                          playing={playing}
                          nowPlaying={nowPlaying}
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col gap-y-4 h-max">
                        <div className="flex flex-row justify-start gap-x-4 place-items-center mt-5 text-white">
                          <IoNotificationsOutline />
                          Notifications
                        </div>
                        <div
                          className="w-full h-max rounded-xl p-2"
                          style={{
                            background: "rgba(255, 255, 255, 0.3)",
                          }}
                        >
                          <div className="text-[0.9rem] text-[#ffffff80] flex flex-row place-items-center gap-x-4 py-2">
                            {[
                              [
                                notTime.split(":")[0],
                                notTime.split(":")[1],
                              ].join(":"),
                              notTime.split(" ")[1],
                            ].join(" ")}{" "}
                            <AiOutlineDown />
                          </div>
                          <div className="text-sm flex flex-row gap-x-1">
                            <div className="w-16 h-16 rounded-full basis-[15%]">
                              <img
                                className="w-full rounded-full  object-cover aspect-square "
                                src={notificationMessage?.img}
                              ></img>
                            </div>
                            <div className="flex-col flex overflow-hidden basis-[80%]">
                              <b>{notificationMessage?.person}</b>
                              {notificationMessage?.msg}
                            </div>
                            {/* <div className="flex flex-col">
                <div className="flex flex-row">
                  <img
                    className="w-10 rounded-full  object-cover aspect-square "
                    src={notificationMessage.img}
                  ></img>
                  <b>{notificationMessage.person}</b>
                </div>
                <div>{notificationMessage.msg}</div>
              </div> */}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* </div> */}
                  </Block>
                  <Link to="/">
                    <div className="absolute bottom-[5vh] w-full ">
                      <div className="mx-auto my-auto text-black bg-white rounded-3xl w-max p-3">
                        Go to Home
                      </div>
                    </div>
                  </Link>
                </Page>
              </Panel>
              {children}
            </Page>
          </div>
        ) : null}
      </div>
      <div className="landscape:block portrait:hidden flex flex-row justify-center place-items-center text-2xl h-full text-white font-[Helvetica]">
        Please view the page on Portrait Orientation
      </div>
    </Page>
  );
};

export default Global;
