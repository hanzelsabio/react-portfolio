import React from "react";
import { Container, Row, Col } from 'react-bootstrap';

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
      <Container className="section-title text-start" data-aos="fade-up">
        <h2>Skills</h2>
      </Container>

      <Container className="skills-content skills-animation" data-aos="fade-up" data-aos-delay="100">
        <Row className="gy-4">
          {/* First Column */}
          <Col lg={4}>
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
          </Col>

          {/* Second Column */}
          <Col lg={4}>
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
          </Col>

          {/* Third Column */}
          <Col lg={4}>
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;