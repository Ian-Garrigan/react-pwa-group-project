/*Filename:Wines.js*/

import { Container, Col, Row, Button, } from "react-bootstrap";
import Input from "../components/Input";
import Drinks from "../components/WineCards";

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
        <Col lg={4}>
        </Col>
        <Col className="justify-content-center align-items-center text-center" lg={4}>
          <p className="heading text-underlined">Wine Selector</p>
          <p>Make the occasion even more special with the right wine pairing for your meal.</p>
          <p>Please enter your main course selection in the box below</p>
          <Input />
          
        </Col>
        <Col lg={4}>
        </Col>
      </Row>
    </Container>
  )
};


export default Wines;