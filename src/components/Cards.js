import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Cards = () => {
  const cards = [
    { id: 1, img: require ('../images/chef1.png') },
    { id: 2, img: require ('../images/chef2.png')  },
    { id: 3, img: require ('../images/chef3.png')  },
    // Add more cards as needed
  ];

  return (
    <Container>
      <Row>
        {cards.map(card => (
          <Col key={card.id} sm={12} md={6} lg={4} className="mb-4">
            <Card className="custom-card">
              <Card.Img variant="top" src={card.img} />
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Cards;
