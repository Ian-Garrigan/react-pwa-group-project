/*Filename:Starters.js*/
//Author: Conor Mulvihill
//Date 4th August 2024

import { Container, Row, Col, Button } from 'react-bootstrap';
import Starters_cards from '../components/Starters_cards';
import { Link } from "react-router-dom";

function Starters() {


  return (
    <Container fluid>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
        <p className='heading text-underlined text-center'>Our Starters</p>
          <Starters_cards />
        </Col>
        <Col lg={3}></Col>
      </Row>
      <Row className="text-center">
        <Col>  
        <Link to="/Mains">
          <Button className="button">See Mains</Button>
          </Link>
          <br></br>
          <br></br>
        </Col>
      </Row>
    </Container>
  )
};

export default Starters;