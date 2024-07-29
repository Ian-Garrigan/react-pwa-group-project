/*Filename:Desserts.js*/

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Dessert(){

  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    var fetchData = async () => {
      var dessertList = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
      console.log(dessertList.data.meals);
      setDesserts(dessertList.data.meals);
    }

    fetchData();
  }, []);

  return(
    <Container fluid>
      <Row>
        <Col>
        <h1>Dessert API...</h1>
        </Col>

        <Col>

        </Col>
        <Row>
            {
              desserts.map(function (i, index) {
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

export default Dessert;