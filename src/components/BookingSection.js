// Filename: BookingSection.js
import React from "react";
import { Row, Container } from "react-bootstrap";
import ChefCards from "./ChefCards";

// Import images
import chefOne from '../images/chef-one.jpg';
import chefTwo from '../images/chef-two.jpg';
import chefThree from '../images/chef-three.jpg';
import chefFour from '../images/chef-four.jpg';
import chefFive from '../images/chef-five.jpg';
import chefSix from '../images/chef-six.jpg';

function BookingSection() {
  // List of chefs with imported images
  const HelloChefs = [
    {
      name: "Chef Muhammad",
      img: chefFive,
      recipesCount: "14",
      cuisine: "French",
    },
    {
      name: "Chef Darren",
      img: chefFour,
      recipesCount: "05",
      cuisine: "Japanese",
    },
    {
      name: "Chef Joe",
      img: chefOne,
      recipesCount: "11",
      cuisine: "Italian",
    },
    {
      name: "Chef Brian",
      img: chefSix,
      recipesCount: "06",
      cuisine: "Spanish",
    },
    {
      name: "Chef Conor",
      img: chefThree,
      recipesCount: "07",
      cuisine: "German",
    },
    {
      name: "Chef Andrew",
      img: chefTwo,
      recipesCount: "15",
      cuisine: "Indian",
    },
  ];

  return (
    <Container>
      <h1 className="title">Our Top Chefs</h1>
      <Row>
      {HelloChefs.map((chef) => (
          <ChefCards key={chef.name} chefs={chef} />
        ))}
      </Row>
    </Container>
  );
}

export default BookingSection;