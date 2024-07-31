/*Filename:Home.js*/

import { Link } from "react-router-dom";
import { Container, Col, Row, Button, } from "react-bootstrap";
import Cards from "../components/Cards";
import Cards2 from "../components/Cards2";

function Home(){
  return(
    <Container fluid>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <Cards />
        </Col>
        <Col lg={3}></Col>
      </Row>
      <Row>
        <Col lg={4}></Col>
        <Col className="justify-content-center align-items-center" lg={4}>
          <p className="heading text-underlined">Hello Chef</p>
          <ul>
            <li>Let us prepare a delicious meal for your special occassion in the comfort of your own home.</li>
            <br></br>
            <li>We look after the dinner, you enjoy the party!</li>
            <br></br>
          </ul>
        </Col>
        <Col lg={4}></Col>
      </Row>
      <Row>
        <Col lg={3}></Col>
          <Col lg={6}>
           <Cards2 />
          </Col>
        <Col lg={3}></Col>
      </Row>
      <Row>
        <Col lg={4}></Col>
        <Col lg={4} className="justify-content-center align-items-center">
        <p className="heading text-underlined">How it works</p>
        <ol>
          <li>Select your starter</li>
          <li>Select your main course</li>
          <li>Select your dessert</li>
          <li>Find the best wine to suit your meal</li>
          <li>Place your order and we will do the rest</li>
        </ol>
        <br></br>
        </Col>
        <Col lg={4}></Col>
      </Row>
      <Row className="text-center">
        <Col>  
        <Link to="/Starters">
          <Button className="button">Select Starter</Button>
          </Link>
          <br></br>
          <br></br>
        </Col>
      </Row>




  </Container>
  )};
/*

      
      
      
  </Container>
  )
};

export default Home;*/
export default Home;