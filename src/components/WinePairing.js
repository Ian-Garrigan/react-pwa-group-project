//Filename: WinePairing.js
//Author: Rita O'Brien
//Date 4th August 2024

import React, { useState } from 'react'; //for managing state management
import axios from 'axios'; //for API call to Spoonacular
import { Button, Card, Row, Col, Container } from 'react-bootstrap';//bootstrap
import redwine from "../images/redwine.jpg"
import whitewine from "../images/whitewine.jpg"

const WinePairing = () => {
    const [food, setFood] = useState('beef'); //holds the mains chosen by the user, defaults to beef
    const [winePairing, setWinePairing] = useState(null); //stores the response from the API call to Spoonacular
    const [error, setError] = useState(null);//stores error message if the API call fails
    const [selectedWine, setSelectedWine] = useState(null);//stores the wine that the user selects

    //call to Spoonacular API for the wine pairing - the food string selected by the user is input into the call
    const getWinePairing = async () => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/food/wine/pairing`, {
                params: {
                    food: food,
                    apiKey: 'd43532917aa549bfbaf75ff1d5de62b9'  // Spoonacular API key
                }
            });
            setWinePairing(response.data);//successful API call results in response data being updated
            setError(null);//any errors are reset
        } catch (err) {
            setError('Could not fetch wine pairing information.');
            setWinePairing(null);//handles an API call failure - message to user and wine pairing info cleared
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getWinePairing();//makes API call
    };

    const handleWineSelect = (wine) => {
        setSelectedWine(null);
        setSelectedWine(wine);//updates with the wine selected by the user
        
    };

    const handleFoodSelect = (selectedFood) => {
        setFood(selectedFood);//stores mains selected by the user
        setWinePairing(null); //if the user changes their mains selection, the wine info displayed for their previous choice is cleared from the results box as well as any wine selected by the user
        setSelectedWine(null);
    };
    
    //text from the API call didn't read very well in some cases
    //missing images or poor images for some results 
    //switch statement handles the display info given to the user based on their food selection along with generic image based on red or white wine suitability
    const getFoodMessage = () => {
        switch (food) {
            case 'beef':
                return (
                    <div>
                        <p className="heading text-underlined">Beef</p>
                        <p>Pinot Noir, Merlot, and Cabernet Sauvignon are our top picks for beef. Beef and red wine are a classic combination. Generally, leaner cuts of beef go well with light or medium-bodied reds, such as pinot noir or merlot, while fattier cuts can handle a bold red, such as cabernet sauvignon.</p>
                        <img src={redwine} alt="Red Wine" width="200" />
                    </div>
                );
            case 'lamb':
                return (
                    <div>
                        <p className="heading text-underlined">Lamb</p>
                        <p>Bold red wines with smoother tannins complement lamb's delicate flavour.</p>
                        <img src={redwine} alt="Red Wine" width="200" />
                    </div>
                );
            case 'chicken':
                return (
                    <div>
                        <p className="heading text-underlined">Chicken</p>
                        <p>White meat is typically paired with white wine as to not overpower the flavor of the meat, so chardonnay and sauvignon blanc are the best choices.</p>
                        <img src={whitewine} alt="White Wine" width="200" />
                    </div>
                );
           case 'seafood':
                return (
                    <div>
                        <p className="heading text-underlined">Seafood</p>
                        <p>Seafood works really well with white wine. A crisp, light-bodied white wine or a sparkling white wine will do the trick and not drown out any subtle flavors.</p>
                        <img src={whitewine} alt="White Wine" width="200" />
                    </div>
                );
            default:
                return "";
        }
    };

    return (
        <Container fluid>
            <Row>
                <p className="heading text-underlined">Wine Pairing</p>
                <p>Make the occasion even more special with the right wine pairing for your meal.</p>
                <ol className="ol">
                    <li>Select your <strong>Mains</strong> from the drop-down menu</li>
                    <li>Click <strong>Find Wine</strong> to see expert recommendations</li>
                    <li>Click <strong>Select Wine</strong> to add your choice to the menu</li>
                </ol>
                <form onSubmit={handleSubmit}>
                   <div className="form-group">
                        <select className="input" onChange={(e) => handleFoodSelect(e.target.value)} value={food}>
                            <option className="option" value="beef">Beef</option>
                            <option className="option" value="lamb">Lamb</option>
                            <option className="option" value="chicken">Chicken</option>
                            <option className="option" value="seafood">Seafood</option>
                        </select><br></br>
                        <br></br>
                        <Button type="submit" className="button">Find Wine</Button>
                        <br></br>
                    </div>
                    <br></br>
                </form>
                {error && <div className="alert">{error}</div>}
            </Row>
            <Row>
                <Col> 
                {winePairing && (
                <div>
                    <Card className="card-fixed-size">
                    <p>{getFoodMessage()}</p>
                    {winePairing.productMatches && winePairing.productMatches.map((wine) => (
                            <div className="col" key={wine.id}>
                                <div >
                                    <div >
                                        <p className="heading text-underlined">Our expert's choice</p>
                                        <p className="text-underlined">{wine.title}</p>
                                        {wine.description}
                                        <br></br>
                                        <br></br>
                                        <Button className="button-margin" onClick={() => handleWineSelect(wine)}>
                                            Select Wine
                                        </Button>
                                        <Button className="button" onClick={() => getWinePairing()}>
                                            Alternative option for {food} 
                                        </Button>
                                    </div>
                                </div>
                            </div>
                    ))}<br></br>
                    {selectedWine && (
                        <p className="winechoice">Your selected wine is <br></br><strong>{selectedWine.title}</strong></p>
            )}
            </Card>
        </div>
                
            )}
            
                </Col>
                </Row>
            
            <br></br>
            
            <br></br>
            
        </Container>
    );
};

export default WinePairing;
