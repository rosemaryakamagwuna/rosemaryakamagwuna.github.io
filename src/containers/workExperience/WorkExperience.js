import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
// import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <div className="experience-container" id="workExperience">
          <div>
            <h1 className="experience-heading">Some Work Experience {emoji("👷🏾‍♀️")}</h1>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <ExperienceCard
                    key={i}
                    isDark={isDark}
                    cardInfo={{
                      company: card.company,
                      companyURL: card.companyURL,
                      desc: card.desc,
                      date: card.date,
                      companylogo: card.companylogo,
                      role: card.role,
                      descBullets: card.descBullets
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
