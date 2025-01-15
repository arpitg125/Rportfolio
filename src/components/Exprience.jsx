import React from "react";
import "./Exprience.css";  // Normal CSS
import skills from "../data/skills.json";
import history from "../data/history.json";

export const Experience = () => {
  return (
    <section className="experience-container" id="experience">
      <span className="sa1">
      <h2 className="experience-title">Skills</h2>
      <h2 className="experience-title">Experience</h2>
      </span>
      <span>
      
      </span>
      <div className="experience-content">
        <div className="experience-skills">
          {skills.map((skill, id) => {
            return (
              <div key={id} className="experience-skill">
                <div className="experience-skill-image-container">
                <img
                    src={require(`../assets/${skill.imageSrc}`)}
                    alt={skill.title}
                  />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className="experience-history">
          {history.map((historyItem, id) => {
            return (
              <li key={id} className="experience-history-item">
                <div className="experience-history-details">
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};