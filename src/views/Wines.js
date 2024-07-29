/*Filename:Wines.js*/

import { Container, Col, Row, Button, } from "react-bootstrap";
import Drinks from "../components/WineCards";
import WinePairing from "../components/WinePairing";

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
          <WinePairing />
        </Col>
        <Col lg={4}>
        </Col>
      </Row>
    </Container>
  )
};


export default Wines;