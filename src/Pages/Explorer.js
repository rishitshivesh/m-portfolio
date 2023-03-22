import React, { useEffect } from "react";
import data from "../Data/main.json";
import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import SkillDisplay from "../Components/Explorer/SkillDisplay";
import SingleCertificate from "../Components/Explorer/SingleCertificate";
import { useNavigate } from "react-router-dom";
const Explorer = ({ category, skills, certifications }) => {
  const { categoryType } = useParams();
  const navigate = useNavigate();
  const allowedCategories = [
    "skills",
    "certifications",
    "projects",
    "about",
    "contacts",
    "skills",
    "achievements",
  ];
  useEffect(() => {
    if (!allowedCategories.includes(categoryType)) {
      window.location.pathname = "/";
    }
  }, [categoryType]);
  //   console.log(ski)
  return (
    <div className="mt-[5vh]">
      <div className="flex flex-row gap-x-3 text-2xl capitalize items-center mx-2">
        <div
          onClick={() => {
            navigate("/");
          }}
        >
          <BiArrowBack />
        </div>
        {categoryType}
      </div>
      {categoryType === "skills" && (
        <div className="flex flex-row justify-start flex-wrap max-h-[88vh] mt-2 p-5 overflow-y-scroll gap-1">
          {skills.map((skill, idx) => {
            // console.log(skill);
            return (
              <div className="relative overflow-hidden z-[15]">
                {/* {skill.name} */}
                <SkillDisplay data={skill} key={idx} />
              </div>
            );
          })}
        </div>
      )}
      {categoryType === "certifications" && (
        <div className="flex flex-row justify-center flex-wrap max-h-[88vh] mt-2 p-5 overflow-y-scroll gap-3">
          {certifications.map((certification, idx) => {
            return (
              <div className="relative overflow-hidden z-[15]">
                {/* {skill.name} */}
                <SingleCertificate
                  data={certification}
                  //   setCert={setCert}
                  //   setCertData={setCertData}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Explorer;
