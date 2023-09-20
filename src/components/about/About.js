import React from "react";
import Style from "./About.module.scss";
import Terminal from "./Terminal";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faWordpress, faGit, faGithub, faFigma, faNodeJs, faMongoDB } from "@fortawesome/free-brands-svg-icons";

export default function About() {
      const firstName = info.firstName.toLowerCase();

      function aboutMeText() {
            function sendEmail() {
                  window.location.href = "mailto:aboudou.salma@live.fr";
            }
            return (
                  <>
                        <p>
                              <span style={{ color: info.baseColor }}>
                                    {firstName}
                                    {info.lastName.toLowerCase()} $
                              </span>{" "}
                              cat about{firstName}{" "}
                        </p>
                        <p>
                              <span style={{ color: info.baseColor }}>
                                    about{firstName} <span className={Style.green}>(main)</span> ${" "}
                              </span>
                              <br />
                              {info.bio.split("\n").map((paragraph, index) => (
                                    <span key={index}>
                                          {paragraph}
                                          <br />
                                    </span>
                              ))}
                        </p>
                        <button className={Style.contactBtn} onClick={sendEmail}>Contactez-moi</button>
                  </>
            );
      }

      function skillsText() {
            return (
                  <>
                        <p>
                              <span style={{ color: info.baseColor }}>
                                    {firstName}
                                    {info.lastName.toLowerCase()} $
                              </span>{" "}
                              cd skills/tools
                        </p>
                        <p>
                              <span style={{ color: info.baseColor }}>
                                    skills/tools <span className={Style.green}>(main)</span> $
                              </span>{" "}
                              ls
                        </p>
                        <p style={{ color: info.baseColor }}> Proficient With</p>
                        <ul className={Style.skills}>
                              {info.skills.proficientWith.map((proficiency, index) => (
                                    <li key={index}>
                                          <FontAwesomeIcon icon={getIcon(proficiency)} /> {proficiency}
                                    </li>
                              ))}
                        </ul>
                        <p style={{ color: info.baseColor }}> Exposed To</p>
                        <ul className={Style.skills}>
                              {info.skills.exposedTo.map((skill, index) => (
                                    <li key={index}>
                                          <FontAwesomeIcon icon={getIcon(skill)} /> {skill}
                                    </li>
                              ))}
                        </ul>
                  </>
            );
      }

      function getIcon(technology) {
            switch (technology) {
                  case "HTML":
                        return faHtml5;
                  case "CSS":
                        return faCss3;
                  case "Vanilla Javascript":
                        return faJs;
                  case "React":
                        return faReact;
                  case "Wordpress":
                        return faWordpress;
                  case "Git":
                        return faGit;
                  case "Github":
                        return faGithub;
                  case "Figma":
                        return faFigma;
                  case "Node.js":
                        return faNodeJs;
                  default:
                        return null;
            }
      }
      function miscText() {
          return <>
               <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                  formations</p>
               <p><span style={{color: info.baseColor}}>formations <span
                  className={Style.green}>(main)</span> $</span> ls</p>
              <ul>
                   {info.formations.map((course, index) => (
                      <li key={index}><Box component={'span'} mr={'1rem'}>{course.emoji}</Box>{course.label}</li>
                  ))}
               </ul>
           </>;
      }

      return (
            <Box display={"flex"} flexDirection={"column"} alignItems={"center"} mt={"3rem"}>
                  <Terminal text={aboutMeText()} />
                  <Terminal text={skillsText()} />
                  <Terminal text={miscText()}/> 
            </Box>
      );
}
