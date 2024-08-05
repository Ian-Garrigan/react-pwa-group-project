// Author Ian Garrigan 5th August

import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import BookingSection from "../components/BookingSection";

function HelloChefBooking() {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-underlined text-center mb-5">Select a Chef from our award-winning team</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          {/* Render the BookingSection component */}
          <BookingSection />
        </Col>
      </Row>
    </Container>
  );
}

export default HelloChefBooking;