import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Drinks = () => {
  const cards = [
    { id: 3, img: require ('../images/wine1.png')  },
    { id: 6, img: require ('../images/wine2.png')  },
    { id: 4, img: require ('../images/wine3.png')  }
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

export default Drinks;
