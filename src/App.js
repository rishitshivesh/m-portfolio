import React, { useState, useEffect, Suspense } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Navbar/Navbar";
import Load from "./Pages/Load";
import Clock from "./Components/Clock/Clock";
import Lock from "./Components/Lock/Lock";
import Drag from "./Pages/Drag";
import Apps from "./Pages/Apps";
import axios from "./Utility/axios";
import ReactHowler from "react-howler";
import Loader from "./Pages/Loader";
import Explorer from "./Pages/Explorer";
import Blog from "./Pages/Blog";
import SingleBlog from "./Pages/SingleBlog";

// import Global from "./Pages/Global";
const Global = React.lazy(() => import("./Pages/Global"));
// const
const Music = React.lazy(() => import("./Pages/Music"));
const App = () => {
  const [lock, setLock] = React.useState(true);
  const [songs, setSongs] = React.useState([]);
  const [notifications, setNotifications] = React.useState([]);
  const [skills, setSkills] = React.useState([]);
  const [certifications, setCertifications] = React.useState([]);
  const [theme, setTheme] = React.useState(true);

  // Music Controls
  const [playing, setPlaying] = React.useState(false);
  const [nowPlaying, setNowPlaying] = React.useState(null);
  const [duration, setDuration] = React.useState(0);
  const ref = React.createRef();
  const [progress, setProgress] = React.useState(0);
  const [seek, setSeek] = React.useState(0);
  const [playStatus, setPlayStatus] = React.useState("play");
  const [musicStop, setMusicStop] = React.useState(true);

  useEffect(() => {
    if (!playing && progress == 0) {
      setMusicStop(true);
    } else {
      setMusicStop(false);
    }
  }, [playing, progress]);

  useEffect(() => {
    // if (playing) {
    const refreshTime = () => {
      setProgress(ref.current.seek());
    };
    const timerId = setInterval(refreshTime, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
    // }
  }, [ref]);
  useEffect(() => {
    // window.location.reload();

    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
    }
  }, [theme]);
  useEffect(() => {
    ref.current.seek((seek / 100) * ref.current.duration());
  }, [seek]);

  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window.innerWidth <= 1000) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [window && window.innerWidth]);

  useEffect(() => {
    async function getSongs() {
      const data = await axios.get("/songs");
      // console.log(data);
      setSongs(data.data);
    }
    getSongs();
    // const data = await axios.get("/songs");
  }, []);
  useEffect(() => {
    const data = axios
      .get("/notifications")
      .then((res) => setNotifications(res.data.data));

    const skills = axios.get("/static/skills").then((res) => {
      console.log(res.data);
      setSkills(res.data);
    });

    const certifications = axios
      .get("/static/certifications")
      .then((res) => setCertifications(res.data));
  }, []);
  // console.log(nowPlaying);
  // console.log(songs, notifications, skills, certifications);   // 4
  return (
    <BrowserRouter>
      <div
        id="music-stop"
        className="hidden"
        onClick={() => {
          ref.current.stop();
          setPlaying(false);
        }}
      ></div>
      <div
        id="music-pause"
        className="hidden"
        onClick={() => {
          ref.current.pause();
          setPlaying(false);
        }}
      ></div>
      <div
        id="music-play"
        className="hidden"
        onClick={() => {
          ref.current.play();
          setPlaying(true);
        }}
      ></div>
      <ReactHowler
        ref={ref}
        playing={playing}
        onLoad={() => {
          setDuration(ref.current.duration());
          // ref.current.volume(0.5);
        }}
        loop={true}
        src={
          nowPlaying
            ? nowPlaying.src
            : "https://rs-bucket-s3.s3.ap-south-1.amazonaws.com/music/sos-rs.mp3"
        }
      />
      <Routes>
        {/* <Route path="/" element={<Load />} /> */}
        <Route
          path="/page"
          element={<Global lock={lock} setLock={setLock} />}
        />
        <Route path="/loading" element={<Loader />} />
        <Route path="/lock" element={<Drag lock={lock} setLock={setLock} />} />
        <Route path="/clock" element={<Clock />} />
        <Route path="/drag" element={<Drag />} />
        <Route
          path=""
          element={
            <Suspense fallback={<Loader />}>
              <Global
                lock={lock}
                setLock={setLock}
                nowPlaying={nowPlaying}
                setNowPlaying={setNowPlaying}
                playing={playing}
                setPlaying={setPlaying}
                notifications={notifications}
                theme={theme}
                setTheme={setTheme}
                musicStop={musicStop}
              >
                <Apps />
              </Global>
            </Suspense>
          }
        />
        <Route
          path="/music"
          element={
            <Suspense fallback={<Loader />}>
              <Global>
                <Music
                  ref={ref}
                  duration={duration}
                  setDuration={setDuration}
                  playing={playing}
                  setPlaying={setPlaying}
                  nowPlaying={nowPlaying}
                  setNowPlaying={setNowPlaying}
                  progress={progress}
                  setProgress={setProgress}
                  seek={seek}
                  setSeek={setSeek}
                  songs={songs}
                  lock={lock}
                  setLock={setLock}
                />
              </Global>
            </Suspense>
          }
        />

        <Route
          path="/music/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Global>
                <Music
                  ref={ref}
                  duration={duration}
                  setDuration={setDuration}
                  playing={playing}
                  setPlaying={setPlaying}
                  nowPlaying={nowPlaying}
                  setNowPlaying={setNowPlaying}
                  progress={progress}
                  setProgress={setProgress}
                  seek={seek}
                  setSeek={setSeek}
                  songs={songs}
                  lock={lock}
                  setLock={setLock}
                />
              </Global>
            </Suspense>
          }
        />
        <Route
          path="explorer/:categoryType"
          element={
            <Suspense fallback={<Loader />}>
              <Global
                lock={lock}
                setLock={setLock}
                nowPlaying={nowPlaying}
                setNowPlaying={setNowPlaying}
                playing={playing}
                setPlaying={setPlaying}
                notifications={notifications}
                theme={theme}
                setTheme={setTheme}
                musicStop={musicStop}
              >
                <Explorer skills={skills} certifications={certifications} />
              </Global>
            </Suspense>
          }
        />
        <Route
          path="blog"
          element={
            <Suspense fallback={<Loader />}>
              <Global
                lock={lock}
                setLock={setLock}
                nowPlaying={nowPlaying}
                setNowPlaying={setNowPlaying}
                playing={playing}
                setPlaying={setPlaying}
                notifications={notifications}
                theme={theme}
                setTheme={setTheme}
                musicStop={musicStop}
              >
                {/* <Blog /> */}
                <Blog />
              </Global>
            </Suspense>
          }
        />
        <Route
          path="blog/:id"
          element={
            <Suspense fallback={<Loader />}>
              <Global
                lock={lock}
                setLock={setLock}
                nowPlaying={nowPlaying}
                setNowPlaying={setNowPlaying}
                playing={playing}
                setPlaying={setPlaying}
                notifications={notifications}
                theme={theme}
                setTheme={setTheme}
                musicStop={musicStop}
              >
                {/* <Blog /> */}
                <SingleBlog />
              </Global>
            </Suspense>
          }
        />

        <Route
          path="*"
          element={
            <Suspense fallback={<Loader />}>
              <Global
                lock={lock}
                setLock={setLock}
                nowPlaying={nowPlaying}
                setNowPlaying={setNowPlaying}
                playing={playing}
                setPlaying={setPlaying}
                notifications={notifications}
                theme={theme}
                setTheme={setTheme}
                musicStop={musicStop}
              >
                <Apps />
              </Global>
            </Suspense>
          }
        />

        {/* <Route path="*" element={<Load />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
