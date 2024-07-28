/*Filename:Mains.js*/

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import axios from "axios";

function Mains() {

  const [categories, setCategories] = useState([]);
  const [selectedItem, setItem] = useState("");

  useEffect(() => {
    var fetchData = async () => {
      var catList = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
      //Remove Starters & Desserts from dropdown selection
      const excludedCategories = ['Starter', 'Dessert'];
      const filteredCategories = catList.data.categories.filter(
        category => !excludedCategories.includes(category.strCategory)
      );

      setCategories(filteredCategories);
      console.log(filteredCategories);
    }

    fetchData();
  }, []);

  console.log({selectedItem});

  return (
    <Container fluid>
      <Row>
        <Col>
          <h1>Mains API call...</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <select value={selectedItem} onChange={e => setItem(e.target.value)}>
            <option value="def">Please select an option</option>
            {
              categories.map(function (i, index) {
                return (
                  <option key={index} value={i.strCategory}>{i.strCategory}</option>
                );
              })
            }
          </select>
          <p>Your Choice: {selectedItem}</p>
        </Col>
      </Row>
    </Container>
  )
};

export default Mains;