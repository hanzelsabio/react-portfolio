import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Contact() {
  const contacts = [
    {
      icon: "bi-telephone",
      title: "Mobile",
      text: "+639669238157",
    },
    {
      icon: "bi-envelope",
      title: "Email",
      text: "zeluckgt01@gmail.com",
      link: "mailto:zeluckgt01@gmail.com",
    },
    {
      icon: "bi bi-linkedin",
      title: "LinkedIn",
      text: "hanzel-mark-sabio",
      link: "https://www.linkedin.com/in/hanzel-mark-sabio",
    },
    {
      icon: "bi-file-earmark-text",
      title: "Updated Resume",
      text: "Hanzel Sabio - Resume",
      link: "/assets/hanzel-sabio-resume.pdf",
    },
  ];

  return (
    <section id="contact" className="contact section">
      <Container className="section-title text-end" data-aos="fade-up">
        <h2>Contact</h2>
      </Container>

      <Container data-aos="fade-up" data-aos-delay="100">
        <div className="info-wrap" data-aos="fade-up" data-aos-delay="200">
          <Row className="gy-5">
            {contacts.map((item, index) => (
              <Col md={6} lg={4} xl={3} key={index}>
                <div className="info-item d-flex align-items-center">
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className={`bi ${item.icon} flex-shrink-0`}></i>
                    </a>
                  ) : (
                    <i className={`bi ${item.icon} flex-shrink-0`}></i>
                  )}
                  <div>
                    <h3>{item.title}</h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <p>{item.text}</p>
                      </a>
                    ) : (
                      <p>{item.text}</p>
                    )}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
