import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Skills() {
  const skillsData = [
    { name: "HTML / CSS", value: 100 },
    { name: "JavaScript", value: 70 },
    { name: "React JS", value: 30 },
    { name: "Node JS", value: 100 },
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll(".progress-bar");
            bars.forEach((bar) => {
              const value = bar.getAttribute("aria-valuenow");
              bar.style.transition = "width 1.5s ease-in-out";
              bar.style.width = `${value}%`;
            });
            observer.unobserve(entry.target); // Run once
          }
        });
      },
      { threshold: 0.4 } // 40% visible before triggering
    );

    const targets = document.querySelectorAll(".skills-animation");
    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills">
      <Container className="section-title text-start" data-aos="fade-up">
        <h2>Skills</h2>
      </Container>

      <Container
        className="skills-content skills-animation"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <Row className="gy-4">
          {/* First Column */}
          <Col lg={4}>
            {skillsData.slice(0, 8).map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">
                  <span>{skill.name}</span>{" "}
                  <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{
                      backgroundColor: skill.backgroundColor || "",
                      width: "0%", // start hidden
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
            {skillsData.slice(8, 11).map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">
                  <span>{skill.name}</span>{" "}
                  <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{
                      backgroundColor: skill.backgroundColor || "",
                      width: "0%",
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
            {skillsData.slice(11, 14).map((skill, index) => (
              <div className="progress" key={index}>
                <span className="skill">
                  <span>{skill.name}</span>{" "}
                  <i className="val">{skill.value}%</i>
                </span>
                <div className="progress-bar-wrap">
                  <div
                    className="progress-bar"
                    style={{
                      backgroundColor: skill.backgroundColor || "",
                      width: "0%",
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
}

export default Skills;
