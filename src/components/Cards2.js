import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Cards2 = () => {
  const cards = [
    { id: 1, img: require ('../images/chef4.png') },
    { id: 2, img: require ('../images/chef5.png')  },
    { id: 3, img: require ('../images/chef6.png')  },
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

export default Cards2;
