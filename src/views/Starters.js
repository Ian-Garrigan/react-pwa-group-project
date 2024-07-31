/*Filename:Starters.js*/

import { Container, Row, Col } from 'react-bootstrap';
import Starters_cards from '../components/Starters_cards';

function Starters() {


  return (
    <Container fluid>
      <Row>
        <Col lg={3}></Col>
        <Col lg={6}>
          <Starters_cards />
        </Col>
        <Col lg={3}></Col>
      </Row>
    </Container>
  )
};

export default Starters;