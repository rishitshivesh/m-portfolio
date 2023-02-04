import React from "react";
import AnalogClock from "analog-clock-react";
import three from "../../Assets/Images/Clock/3.svg";
import six from "../../Assets/Images/Clock/6.svg";
import nine from "../../Assets/Images/Clock/9.svg";
import twelve from "../../Assets/Images/Clock/12.svg";
const Clock = () => {
  let options = {
    width: "200px",
    border: false,
    baseColor: "transparent",
    centerColor: "#d2c59c",
    centerBorderColor: "#ffffff",
    handColors: {
      second: "#d2c59c",
      minute: "#B4D4F5",
      hour: "#789DC3",
    },
  };
  //   React.useEffect(() => {
  //     var arr = [1, 2, 3, 4];
  //     arr.map((item) => {
  //       console.log(item);
  //     });
  //   }, []);
  return (
    <div className="bg-[#37485a] w-[220px] h-[220px] rounded-full flex flex-row justify-center place-items-center relative">
      <div className="z-[40]">
        <AnalogClock {...options} style={{ zIndex: "40" }} />
      </div>
      <img
        src={three}
        className="z-[30] w-[60px] h-[60px] absolute my-auto right-0"
      />
      <img
        src={six}
        className="z-[30] w-[60px] h-[60px] absolute bottom-0 mx-auto"
      />
      <img
        src={nine}
        className="z-[50] w-[60px] h-[60px] absolute my-auto left-0"
      />
      <img
        src={twelve}
        className="z-[30] w-[80px] h-[80px] absolute top-0 mx-auto"
      />
    </div>
  );
};

export default Clock;
