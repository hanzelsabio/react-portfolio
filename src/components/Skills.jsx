import React from "react";

function Skills() {
  const skillsData = [
    { name: "HTML / CSS", value: 100 },
    { name: "JavaScript", value: 70 },
    // { name: "TypeScript", value: 20 },
    { name: "React JS", value: 30 },
    { name: "Tailwind CSS", value: 30 },
    { name: "Bootstrap", value: 100 },
    { name: "PHP", value: 70 },
    { name: "MySQL", value: 50 },
    { name: "Canva", value: 100, backgroundColor: "#eee" },
    { name: "Figma", value: 100, backgroundColor: "#eee" },
    { name: "MS Office", value: 100, backgroundColor: "#eee" },
    { name: "GITHUB / GIT", value: 100 },
    { name: "VS Code", value: 100 },
    { name: "Terminal", value: 100 },
  ];
  
  return (
    <section id="skills" className="skills">
      <div className="container section-title text-start" data-aos="fade-up">
        <h2>Skills</h2>
      </div>

      <div className="container skills-content skills-animation">
        <div className="row gy-4">
          {/* First Column */}
          <div className="col-lg-4">
            {skillsData.slice(0, 7).map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{
                      backgroundColor: skill.backgroundColor || "",
                      width: `${skill.value}%`,
                    }}
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Second Column */}
          <div className="col-lg-4">
            {skillsData.slice(7, 10).map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{
                      backgroundColor: skill.backgroundColor || "",
                      width: `${skill.value}%`,
                    }}
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Column */}
          <div className="col-lg-4">
            {skillsData.slice(10, 13).map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">
                  <span>{skill.name}</span> <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{
                      backgroundColor: skill.backgroundColor || "",
                      width: `${skill.value}%`,
                    }}
                    role="progressbar"
                    aria-valuenow={skill.value}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;