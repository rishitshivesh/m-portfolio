import React from "react";
import hand from "../../Assets/Images/hand.svg";
import hat from "../../Assets/Images/hat.svg";
import hs from "../../Assets/Images/hs.svg";
const About = ({ data }) => {
  return (
    <div className="">
      <div className="flex flex-col p-5 gap-y-4 overflow-y-scroll max-h-full">
        <div className="mx-auto bg-[#ffffff20] rounded-xl min-h-[200px] h-[46%] p-4">
          <div className="flex flex-row gap-x-5 text-xl">
            <img src={hand} />
            Introduction
          </div>
          <div className="flex flex-col mt-3 gap-x-5 place-items-center w-[90%] mx-auto">
            <div className="">
              <img src={data.image} className="object-fit " />
            </div>
            <div className="text-justify text-md pb-2 mt-2">
              {data.description}
            </div>
          </div>
        </div>
        <div className="mx-auto rounded-xl flex flex-col gap-4 ">
          <div className="h-full bg-[#ffffff20] rounded-xl flex flex-col p-4">
            <div className="flex flex-row gap-x-5 text-xl mb-3">
              <img src={hat} />
              Education
            </div>
            <div className="flex flex-col gap-y-4 overflow-y-scroll">
              {data.education.map((item) => {
                return (
                  <div className="flex flex-col">
                    <div className="font-bold text-lg">{item.degree}</div>
                    <div className="">{item.name}</div>
                    <div className="">{item.year}</div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="  bg-[#ffffff20] rounded-xl flex flex-col p-4">
            <div className="flex flex-row gap-x-5 text-xl mb-3">
              <img src={hs} />
              About the project
            </div>
            <div className="overflow-y-scroll">{data.about}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
