import React, { useEffect } from "react";
// import music from "../../Data/music.json";
import Casette from "./Casette";
const Albums = ({
  setNowAlbum,
  nowAlbum,
  nowPlaying,
  playing,
  music,
  albumData,
}) => {
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
  useEffect(() => {
    if (music) groupDataByAlbum(music);
    // if (music) setData(albumData);
  }, [music]);
  console.log(data);
  //   console.log(groupDataByAlbum(music));
  return (
    <div className=" flex flex-col justify-center flex-wrap p-2 pl-4">
      <div className="dark:text-white text-black text-2xl my-5 pl-6">
        Albums
      </div>
      <div className="flex w-full flex-row justify-start place-items-center overflow-y-hidden  overflow-scroll gap-x-2 px-5 overflow-x-scroll max-h-[25vh]">
        {data &&
          Object.keys(data).map((album) => {
            return (
              <Casette
                song={data[album][0]}
                setNowAlbum={setNowAlbum}
                nowAlbum={nowAlbum}
                nowPlaying={nowPlaying}
                playing={playing}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Albums;
