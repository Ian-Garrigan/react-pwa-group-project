//Author: Conor Mulvihill
//Date 4th August 2024

import { useEffect, useState } from "react";
import axios from "axios";
import { Button, Row, Col, Card } from 'react-bootstrap';

function Starters_cards() {
    const [starters, setStarters] = useState([]);
    const [error, setError] = useState(null);

    // Function that calls API on page loading, retrieves food API for starters from thmealdb
    useEffect(() => {
        try {
            var fetchData = async () => {
                var startList = await axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Starter');
                setStarters(startList.data.meals);
            }

            fetchData();

        } catch (error) {
            setError('Could not retrieve starters information. Please try again!');
        }

    }, []);

    return (
        <div>
            <Row>
                {
                    starters.map(function (i, index) {
                        return (
                            <Col key={index}>
                                <Card className="starter-card text-center mt-2 mb-2" style={{ width: '18rem' }}>
                                    <Card.Body>
                                        <Card.Img variant="top" src={i.strMealThumb} />
                                        <Card.Title>{i.strMeal}</Card.Title>
                                        <Card.Text>
                                        {/* error message div */}
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
        </div>
    );
}

export default Starters_cards