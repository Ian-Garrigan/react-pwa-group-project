// Author: Ian Garrigan
//Date 5th August 2024
//Filename: CountryButtons.js

import { Col, Button, Row } from 'react-bootstrap';

function CountryButtons({ fetchCountryDesserts, showAllDesserts, showCountry }) {
    const countries = [
        'french', 'american', 'italian', 'spanish', 'german', 'japanese', 'english'
    ];

    return (
        <Row className="justify-content-around text-center m-4 p-2">
            {!showCountry ? (
                countries.map(country => (
                    <Col key={country}>
                        <Button className="button" onClick={() => fetchCountryDesserts(country)}>
                            {country.charAt(0).toUpperCase() + country.slice(1)}
                        </Button>
                    </Col>
                ))
            ) : (
                <Col>
                    <Button className="button" onClick={showAllDesserts}>
                        Show All Desserts
                    </Button>
                </Col>
            )}
        </Row>
    );
}

export default CountryButtons;
