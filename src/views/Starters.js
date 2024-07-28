/*Filename:Starters.js*/

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Starters() {

  const [starters, setStarters] = useState([]);

  useEffect(() => {
    var fetchData = async () => {
      var startList = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter');
      setStarters(startList.data.meals);
      console.log(startList.data.meals);
    }

    fetchData();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Starters API call...</h1>
        </Col>
        <Col>

        </Col>
        <Row>
            {
              starters.map(function (i, index) {
                return (
                  <Card key={index} style={{ width: '18rem' }}>
                    <Card.Body>
                      <Card.Img variant="top" src={i.strMealThumb} />
                      <Card.Title>{i.strMeal}</Card.Title>
                      <Card.Text>
                        Meal ID: {i.idMeal}
                      </Card.Text>
                      <Button variant="primary">Go somewhere</Button>
                      <a href={`https://www.themealdb.com/meal/${i.idMeal}`} target='_blank'>Link</a>
                    </Card.Body>
                  </Card>
                );
              })
            }
        </Row>
      </Row>
    </Container>
  )
};

export default Starters;