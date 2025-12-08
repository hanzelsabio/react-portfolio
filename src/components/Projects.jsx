import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";

const cardData = [
  {
    id: 1,
    title: "DPT Inc. Website",
    heading: "HTML, CSS, JavaScript, Bootstrap",
    body: "One of my internship project, a static website design created for DPT Incorporated.",
    image: "../assets/DPTInc-Website.png",
    link: "https://dptincgenerator.vercel.app/",
    category: "static",
  },
  {
    id: 2,
    title: "Online Portfolio",
    heading: "React JS, Bootstrap",
    body: "My personal portfolio website",
    image: "../assets/Online-Portfolio.png",
    link: "",
    category: "static",
  },
  {
    id: 3,
    title: "IV Inventory System",
    heading: "PHP, JavaScript, Bootstrap, MySQL",
    body: "Personal project features inventory management system",
    image: "../assets/IV-Inventory-System.png",
    link: "",
    category: "dynamic",
  },
  {
    id: 4,
    title: "Brand Template",
    heading: "React JS, JavaScript, Tailwind CSS",
    body: "An e-commerce website template for products features a product display, shopping cart functionality, and a checkout process.",
    image: "../assets/Brand-Website.png",
    link: "https://brand-website-template.vercel.app/",
    category: "static",
  },
  {
    id: 5,
    title: "Fella Screen Prints",
    heading: "React JS, JavaScript, Tailwind CSS",
    body: "A custom apparel printing business features a dynamic website with service showcase.",
    image: "../assets/Fella-Web.png",
    link: "",
    category: "static",
  },
];

function Projects() {
  const [filter, setFilter] = useState("*");

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Filter cards based on category
  const filteredCards =
    filter === "*"
      ? cardData
      : cardData.filter((card) => card.category === filter);

  return (
    <section id="projects" className="projects section">
      <Container className="section-title text-center" data-aos="fade-up">
        <h2>Projects</h2>
      </Container>

      <Container>
        {/* Filter Buttons */}
        <ul
          className="projects-filters d-flex justify-content-center list-unstyled gap-3 mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li
            className={`filter-item ${filter === "*" ? "filter-active" : ""}`}
            onClick={() => handleFilterChange("*")}
            style={{ cursor: "pointer" }}
          >
            All
          </li>
          <li
            className={`filter-item ${
              filter === "static" ? "filter-active" : ""
            }`}
            onClick={() => handleFilterChange("static")}
            style={{ cursor: "pointer" }}
          >
            Static
          </li>
          <li
            className={`filter-item ${
              filter === "dynamic" ? "filter-active" : ""
            }`}
            onClick={() => handleFilterChange("dynamic")}
            style={{ cursor: "pointer" }}
          >
            Dynamic
          </li>
        </ul>

        {/* Card Grid */}
        <DynamicCardGrid cards={filteredCards} />
      </Container>
    </section>
  );
}

function ExampleModal({ show, handleClose, card }) {
  if (!card) return null; // no modal until a card is selected

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Header
        style={{
          color: "#fff",
          background: "#111",
          border: "none",
          borderRadius: "0",
        }}
        // closeButton
        // className="custom-modal-header"
        // closeVariant="white"
      >
        <Modal.Title className="px-2">{card.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body
        className="px-4"
        style={{ color: "#fff", background: "#111" }}
      >
        <p>{card.body}</p>
      </Modal.Body>
      <Modal.Footer
        style={{
          color: "#fff",
          background: "#111",
          border: "none",
          borderRadius: "0",
        }}
      >
        <Button
          onClick={handleClose}
          style={{ borderRadius: "0", border: "none", background: "none" }}
        >
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

function DynamicCardGrid({ cards }) {
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = (card) => {
    setSelectedCard(card);
    setShowModal(true);
  };

  return (
    <Row data-aos="fade-up" data-aos-delay="100">
      {cards.map((card) => (
        <Col key={card.id} sm={6} lg={4} className="mb-4">
          <Card style={{ border: "none", borderRadius: "0" }}>
            <Card.Img
              variant="top"
              src={card.image}
              alt={card.title}
              style={{ borderRadius: "0" }}
            />
            <Card.Body style={{ backgroundColor: "#000" }}>
              <Card.Title
                style={{
                  color: "#fff",
                  fontSize: "17px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 1, // limit to 1 line
                  WebkitBoxOrient: "vertical",
                }}
                className="mt-2 text-center"
              >
                {card.title}
              </Card.Title>

              <Card.Text
                style={{
                  color: "#fff",
                  fontSize: "13px",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2, // limit to 2 lines
                  WebkitBoxOrient: "vertical",
                }}
                className="text-center"
              >
                {card.heading}
              </Card.Text>
            </Card.Body>{" "}
            <Card.Body
              style={{
                backgroundColor: "#222",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <a
                href={card.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: "#df1529", textDecoration: "none" }}
              >
                Live Preview
              </a>
              <Button
                size="sm"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                onClick={() => handleShow(card)}
              >
                Show Info
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <ExampleModal
        show={showModal}
        handleClose={handleClose}
        card={selectedCard}
      />
    </Row>
  );
}

export default Projects;
