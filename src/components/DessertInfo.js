// Author: Ian Garrigan
//Date 5th August 2024
//Filename: DessertInfo.js


// This file contains the component for displaying the desserts available

import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Row, Col, Card, Container } from 'react-bootstrap';
import CountryButtons from './CountryButtons';

function DessertInfo() {
    const [desserts, setDesserts] = useState([]);
    const [countryDesserts, setCountryDesserts] = useState([]);
    const [error, setError] = useState(null);
    const [selectedDessert, setSelectedDessert] = useState(null);
    const [showCountry, setShowCountry] = useState(false);
    const [country, setCountry] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dessertList = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Dessert');
                setDesserts(dessertList.data.meals);
            } catch (error) {
                setError('Could not retrieve desserts information. Please try again!');
            }
        };
        fetchData();
    }, []);

    const handleSelection = (e, dessertName) => {
        e.preventDefault();
        setSelectedDessert(dessertName);
    };

    const fetchCountryDesserts = async (country) => {
        try {
            const response = await axios.get('https://api.spoonacular.com/recipes/search', {
                params: {
                    query: country,
                    type: 'dessert',
                    apiKey: 'd43532917aa549bfbaf75ff1d5de62b9',
                }
            });
            setCountryDesserts(response.data.results);
            setShowCountry(true);
            setCountry(country);
        } catch (error) {
            setError(`Could not retrieve ${country} desserts information. Please try again!`);
        }
    };

    const showAllDesserts = () => {
        setShowCountry(false);
    };

    return (
        <Container fluid>
            <CountryButtons
                fetchCountryDesserts={fetchCountryDesserts}
                showAllDesserts={showAllDesserts}
                showCountry={showCountry}
            />
            <Row>
                {(showCountry ? countryDesserts : desserts).map((dessert, index) => (
                    <Col key={index} className="d-flex justify-content-center">
                        {selectedDessert && (
                            <div className="selectedDessertMessage">
                                Added {showCountry ? dessert.title : dessert.strMeal} to your menu
                            </div>
                        )}
                        <Card
                            className="starter-card text-center mt-2 mb-2"
                            style={{ width: "18rem" }}
                        >
                            <Card.Body>
                                <Card.Img
                                    variant="top"
                                    src={
                                        showCountry
                                            ? `https://spoonacular.com/recipeImages/${dessert.id}-312x231.jpg`
                                            : dessert.strMealThumb
                                    }
                                />
                                <Card.Title>
                                    {showCountry ? dessert.title : dessert.strMeal}
                                </Card.Title>
                                <Card.Text>
                                    {error && <div className="alert">{error}</div>}
                                </Card.Text>
                                <a
                                    href={
                                        showCountry
                                            ? `https://spoonacular.com/recipes/${dessert.title}-${dessert.id}`
                                            : `https://www.themealdb.com/meal/${dessert.idMeal}`
                                    }
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <Button className="button">Try it Yourself!</Button>
                                </a>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default DessertInfo;