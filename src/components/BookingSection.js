// Filename: BookingSection.js
// Author Ian Garrigan 5th August
import React, { useState } from "react";
import { Row, Container } from "react-bootstrap";
import ChefCards from "./ChefCards";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";


// Import images
import chefOne from '../images/chef-one.jpg';
import chefTwo from '../images/chef-two.jpg';
import chefThree from '../images/chef-three.jpg';
import chefFour from '../images/chef-four.jpg';
import chefFive from '../images/chef-five.jpg';
import chefSix from '../images/chef-six.jpg';

function BookingSection() {

    const [selectedChef, setSelectedChef] = useState(null);
    
    // List of chefs with imported images
    const HelloChefs = [
      {
        name: "Chef Muhammad",
        img: chefFive,
        recipesNum: "14",
        cuisine: "Indian",
      },
      {
        name: "Chef Darren",
        img: chefFour,
        recipesNum: "05",
        cuisine: "Japanese",
      },
      {
        name: "Chef Joseph",
        img: chefOne,
        recipesNum: "11",
        cuisine: "Italian",
      },
      {
        name: "Chef Brian",
        img: chefSix,
        recipesNum: "06",
        cuisine: "Spanish",
      },
      {
        name: "Chef Conor",
        img: chefThree,
        recipesNum: "07",
        cuisine: "German",
      },
      {
        name: "Chef Andrew",
        img: chefTwo,
        recipesNum: "15",
        cuisine: "French",
      },
    ];
  
    const handleSelectChef = (chef) => {
        if (selectedChef) {
          toast.error("A chef is already selected. Please reload the page to select a different chef.");
        } else {
          setSelectedChef(chef);
          toast.success(`Chef ${chef.name} has been booked!`);
        }
      };
  
    return (
      <Container>
        <h1 className="heading text-underlined text-center">Our Top Chefs</h1>
        <Row>
          {HelloChefs.map((chef) => (
            <ChefCards key={chef.name} chefs={chef} onSelectChef={handleSelectChef} />
          ))}
        </Row>
        <ToastContainer />
      </Container>
    );
  }
  
  export default BookingSection;