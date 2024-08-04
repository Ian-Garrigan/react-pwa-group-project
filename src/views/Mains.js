/*Filename:Mains.js*/
//Author: Conor Mulvihill
//Date 4th August 2024

import { Row, Col, Button } from 'react-bootstrap';
import Mains_cards from '../components/Mains_cards';
import { Link } from "react-router-dom";

function Mains() {

  return (
    <div>
      <h2 className='heading text-underlined text-center'>Our Mains & Sides</h2>
      <Mains_cards />
      <br></br>
      <br></br>
      <Row className="text-center">
        <Col>  
        <Link to="/Desserts">
          <Button className="button">See Desserts</Button>
          </Link>
          <br></br>
          <br></br>
        </Col>
      </Row>
    </div>
    
  )
};

export default Mains;