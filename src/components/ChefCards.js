import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';

function ChefCards({ chefs, onSelectChef }) {
  return (
    <Col md={4} className="mb-4">
      <Card>
        <Card.Img variant="top" src={chefs.img} />
        <Card.Body>
          <Card.Title>{chefs.name}</Card.Title>
          <Card.Text>
            Recipes: <b>{chefs.recipesCount}</b>
          </Card.Text>
          <Card.Text>
            Cuisine: <b>{chefs.cuisine}</b>
          </Card.Text>
          <Button className="button" onClick={() => onSelectChef(chefs)}>
            Select Chef
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ChefCards;