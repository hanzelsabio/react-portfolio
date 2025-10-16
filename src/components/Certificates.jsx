import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Certificates() {
  const certificates = [
    {
      title: "Google IT Support",
      subtitle: "Technical Support Fundamentals",
      image: "/assets/google-cert-tech.png",
      link: "https://coursera.org/share/371f36ce19a7eb2f3e41a65680e27714",
    },
    {
      title: "IBM IT Support",
      subtitle: "Introduction to Technical Support",
      image: "/assets/ibm-intro-tech.png",
      link: "https://www.coursera.org/verify/O4T1D33MABBE",
    },
    {
      title: "Zuitt",
      subtitle: "Basic Web Development Workshop",
      image: "/assets/zuitt-cert.png",
      link: "https://www.facebook.com/zuitttechcareer/",
    },
  ];

  return (
    <section id="certificates" className="certificates section">
      <Container className="section-title" data-aos="fade-up">
        <h2>Certificates</h2>
        <p style={{ color: "#717171" }}>
          A commitment to continuous learning and improvement.{" "}
          <a
            href="../certificates.html#certificates"
            style={{ color: "#df1529" }}
          >
            See more
          </a>
        </p>
      </Container>

      <Container>
        <Row
          className="gy-4 isotope-container"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {certificates.map((cert, index) => (
            <Col md={6} lg={4} className="certificates-item" key={index}>
              <img
                src={cert.image}
                className="img-fluid"
                style={{ pointerEvents: "none" }}
                alt={cert.title}
              />
              <div className="certificates-info">
                <h4>{cert.title}</h4>
                <p>{cert.subtitle}</p>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="More Details"
                  className="details-link"
                >
                  <i className="bi bi-link-45deg"></i>
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Certificates;
