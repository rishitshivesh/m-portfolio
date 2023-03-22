import React, { useEffect } from "react";
import data from "../Data/main.json";
import { useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import SkillDisplay from "../Components/Explorer/SkillDisplay";
import SingleCertificate from "../Components/Explorer/SingleCertificate";
import { useNavigate } from "react-router-dom";
import Socials from "../Components/Explorer/Socials";
import About from "../Components/Explorer/About";
import Contact from "../Components/Explorer/Contact";
import CertDisplay from "../Components/Explorer/CertDisplay";
const Explorer = ({ category, skills, certifications }) => {
  const { categoryType } = useParams();
  const [cert, setCert] = React.useState(false);
  const [certData, setCertData] = React.useState();
  const navigate = useNavigate();
  const allowedCategories = [
    "skills",
    "certifications",
    "projects",
    "about",
    "contact",
    "skills",
    "achievements",
    "socials",
  ];
  useEffect(() => {
    if (!allowedCategories.includes(categoryType)) {
      window.location.pathname = "/";
    }
  }, [categoryType]);
  //   console.log(ski)
  return (
    <div className="mt-[5vh] relative">
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
                  setCert={setCert}
                  setCertData={setCertData}
                />
              </div>
            );
          })}
        </div>
      )}
      {categoryType === "socials" && <Socials />}
      {categoryType === "about" && (
        <div className="max-h-[90vh] overflow-y-scroll py-3">
          <About data={data.explorer.about} />
        </div>
      )}
      {categoryType === "contact" && <Contact />}
      {cert ? <CertDisplay data={certData} setCert={setCert} /> : null}
    </div>
  );
};

export default Explorer;
