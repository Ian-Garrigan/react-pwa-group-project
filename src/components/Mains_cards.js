//Author: Conor Mulvihill
//Date 4th August 2024

import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

function Mains_cards() {

    const [categories, setCategories] = useState([]);
    const [selectedItem, setItem] = useState("");
    const [itemList, setItemList] = useState([]);
    const [error, setError] = useState(null);

    // Function that calls API on page loading, retrieves food API for starters from thmealdb
    useEffect(() => {
        try {
            var fetchData = async () => {
                var catList = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php');
                //Remove Starters & Desserts from dropdown selection
                const excludedCategories = ['Starter', 'Dessert'];
                const filteredCategories = catList.data.categories.filter(
                    category => !excludedCategories.includes(category.strCategory)
                );
                setCategories(filteredCategories);
            }

            fetchData();
        } catch (error) {
            setError('Could not retrieve mains information. Please try again!');
        }

    }, []);

    // Function that handles submit from dropdown, filters API call to mealdb from selection.
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            var response = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=', { params: { c: selectedItem } });
        setItemList(response.data.meals);
        } catch (error) {
            setError('Could not retrieve information. Please try again!');
        }
    }
    return (
        <Container fluid>
            <Row>
                <Col lg={3}></Col>
                <Col className="justify-content-center align-items-center text-center" lg={6}>
                    <h2 className="text-center">Select from our wide range of categories: </h2>
                    {/* error message div */}
                    {error && <div className="alert">{error}</div>}
                    <select className="" value={selectedItem} onChange={e => setItem(e.target.value)}>
                        <option value="def">Please select an option</option>
                        {
                            categories.map(function (i, index) {
                                return (
                                    <option key={index} value={i.strCategory}>{i.strCategory}</option>
                                );
                            })
                        }
                    </select>
                </Col>
                <Col lg={3}></Col>
            </Row>
            <Row>
            <Col lg={3}></Col>
            <Col className="mt-1 justify-content-center align-items-center text-center" lg={6}><Button className="button" onClick={handleSubmit}>Search</Button></Col>
            <Col lg={3}></Col>
            </Row>
            <Row>
                <Col lg={3}></Col>
                <Col lg={6}>
                    <Row>
                        {
                            itemList.map(function (i, index) {
                                return (
                                    <Col key={index}>
                                        <Card className="starter-card text-center mt-2 mb-2" style={{ width: '18rem' }}>
                                            <Card.Body>
                                                <Card.Img variant="top" src={i.strMealThumb} />
                                                <Card.Title>{i.strMeal}</Card.Title>
                                                <Card.Text>
                                                    {error && <div className="alert">{error}</div>}
                                                </Card.Text>
                                                <a href={`https://www.themealdb.com/meal/${i.idMeal}`} target='_blank'>
                                                    <Button className="button">
                                                        Try it Yourself!
                                                    </Button>
                                                </a>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Col>
                <Col lg={3}></Col>
            </Row>
        </Container>
    );
}

export default Mains_cards;