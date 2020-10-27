import React, { useState } from "react";
import { Form, Button, Dropdown } from 'react-bootstrap';

const Preferences = () => {
    return (
        <div>
        <h1>Hello Tina. Let's get to know you better.</h1>
            <Form>
                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">What's your everyday cuisine?</Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">African</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">American</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">British</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Cajun</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Caribbean</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Chinese</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Eastern European</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">European</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">French</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">German</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Greek</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Indian</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Irish</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Italian</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Japanese</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Jewish</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Korean</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Latin American</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Mediterranean</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Mexican</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Middle Eastern</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Nordic</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Southern</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Thai</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Vietnamese</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">What meal type would you like?</Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Main Course</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Side Dish</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Dessert</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Appetizer</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Salad</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Bread</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Breakfast</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Soup</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Beverage</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Sauce</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Marinade</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Fingerfood</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Snack</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Drink</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Japanese</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Form.Group controlId="formBasicEmail">
                    <Form.Label>What kitchen equipment do you own?</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" /> 
                </Form.Group>

                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">Are you following any diets?</Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Gluten Free</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Ketogenic</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Vegetarian</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Lacto-Vegetarian</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Ovo-Vegetarian</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Vegan</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Pescetarian</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Paleo</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Primal</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Whole30</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle variant="primary" id="dropdown-basic">Any food intolerances?</Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Diary</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Egg</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Gluten</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Grain</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Peanut</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Seafood</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Sesame</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Shellfish</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Soy</Dropdown.Item>
                        <Dropdown.Item href="#/action-1">Sulfite</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Tree Nut</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Wheat</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                
                <Button variant="primary" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    );
}

export default Preferences;