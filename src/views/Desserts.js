// Author: Ian Garrigan
//Date 5th August 2024
//Filename: Desserts.js


import { Row, Col, Button, Container } from "react-bootstrap";
import DessertInfo from "../components/DessertInfo";
import { Link } from "react-router-dom";

function Desserts() {
return (
    <Container fluid>
      <Row>
        <Col lg={2}></Col>
        <Col lg={8}>
          <h1 className="heading text-underlined text-center">Our Desserts</h1>
          <DessertInfo /> {/* all desserts available */}
        </Col>
        <Col lg={3}></Col>
      </Row>
      <Row className="text-center">
        <Col>
          <Link to="/Booking">
            <Button className="button">Book Now</Button> {/* redirect to bookings page btn */}
          </Link>
          <br></br>
          <br></br>
        </Col>
      </Row>
    </Container>
  );
}

export default Desserts;
