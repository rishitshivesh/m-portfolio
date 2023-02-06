import React, { useRef, useEffect } from "react";
// import music from "../../Data/music.json";
// import * as animationData from "../../Assets/Player/play.json";
import lottie from "lottie-web";
// import casette from "../../Assets/Player/casettebig.svg";
// import walkman from "../../Assets/Player/walkman.svg";
// import aictepattern from "../../Assets/Player/aictepattern.svg";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
// import fitty from "fitty";
const Songs = ({ setNowPlaying, nowAlbum, setPlaying, nowPlaying, music }) => {
  const [data, setData] = React.useState();
  const groupDataByAlbum = (data) => {
    const albums = {};
    data.forEach((item) => {
      if (!albums[item.album]) {
        albums[item.album] = [];
      }
      albums[item.album].push(item);
    });
    setData(albums);
    return albums;
  };
  React.useEffect(() => {
    if (music) groupDataByAlbum(music);
  }, [music]);

  return (
    <div className="w-full flex flex-col justify-center py-2 px-4 transition-all max-h-[45vh] overflow-hidden">
      <div className="dark:text-white text-black text-2xl my-5">Songs</div>
      <div className="flex flex-col overflow-y-scroll gap-y-5">
        {data &&
          data[nowAlbum].map((song) => {
            return (
              <div
                className="flex flex-row gap-x-4 place-items-center font-[Helvetica] p-1 rounded-lg transition-all"
                style={{
                  background: nowPlaying == song ? "#13152e" : null,
                }}
                onClick={() => {
                  setNowPlaying(song);
                  setPlaying(true);
                }}
              >
                <div className="w-[70px]">
                  <img
                    src={song.art}
                    className="object-cover aspect-square rounded-lg"
                  />
                </div>
                <div className="flex flex-col w-max">
                  <div>{song.name}</div>
                  <div className="text-[0.6rem]">{song.artist}</div>
                </div>
              </div>
            );
          })}
      </div>
      {/* <div
        className=" w-max bg-red-100 overflow-y-scroll px-2 py-2 relative"
        style={{
     
          background: "#525252",

          border: "1.13817px solid rgba(225, 225, 225, 0.5)",
          boxShadow:
            "0px 0px 27.3161px rgba(0, 0, 0, 0.25), 0px 9.10536px 9.10536px rgba(0, 0, 0, 0.25), inset 2.44161px -4.06936px 6.51097px rgba(0, 0, 0, 0.25), inset -2.44161px 4.06936px 6.51097px rgba(255, 255, 255, 0.64)",
          borderRadius: "22.7884px",
        }}
      >
        <div className="px-2 mt-2 pt-2 pb-8 rounded-[13.0207px] bg-[#35363C]">
          <div className="mt-2 mb-2 font-[hackbot] text-center bg-[#3b3b3b] py-2">
            {nowAlbum} Mixtape - {data && data[nowAlbum]?.length} Tracks
          </div>
          <div className="h-[90%] overflow-y-scroll" id="scroll-songs">
            {data &&
              data[nowAlbum].map((song) => {
                return (
                  <div
                    className="dark:text-white text-black my-3 flex flex-row place-items-center gap-x-5 justify-between w-[27vw]
                   transition-all cursor-pointer overflow-hidden rounded
                dark:hover:bg-[#ffffff20] hover:bg-[#00000120]
                "
                    style={{
                      backgroundColor:
                        nowPlaying === song ? "#646771" : "#64677185",
                      boxShadow:
                        "0px 3.26313px 3.26313px rgba(0, 0, 0, 0.25), inset 0px -0.815782px 0.815782px #4F5159, inset 0px 0.815782px 0.815782px #8B8E98",
                    }}
                    onClick={() => {
                      setNowPlaying(song);
                      setPlaying(true);
                    }}
                  >
                    <div className="p-1 rounded overflow-hidden flex flex-row flex-grow">
                      <div
                        className="text-white bg-[#5e1c1c] p-2 rotate-180 text-sm rounded-r text-center"
                        style={{
                          writingMode: "vertical-lr",
                        }}
                      >
                        Track
                      </div>
                      <img
                        src={song.art}
                        className={"object-cover aspect-square w-[60px]"}
                      />
                      <div
                        className="w-full bg-[#e1e1e1] p-2 flex flex-row border-l-2 border-[#35363c]"
                        style={{
                          //   backgroundImage: `url(${aictepattern})`,
                          backgroundSize: "contain",
                        }}
                      >
                        <div className="flex flex-col bg-[#FFFDD020] basis-[80%]">
                          <div className="text-black font-mistrydibeti font-bold border-b-2 border-[#35363c]">
                            {song.name}
                          </div>
                          <div className="text-black font-mistrydibeti text-sm">
                            {song.artist}
                          </div>
                        </div>
                        <div className="basis-[20%] font-[Poppins] text-black flex flex-row justify-center place-items-center">
                          {song.year}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Songs;
