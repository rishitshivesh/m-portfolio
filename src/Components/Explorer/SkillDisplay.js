import { color } from "@mui/system";
import React, { CSSProperties } from "react";
// import "./Skill.css";
// import "../../Utility/circle";
const SkillDisplay = ({ data, key }) => {
  // const icon = require("../../Assets/Skills/" + data.icon);
  const icon = data.img;
  return (
    <a
      href={data.link}
      target="_blank"
      className="skillblock relative group overflow-hidden transition-all rounded-xl shadow-inner hover:shadow-xl w-[7.5rem] text-center flex flex-col items-center py-2 justify-center flex-wrap"
      style={
        {
          // background: `url(${icon}) no-repeat center/contain, linear-gradient(90deg, var(--color) 0%, var(--color) 100%)`,
          // background: `linear-gradient(90deg, var(--color) 0%, var(--color) 100%), linear-gradient(90deg, var(--color) 0%, var(--color) 100%)`,
          // background: `linear-gradient(90deg, var(--color) 0%, var(--color) 100%)`,
        }
      }
    >
      <div className="z-20 text-center">
        <img
          src={icon}
          alt={data.name}
          className="w-16 h-16 object-contain my-auto bg-white rounded-xl p-2"
        />
      </div>
      <div className="text-center text-[0.8rem] font-bold my-auto mt-2">
        {data.name}
      </div>
    </a>
  );
};

export default SkillDisplay;
