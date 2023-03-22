import React from "react";
import { BiArrowBack } from "react-icons/bi";

// import noise from "../../../Assets/Theme/noise2.svg";
import info from "../../Assets/Images/info.svg";
import glass1 from "../../Assets/Theme/cert/glass1.svg";
import title from "../../Assets/Theme/cert/title.svg";
import desc from "../../Assets/Theme/cert/desc.svg";
import date from "../../Assets/Theme/cert/date.svg";
import issuer from "../../Assets/Theme/cert/issuer.svg";

const CertDisplay = ({ setCert, data }) => {
  console.log(data);
  return (
    <div
      id="cert-disp"
      className="p-2 swing-in-bottom-bck absolute top-0 left-0 w-screen h-screen bg-[#ffffff10] backdrop-blur-lg z-[150] transition-all duration-700"
    >
      <div className="flex flex-row gap-x-4 text-2xl text-center">
        <div
          className="text-3xl"
          onClick={() => {
            document.querySelector("#cert-disp").style.top = "100vh";
            setTimeout(() => {
              setCert(false);
            }, 700);
          }}
        >
          <BiArrowBack />
        </div>
        Certificate
      </div>
      <div className="flex flex-col mt-5 max-h-[80vh] overflow-y-scroll">
        <div className="w-[95%] rounded-xl mx-auto">
          <img src={data.image} className="object-fit mx-auto rounded-3xl" />
        </div>
        <div className="">
          <div
            className="bg-[#00000095] mt-5 backdrop-blur-md w-full h-[90%] rounded-[2.1rem] border-2 border-gray-400 flex flex-col p-3"
            style={{
              backgroundImage: `url(${glass1})`,
              //   backdropFilter: "brightness(0.1) saturate(0)",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-row py-2 px-2 place-items-center border-b-2 border-gray-500">
              <img src={info} width={25} className="my-auto mt-1" />
              <div className="my-auto ml-3 text-lg text-bold">Info</div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row py-2 px-2 mt-3 place-items-center">
                <img src={title} width={20} className="my-auto mt-1" />
                <div className="my-auto ml-3 text-md text-bold">Title</div>
              </div>
              <div className="px-10 text-gray-300">{data.name}</div>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row py-2 px-2 mt-3 place-items-center">
                <img src={issuer} width={20} className="my-auto mt-1" />
                <div className="my-auto ml-3 text-md text-bold">Issued By</div>
              </div>
              <div className="px-10 text-gray-300">{data.issuer.name}</div>
            </div>
            {/* <div className="flex flex-col">
                  <div className="flex flex-row py-2 px-2 mt-3 place-items-center">
                    <img src={desc} width={20} className="my-auto mt-1" />
                    <div className="my-auto ml-3 text-md text-bold">
                      Description
                    </div>
                  </div>
                  <div className="px-10 text-gray-300">{data.name}</div>
                </div> */}
            <div className="flex flex-col">
              <div className="flex flex-row py-2 px-2 mt-3 place-items-center">
                <img src={date} width={20} className="my-auto mt-1" />
                <div className="my-auto ml-3 text-md text-bold">Issued on</div>
              </div>
              <div className="px-10 text-gray-300">{data.date}</div>
            </div>
            <div className="relative transition-all ml-4">
              <a href={data.link} target="_blank">
                <div
                  className={`mt-5 text-white rounded-3xl cursor-pointer py-2 px-4 w-[50%] mx-auto text-center peer`}
                  style={{
                    background: "#ef6522",
                  }}
                >
                  Visit Certificate
                </div>
                {/* <div className="bg-[#ef6522] button flex flex-col justify-center items-center peer-hover:translate-x-1 hover:translate-x-1 hover:opacity-100 -translate-x-9 -z-10 peer-hover:z-10 duration-500 transition-all absolute top-5 left-[50%] h-10 w-10">
                  {">"}
                </div> */}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertDisplay;
