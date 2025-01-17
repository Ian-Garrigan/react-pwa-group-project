//Filename: Wines.js
//Author: Rita O'Brien
//Date 4th August 2024

import { Link } from "react-router-dom";
import { Container, Col, Row, Button, } from "react-bootstrap";
import Drinks from "../components/WineCards";
import WinePairing from "../components/WinePairing";//component that controls API call to Spoonacular for wine pairing info

function Wines(){
  return(
    <Container fluid>
      <Row>
        <Col lg={3}>
        </Col>
        <Col lg={6}>
    
        <Drinks />
          
        </Col>
        <Col lg={3}>
        </Col>
      </Row>
      <Row>
        <Col lg={3}>
        </Col>
        <Col className="justify-content-center align-items-center text-center" lg={6}>
          <WinePairing />
          <Link to="/HelloChefBooking">
        <Button className="button">Proceed to booking</Button>
        </Link>
        <br></br>
        <br></br>
        <br></br>
        </Col>
        <Col lg={3}>
        </Col>
      </Row>
    </Container>
  )
};


export default Wines;