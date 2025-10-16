import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function About() {
  return (
    <section id="about_me" className="about_me section">
      <Container data-aos="fade-up" data-aos-delay="100">
        <Row className="gy-4">
          <Col md={6} lg={4} xl={4}>
            <img
              src="/assets/formal-pic.png"
              className="img-fluid"
              style={{ pointerEvents: "none" }}
              alt=""
            />
          </Col>

          <Col md={6} lg={8} xl={8}>
            <div className="about-me">
              <h4>About me</h4>
              <p>
                Hi there! I'm{" "}
                <span style={{ color: "#df1529" }}>Hanzel Sabio</span>
              </p>
              <p>
                Aspiring web developer. I have created graphics for websites,
                advertisements, and print media. Designed and built websites.
              </p>
              <Row className="justify-content-between gy-4">
                <Col lg={4}>
                  <h4>Nickname</h4>
                  <p>Zel</p>
                </Col>
                <Col lg={8}>
                  <h4>Education</h4>
                  <p>
                    Bachelor of Science in Information Technology
                    <br />
                    AMA Computer College - Fairview Campus
                    <br />
                    2019 - 2024
                  </p>
                </Col>
                <Col lg={4}>
                  <h4>Country</h4>
                  <p>Philippines</p>
                </Col>

                <Col lg={8}>
                  <h4>Let's Connect</h4>
                  <div className="social-icon d-flex align-items-center">
                    <a href="https://github.com/hanzelsabio" target="_blank">
                      <i className="bi bi-github flex-shrink-0"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hanzel-mark-sabio"
                      target="_blank"
                    >
                      <i className="bi bi-linkedin flex-shrink-0"></i>
                    </a>
                    {/* <a href="https://www.facebook.com/zelsabiow" target="_blank">
                        <i className="bi bi-facebook flex-shrink-0"></i>
                      </a>
                      <a href="https://www.instagram.com/zelsabiow" target="_blank">
                        <i className="bi bi-instagram flex-shrink-0"></i>
                      </a> */}
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
