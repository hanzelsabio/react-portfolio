import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';

const cardData = [
  { id: 1, title: 'DPT Inc. Website', text: 'HTML, CSS, JavaScript, Bootstrap', image: '../assets/DPTInc-Website.png', link: 'https://dptincgenerator.vercel.app/', category: 'static' },
  { id: 2, title: 'Online Portfolio', text: 'HTML, CSS, JavaScript, Bootstrap', image: '../assets/Online-Portfolio.png', link: 'https://hanzelsabio.vercel.app', category: 'static' },
  { id: 3, title: 'IV Inventory System', text: 'PHP, JavaScript, Bootstrap, MySQL', image: '../assets/IV-Inventory-System.png', link: 'https://dptincgenerator.vercel.app/', category: 'dynamic' },
];

function Projects() {
  const [filter, setFilter] = useState('*');

  const handleFilterChange = (category) => {
    setFilter(category);
  };

  // Filter cards based on category
  const filteredCards =
    filter === '*' ? cardData : cardData.filter((card) => card.category === filter);

  return (
    <section id="projects" className="projects section">
      <Container className="section-title text-center" data-aos="fade-up">
        <h2>Projects</h2>
      </Container>

      <Container>
        {/* Filter Buttons */}
        <ul className="projects-filters d-flex justify-content-center list-unstyled gap-3 mb-4">
          <li
            className={`filter-item ${filter === '*' ? 'filter-active' : ''}`}
            onClick={() => handleFilterChange('*')}
            style={{ cursor: 'pointer' }}
          >
            All
          </li>
          <li
            className={`filter-item ${filter === 'static' ? 'filter-active' : ''}`}
            onClick={() => handleFilterChange('static')}
            style={{ cursor: 'pointer' }}
          >
            Static
          </li>
          <li
            className={`filter-item ${filter === 'dynamic' ? 'filter-active' : ''}`}
            onClick={() => handleFilterChange('dynamic')}
            style={{ cursor: 'pointer' }}
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
        style={{ color: '#fff', background: '#222', border: 'none', borderRadius: '0' }}
        // closeButton
        // className="custom-modal-header"
        // closeVariant="white"
      >
        <Modal.Title className="px-2">{card.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="px-4" style={{ color: '#fff', background: '#222' }}>
        <p>{card.text}</p>
      </Modal.Body>
      <Modal.Footer
        style={{ color: '#fff', background: '#222', border: 'none', borderRadius: '0' }}
      >
        <Button
          variant="secondary"
          onClick={handleClose}
          style={{ borderRadius: '0' }}
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
    <Row>
      {cards.map((card) => (
        <Col key={card.id} md={4} className="mb-4">
          <Card style={{ border: 'none', borderRadius: '0' }}>
            <Card.Img
              variant="top"
              src={card.image}
              alt={card.title}
              style={{ borderRadius: '0' }}
            />
            <Card.Body style={{ backgroundColor: '#000' }}>
              <Card.Title
                style={{ color: '#fff', fontSize: '17px' }}
                className="mt-2 text-center"
              >
                {card.title}
              </Card.Title>
              <Card.Text
                style={{ color: '#fff', fontSize: '13px' }}
                className="text-center"
              >
                {card.text}
              </Card.Text>
            </Card.Body>
            <Card.Body
              style={{
                backgroundColor: '#222',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <a
                href={card.link}
                target="_blank"
                rel="noreferrer"
                style={{ color: '#df1529', textDecoration: 'none' }}
              >
                Live Preview
              </a>
              <Button
                size="sm"
                style={{
                  backgroundColor: 'transparent',
                  border: 'none',
                }}
                onClick={() => handleShow(card)}
              >
                Show Info
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
      <ExampleModal show={showModal} handleClose={handleClose} card={selectedCard} />
    </Row>
  );
}

export default Projects;