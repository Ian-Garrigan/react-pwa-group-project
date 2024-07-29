import React, { useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

const WinePairing = () => {
    const [food, setFood] = useState('steak'); 
    const [winePairing, setWinePairing] = useState(null);
    const [error, setError] = useState(null);
    const [selectedWine, setSelectedWine] = useState(null);
    

    const getWinePairing = async () => {
        try {
            const response = await axios.get(`https://api.spoonacular.com/food/wine/pairing`, {
                params: {
                    food: food,
                    apiKey: 'd43532917aa549bfbaf75ff1d5de62b9'  //Spoonacular API key
                }
            });
            setWinePairing(response.data);
            setError(null);
        } catch (err) {
            setError('Could not fetch wine pairing information.');
            setWinePairing(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getWinePairing();
    };

    const handleWineSelect = (wine) => {
        setSelectedWine(wine);
    };

    const handleFoodSelect = (selectedFood) => {
        setFood(selectedFood);
    };

    return (
        <div className="container">
            <div>
                <p className="heading text-underlined">Wine Pairing</p>
                <p>Make the occasion even more special with the right wine pairing for your meal.</p>
                <ol>
                    <li>Select your main course from the drop-down menu</li>
                    <li>Click <strong>Find Wine</strong> to see expert recommendations</li>
                    <li>Click <strong>Select Wine</strong> to add your choice to the menu</li>
                </ol>
                <form onSubmit={handleSubmit} className="form">
                    <div className="form-group">
                    </div>
                    <div className="form-group">
                        <select onChange={(e) => handleFoodSelect(e.target.value)} value={food}>
                            <option value="steak">Steak</option>
                            <option value="lamb">Lamb</option>
                            <option value="chicken">Chicken</option>
                            <option value="fish">Fish</option>
                            <option value="seafood">Seafood</option>
                        </select><br></br>
                        <br></br>
                        <Button type="submit" className="button">Find Wine</Button>
                        <br></br>
                      
                    </div>
                    <br></br>
                </form>
            </div>
            <br></br>
            {error && <div className="alert">{error}</div>}
            {winePairing && (
                <div>
                    <div className="row">
                        {winePairing.productMatches && winePairing.productMatches.map((wine) => (
                            <div className="col" key={wine.id}>
                                <div className="card">
                                    <div className="card-body">
                                        <p className="heading text-underlined">{wine.title}</p>
                                        <p>{wine.description}</p>
                                        <Button
                                            className="button"
                                            onClick={() => handleWineSelect(wine)}
                                        >
                                            Select Wine
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
            <br></br>
            {selectedWine && (
                    
                    <p>Your menu choice is <strong>{selectedWine.title}</strong></p>
                    
            )}
        </div>
    );
};

export default WinePairing;
