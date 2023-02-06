import React, { Component, CSSProperties } from "react";
import { Page } from "konsta/react";
import Slider from "@mui/material/Slider";

// import Stack from "@mui/material/Stack";
// import Slider from "@mui/material/Slider";
// import top from "../Assets/Player/top.svg";
// import bottom from "../Assets/Player/bottom.svg";
// import pattern from "../Assets/Player/pattern.svg";
// import nowplaying from "../Assets/Player/nowplaying.svg";
// import btns from "../Assets/Player/btns.svg";
// import ReactHowler from "react-howler";
import { useEffect } from "react";
// import btnskeleton from "../Assets/Player/btnskeleton.svg";
// import { FaPlay, FaPause, FaStop, FaRandom } from "react-icons/fa";
// import tapebg from "../Assets/Player/tapebg.svg";
// import "../Components/music.css ";
// import songs from "../Data/music.json";
import Albums from "../Components/Music/Albums";
import Songs from "../Components/Music/Songs";
// import volume from "../Assets/Player/volume.svg";
// import progressImg from "../Assets/Player/progress.svg";
import { useNavigate } from "react-router-dom";
// import "../Components/music.css";
// import { extractColors } from "extract-colors";
import { usePalette } from "react-palette";
// import icons from "../Assets/Player/icons.svg";
// import icon from "../Assets/Icons/music.svg";
// import { AiOutlineMinus } from "react-icons/ai";
// import { GrClose } from "react-icons/gr";
// import { CgClose } from "react-icons/cg";
// import "../Components/music.css";
import { useParams } from "react-router-dom";
// import { Helmet } from "react-helmet";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import {
  FaPlay,
  FaPause,
  FaStop,
  FaRandom,
  FaShareSquare,
} from "react-icons/fa";
import { Toolbar, Popup, Range } from "konsta/react";
import { IoShare } from "react-icons/io5";
const Music = React.forwardRef((props, ref) => {
  // console.log(props);
  // const ref = ref;
  const groupDataByAlbum = (data) => {
    const albums = {};
    data.forEach((item) => {
      if (!albums[item.album]) {
        albums[item.album] = [];
      }
      albums[item.album].push(item);
    });
    setAlbumData(albums);
    return albums;
  };
  // useEffect(() => {
  //   groupDataByAlbum(props.songs.data);
  // }, [props?.songs?.data]);
  const [albumData, setAlbumData] = React.useState();
  const [position, setPosition] = React.useState(0);
  const [volumevalue, setvolumeValue] = React.useState(50);
  const [nowbtn, setNowbtn] = React.useState();
  const [circleWidth, setCircleWidth] = React.useState(0);
  const [nowAlbum, setNowAlbum] = React.useState("Beatles");
  const [volumeStart, setVolumeStart] = React.useState(0);
  const [volumeEnd, setVolumeEnd] = React.useState(0);
  const navigate = useNavigate();
  const [colors, setColors] = React.useState({});
  const [popupOpened, setPopupOpened] = React.useState(false);

  const handleChange = (event, newValue) => {
    setvolumeValue(newValue);
    // console.log(newValue / 100);
  };
  const handleSeekChange = (event, newValue) => {
    props.setSeek(newValue);
    // console.log(newValue / 100);
  };
  // useEffect(() => {
  //   if (props.nowPlaying) {
  //     var data;
  //     const f = async () => {
  //       data = await extractColors(props.nowPlaying.src);
  //     };
  //     f();
  //     console.log(data);
  //   }
  // }, [props.nowPlaying]);
  const GetColors = (img) => {
    const { data, loading, error } = usePalette(img);
    return data;
  };
  // useEffect(() => {
  // setColors(GetColors(props.nowPlaying?.art));
  // }, [props.nowPlaying]);
  // console.log(GetColors(props.nowPlaying?.art));
  useEffect(() => {
    ref.current.volume(volumevalue / 100);
  }, [volumevalue]);

  useEffect(() => {
    const doc = document.querySelector("#playing-toolbar");

    if (props.nowPlaying && doc) {
      doc?.classList?.add("slide-in-bottom");
      // doc.classList.toggle("slide-out-bottom");
    } else {
      doc?.classList?.remove("slide-in-bottom");
      doc?.classList?.toggle("slide-out-bottom");
    }
  }, [props.nowPlaying]);
  const chooseRandom = () => {
    const random = Math.floor(Math.random() * props.songs.data.length);
    console.log(random, props.songs.data[random]);
    props.setNowPlaying(props.songs.data[random]);
    setNowAlbum(props.nowPlaying.album);
    props.setPlaying(true);
  };

  // useEffect(() => {
  //   setCircleWidth((props.progress / props.musicDuration) * 100);
  //   // console.log(circleWidth);
  // }, [props.progress]);

  const { id } = useParams();
  console.log(props.songs);
  useEffect(() => {
    console.log(id);
    if (id && props.songs.data) {
      console.log(props.songs.data);
      const song = props.songs.data.find((song) => song.id == id);
      console.log(song);
      if (song) {
        props.setNowPlaying(song);
        setNowAlbum(song.album);
        props.setPlaying(true);
      } else {
        // window.location.pathname = "/music";
        // navigate("/music");
      }
    } else {
      // window.location.pathname = "/music";
      // navigate("/music");
    }
  }, [id, props?.songs?.data]);
  // console.log(albumData);
  function str_pad_left(string, pad, length) {
    return (new Array(length + 1).join(pad) + string).slice(-length);
  }
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);

  useEffect(() => {
    const distance = touchStart - touchEnd;
    console.log(Math.abs(distance), popupOpened, Math.abs(distance) > 30);
    if (Math.abs(distance) > 30 && popupOpened) {
      setPopupOpened(false);
      // props.setSeek(props.progress - 5);
    } else if (Math.abs(distance) > 30) {
      // props.setSeek(props.progress + 5);
      setPopupOpened(true);
    }
  }, [touchStart, touchEnd]);
  // convert seconds to minutes and seconds
  function secondsToTime(duration) {
    var seconds = parseInt(duration % 60);
    var minutes = parseInt((duration / 60) % 60);
    return str_pad_left(minutes, "0", 2) + ":" + str_pad_left(seconds, "0", 2);
  }
  const link = window.location.href;
  const [musicDuration, setMusicDuration] = React.useState(0);
  useEffect(() => {
    if (ref.current?.duration()) setMusicDuration(ref.current.duration());
  }, [ref.current?.duration()]);
  // console.log(ref.current?.duration());
  // console.log(msToTime(props.progress));
  // console.log(ref.current);
  return (
    <>
      <Page
        style={{
          background: "transparent",
        }}
        className="pt-5"
      >
        <div
          className=""
          style={{
            "--one": GetColors(props.nowPlaying?.art)?.vibrant + "20",
            "--two": GetColors(props.nowPlaying?.art)?.darkVibrant + "20",
            "--three": GetColors(props.nowPlaying?.art)?.lightVibrant + "20",
            "--four": GetColors(props.nowPlaying?.art)?.muted + "20",
          }}
        >
          {/* <Helmet>
        <title>{`Music | Rishit Shivesh | ${props?.nowPlaying?.name}`}</title>
        <meta name="description" content="Rishit's Music Player" />
        <meta name="theme-color" content="#008f68" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#008f68" />
        <meta name="msapplication-navbutton-color" content="#008f68" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="Rishit Shivesh" />
        <meta name="application-name" content="Rishit Shivesh" />
        <meta name="msapplication-starturl" content="/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="keywords"
          content="Rishit Shivesh, Rishit, Shivesh, Music Player"
        />
        <meta name="author" content="Rishit Shivesh" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="og:title" content="Rishit Shivesh | Music Player" />
        <meta
          name="og:description"
          content={`${props?.nowPlaying?.name} on Rishit Shivesh's Music Player`}
        />
        <meta name="og:image" content={props?.nowPlaying?.art} />
      </Helmet> */}
          {/* <div className="w-[100vw] h-[5vh] fixed top-0 left-0 bg-black z-[100] px-5 py-1 text-white flex-row justify-between place-items-center">
        <span>Music Player</span>
        <div className="float-right mt-2 p-2 w-[20px] h-[20px] flex flex-row justify-center place-items-center bg-red-500 text-white rounded-full">
          X
        </div>
      </div> */}

          {/* <ReactHowler
        ref={ref}
        playing={playing}
        onLoad={() => {
          setDuration(ref.current.duration());
        }}
        src={
          nowPlaying
            ? nowPlaying.src
            : ""
        }
      /> */}
          {/* <div className="text-center">Music Player</div> */}
          <div
            className="flex flex-col justify-between pt-3 no-repeat relative"
            // onClick={() => {
            //   console.log(albumData[nowAlbum][0].album_art);
            // }}
            style={
              {
                // backgroundImage: `url(${icons})`,
                //   // background: nowAlbum
                //   //   ? `background: linear-gradient(270deg, #2D2D2D 0%, rgba(45, 45, 45, 0) 152.98%),url(${albumData[nowAlbum][0].album_art})`
                //   //   : "",
                //   background: `url(${albumData?.[nowAlbum][0].album_art}) no-repeat,linear-gradient(270deg, #2D2D2D 0%, rgba(45, 45, 45, 0.2) 122.98%) no-repeat`,
                //   backgroundPosition: "left, left top",
                //   backgroundRepeat: "no-repeat, no-repeat",
                //   backgroundAttachment: "fixed,fixed",
                //   backgroundSize: "contain,50% 50%",
              }
            }
          >
            {/* <div
          className="absolute bg-red-100 w-[100vw] h-[100vh] top-0 left-0"
          style={{
            boxShadow:
              `inset -350px 0 100px 0 ` +
              GetColors(props.nowPlaying?.art)?.darkVibrant +
              "",
            opacity: 0.1,
            background: `url(${albumData?.[nowAlbum][0].album_art})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "50% 100%",
          }}
        >
          
        </div> */}
            <div className="overflow-hidden z-[0]">
              <Albums
                setNowAlbum={setNowAlbum}
                nowAlbum={nowAlbum}
                nowPlaying={props.nowPlaying}
                playing={props.playing}
                music={props?.songs?.data}
              />
            </div>
            {/* <div className="h-[100vh] basis-[30%] mt-10 pt-10">
          <div
            className="w-[450px] h-[550px] bg-[#525252] mx-auto my-auto relative rounded-[2rem] overflow-hidden"
            style={{
              backgroundImage: `url(${top}), url(${bottom})`,
              backgroundPosition: "top, bottom",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <img src={pattern} className="z-10 mx-auto mt-5" />
            <div
              className="bg-[#26282c] w-[90%] h-[57%] mx-auto mt-5 rounded-lg p-2"
              style={{
                backgroundImage: `url(${tapebg})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "98%",
              }}
            >
              <div
                className="box w-[90%] h-[75%] mx-auto bg-[#303237] mt-4 relative text-white text-center"
                style={{
                  clipPath:
                    "polygon(2% 0, 98% 0, 100% 2%, 100% 100%, 97% 100%, 0% 100%, 0 100%, 0 2%)",
                }}
              >
                <img
                  src={cover}
                  className="object-cover w-full h-full z-10 absolute top-0 left-0"
                />
                <span className="font-caveat text-3xl text-[#b8b8b9] z-20">
                  {props.nowPlaying ? props.nowPlaying.name : "‎ "}
                </span>
               
                <div className="my-auto mx-auto bg-[#121212] w-[50%] h-[30%] translate-y-[35px] flex flex-row justify-between overflow-visible">
                  <div
                    className="rounded-full -ml-[50px] mt-[-25px]  relative flex flex-row justify-center place-items-center"
                    style={{
                      width: "110px",
                      height: "110px",
                    }}
                    backgroundImage={`url(${wheel})`}
                  >
                    <div
                      className="bg-[#604443] rounded-full transition-all"
                      style={{
                        width: `${110 - (circleWidth * 50) / 100}px`,
                        height: `${110 - (circleWidth * 50) / 100}px`,
                      }}
                    ></div>
                    <img
                      src={wheel}
                      className={`w-[60px] absolute  ${
                        props.playing ? "animate-[spin_2s_linear_infinite]" : ""
                      }`}
                    ></img>
                  </div>
                  <div
                    className="rounded-full -mr-[50px] mt-[-25px]  relative flex flex-row justify-center place-items-center"
                    style={{
                      width: "110px",
                      height: "110px",
                    }}
                    backgroundImage={`url(${wheel})`}
                  >
                    <div
                      className="bg-[#604443] rounded-full transition-all"
                      style={{
                        width: `${(circleWidth * 50) / 100 + 60}px`,
                        height: `${(circleWidth * 50) / 100 + 60}px`,
                      }}
                    ></div>
                    <img
                      src={wheel}
                      className={`w-[60px] absolute object-fit rounded-full ${
                        props.playing ? "animate-[spin_2s_linear_infinite]" : ""
                      }`}
                      style={{
                        transformOrigin: "center",
                      }}
                    ></img>
                  </div>
                </div>
                <div className="w-[95%] ml-[0.47rem] absolute bottom-[23px] z-20 pt-1">
                  
                  <Slider
                    aria-label="time-indicator"
                    // size="small"
                    // value={position}
                    value={
                      props.progress
                        ? (props.progress / ref.current?.duration()) * 100
                        : 0
                    }
                    onChange={handleSeekChange}
                    // onChange={(_, value) => setPosition(value)}
                    sx={{
                      color: "#60444370",
                      height: 20,
                      borderRadius: "4px",
                      width: 1,
                      "& .MuiSlider-thumb": {
                        overflow: "hidden",
                        width: 0,
                        height: 18,
                        zIndex: 1,
                        borderRadius: "4px",

                        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                        "&:before": {
                          display: "block",
                          overflow: "hidden",
                          borderRadius: "4px",

                          // backgroundColor: "white",
                          // marginLeft: -4,
                          // width: "10%",
                          // height: 10,
                          // borderRadius: 5,
                          // opacity: 0.3,
                          zIndex: 0,
                          // boxShadow: "0px 0px 5px 5px rgba(100, 100, 80, 0.5)",
                        },
                        "&:hover, &.Mui-focusVisible": {
                          boxShadow: `0px 0px 0px 0px ${"rgb(255 255 255 / 16%)"}`,
                        },
                        "&.Mui-active": {
                          width: 0,
                          height: 0,
                        },
                      },
                      "& .MuiSlider-rail": {
                        opacity: 0.9,
                        borderRadius: "4px",
                        backgroundImage: `url(${progressImg})`,
                        backgroundSize: "contain",
                      },
                    }}
                  />

                </div>
                <div className="w-[95%] ml-[0.47rem] absolute -bottom-2 z-20">
                  <Slider
                    aria-label="volume-indicator"
                    size="small"
                    // value={position}
                    value={volumevalue}
                    onChange={handleChange}
                    // onChange={(_, value) => setPosition(value)}
                    sx={{
                      color: "#60444390",
                      borderRadius: "4px",
                      height: 14,
                      "& .MuiSlider-thumb": {
                        overflow: "hidden",
                        width: 0,
                        height: 18,
                        zIndex: 1,
                        borderRadius: "4px",
                        transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                        "&:before": {
                          display: "block",
                          overflow: "hidden",
                          // backgroundColor: "white",
                          // marginLeft: -4,
                          // width: "10%",
                          // height: 10,
                          // borderRadius: 5,
                          // opacity: 0.3,
                          zIndex: 0,
                          // boxShadow: "0px 0px 5px 5px rgba(100, 100, 80, 0.5)",
                        },
                        "&:hover, &.Mui-focusVisible": {
                          boxShadow: `0px 0px 0px 0px ${"rgb(255 255 255 / 16%)"}`,
                        },
                        "&.Mui-active": {
                          width: 0,
                          height: 0,
                        },
                      },
                      "& .MuiSlider-rail": {
                        opacity: 0.9,
                        borderRadius: "4px",
                        backgroundImage: `url(${progressImg})`,
                        backgroundSize: "contain",
                      },
                    }}
                  />
                </div>
              </div>
            </div>
            <div
              className="bg-[#26282c] rounded-t-2xl w-[90%] h-[27%] mx-auto mt-5 bg-blend-luminosity flex flex-row justify-center place-items-center text-3xl overflow-hidden"
              style={{
                backgroundImage: `url(${bottom})`,
                backgroundPosition: "bottom",
                backgroundRepeat: "no-repeat",
                backgroundSize: "150%",
              }}
            >
              <div
                className="basis-[25%] transition-all flex flex-row justify-center h-full place-items-center text-[#d7d7d7] border-r-2 border-[#ffffff20] cursor-pointer"
                style={{
                  opacity: props.playing ? 0.5 : 1,
                  backgroundColor: props.playing ? "#000" : "",
                }}
                onClick={() => {
                  if (props.nowPlaying) props.setPlaying(true);
                }}
              >
                <FaPlay />
              </div>
              <div
                className="basis-[25%] flex flex-row justify-center h-full place-items-center text-[#d7d7d7] border-r-2 border-[#ffffff20] cursor-pointer"
                style={{
                  opacity: !props.playing && props.progress != 0 ? 0.5 : 1,
                  backgroundColor:
                    !props.playing && props.progress != 0 ? "#000" : "",
                }}
                onClick={() => {
                  props.setPlaying(false);
                }}
              >
                <FaPause />
              </div>
              <div
                className="basis-[25%] flex flex-row justify-center h-full place-items-center text-[#d7d7d7] border-r-2 border-[#ffffff20] active:animate-[darken_0.2s_linear] cursor-pointer"
                onClick={() => {
                  ref.current.stop();
                  // props.setSeek(0);
                  props.setProgress(0);
                  console.log(props.seek);
                  props.setPlaying(false);
                }}
              >
                <FaStop />
              </div>
              <div
                className="basis-[25%] flex flex-row justify-center h-full place-items-center text-[#d7d7d7] border-r-2 border-[#ffffff20] active:animate-[darken_0.2s_linear] cursor-pointer"
                onClick={chooseRandom}
              >
                <FaRandom />
              </div>
            </div>
          </div>
        </div> */}
            <div className="">
              <Songs
                nowAlbum={nowAlbum}
                setNowPlaying={props.setNowPlaying}
                setPlaying={props.setPlaying}
                nowPlaying={props.nowPlaying}
                music={props?.songs?.data}
              />
            </div>
          </div>

          {props.nowPlaying ? (
            <div
              top={false}
              id="playing-toolbar"
              className="relative gap-x-4 transition-all bg-[transparent] justify-between flex flex-row backdrop-blur-sm py-2 place-items-center px-2"
              style={{
                position: "fixed",
                backgroundColor: "transparent",
                bottom: 0,
                width: "100%",
                minHeight: "8vh",
                maxHeight: "14vh",
              }}
              onTouchStart={(e) => {
                setTouchStart(e.touches[0].clientY);
              }}
              onTouchEnd={(e) => {
                setTouchEnd(e.changedTouches[0].clientY);
              }}
            >
              <div className="absolute w-full h-[2px] bg-[#3e3e3e] top-0 flex flex-row justify-start">
                <div
                  style={{
                    width: `${(props.progress / musicDuration) * 100}%`,
                    height: "100%",
                    backgroundColor: "#fff",
                  }}
                  className="transition-all duration-75 ease-linear"
                ></div>
              </div>
              <div className="flex flex-row place-items-center gap-x-4 ">
                <div className="w-[4rem]">
                  <img
                    src={props.nowPlaying.art}
                    className="object-fit aspect-square rounded-lg"
                  />
                </div>
                <div>
                  <div>{props.nowPlaying.name}</div>
                </div>
              </div>
              <div className="flex flex-row-reverse gap-x-3">
                <div
                  onClick={() => {
                    setPopupOpened(true);
                  }}
                >
                  <SlArrowUp />
                </div>
                <div
                  onClick={() => {
                    if (props.nowPlaying) {
                      props.setPlaying(!props.playing);
                    }
                  }}
                >
                  {!props.playing ? <FaPlay /> : <FaPause />}
                </div>
                <div className="text-sm">
                  {secondsToTime(props?.progress)}/
                  {secondsToTime(musicDuration)}
                </div>
              </div>
            </div>
          ) : null}
        </div>
        <Popup
          opened={popupOpened}
          // backdrop={false}
          // size={"w-screen"}
          onTouchStart={(e) => {
            setTouchStart(e.touches[0].clientY);
          }}
          onTouchEnd={(e) => {
            setTouchEnd(e.changedTouches[0].clientY);
          }}
          onBackdropClick={() => setPopupOpened(false)}
          style={{
            backgroundColor: "#ffffff15",
            zIndex: 400,
          }}
          className="bg-[#ffffff40] backdrop-blur-md h-[95vh] fixed bottom-0 z-[350] mt-[4vh] flex flex-col"
        >
          <div className="text-center font-[Helvetica] text-[1.8rem] py-10">
            Now Playing
          </div>
          <div className="max-[380px]:w-[50vw] w-[85vw] mx-auto">
            <img
              src={props.nowPlaying?.art}
              className="object-fit w-full aspect-square rounded-lg mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center text-center">
            <div className="text-center font-[Helvetica] text-[1.8rem] pt-5">
              {props.nowPlaying?.name}
            </div>
            <div className="text-[1.2rem] text-[#ffffff80]">
              {props.nowPlaying?.artist}
            </div>
          </div>
          {/* {console.log(props?.progress / ref.current?.duration())} */}
          {/* <Range
            value={props.progress ? (props.progress / musicDuration) * 100 : 0}
            step={1}
            min={0}
            max={100}
            onChange={handleSeekChange}
          /> */}
          <Slider
            aria-label="time-indicator"
            // size="small"
            // value={position}
            value={props.progress ? (props.progress / musicDuration) * 100 : 0}
            onChangeCommitted={handleSeekChange}
            // onChange={handleSeekChange}
            className="mx-auto"
            // onChange={(_, value) => setPosition(value)}
            sx={{
              color: "#60444390",
              height: 10,
              borderRadius: "4px",
              width: "95%",
              "& .MuiSlider-thumb": {
                overflow: "hidden",
                width: 0,
                height: 10,
                zIndex: 1,
                borderRadius: "8px",

                transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",
                "&:before": {
                  display: "block",
                  overflow: "hidden",
                  borderRadius: "4px",

                  // backgroundColor: "white",
                  // marginLeft: -4,
                  // width: "10%",
                  // height: 10,
                  // borderRadius: 5,
                  // opacity: 0.3,
                  zIndex: 0,
                  // boxShadow: "0px 0px 5px 5px rgba(100, 100, 80, 0.5)",
                },
                "&:hover, &.Mui-focusVisible": {
                  boxShadow: `0px 0px 0px 0px ${"rgb(255 255 255 / 16%)"}`,
                },
                "&.Mui-active": {
                  width: 0,
                  height: 0,
                },
              },
              "& .MuiSlider-rail": {
                opacity: 0.9,
                borderRadius: "4px",
                // backgroundColor
                // backgroundImage: `url(${progressImg})`,
                backgroundSize: "contain",
              },
            }}
          />
          <div className="flex flex-row justify-evenly place-items-center px-2 text-3xl mt-5">
            <div
              onClick={() => {
                navigator.share({
                  title: `Check out ${props.nowPlaying?.name} by Rishit Shivesh`,
                  url: link + "/" + props.nowPlaying?.id,
                });
              }}
            >
              <FaShareSquare />
            </div>
            <div onClick={chooseRandom}>
              <FaRandom />
            </div>
            <div
              className="text-black bg-white rounded-lg p-2"
              onClick={() => {
                props.setPlaying(!props.playing);
              }}
            >
              {props.playing ? <FaPause /> : <FaPlay />}
            </div>
            <div
              onClick={() => {
                ref.current.stop();
                props.setPlaying(false);
                props.setNowPlaying(null);
                props.setProgress(0);
                setPopupOpened(false);
              }}
            >
              <FaStop />
            </div>
            <div
              onClick={() => {
                setPopupOpened(false);
              }}
            >
              <SlArrowDown />
            </div>
          </div>
        </Popup>
      </Page>
    </>
  );
});

export default Music;
