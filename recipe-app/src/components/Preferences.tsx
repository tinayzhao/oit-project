import React, { useState } from "react";
import { Form, Button, Dropdown, Nav } from 'react-bootstrap';
import { authProvider } from "./authProvider";
import {
    AzureAD,
    AuthenticationState,
    IAzureADFunctionProps
  } from "react-aad-msal";

const Preferences = () => {

    const [cuisine, setCuisine] = useState("");
    const [mealType, setMealType] = useState("");
    const [equipment, setEquipment] = useState("");
    const [diet, setDiet] = useState("");
    const [intolerances, setIntolerances] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        switch(e.currentTarget.name) {
        case "cuisine":
            setCuisine(val);
            break;
        case "mealType":
            setMealType(val);
        }
    };

    return (
        <AzureAD provider={authProvider} forceLogin={true}>
            {({ login, logout, accountInfo, authenticationState, error}: IAzureADFunctionProps) => {
                return (
                    <div>
                        <Nav className="justify-content-end">
                            <Nav.Item>
                                <Nav.Link onSelect={logout}>Sign Out</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <h1>Hello Tina 👋 Let's get to know you better.</h1>
                        <Form>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">What's your everyday cuisine?</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>African</Dropdown.Item>
                                    <Dropdown.Item>American</Dropdown.Item>
                                    <Dropdown.Item>British</Dropdown.Item>
                                    <Dropdown.Item>Cajun</Dropdown.Item>
                                    <Dropdown.Item>Caribbean</Dropdown.Item>
                                    <Dropdown.Item>Chinese</Dropdown.Item>
                                    <Dropdown.Item>Eastern European</Dropdown.Item>
                                    <Dropdown.Item>European</Dropdown.Item>
                                    <Dropdown.Item>French</Dropdown.Item>
                                    <Dropdown.Item>German</Dropdown.Item>
                                    <Dropdown.Item>Greek</Dropdown.Item>
                                    <Dropdown.Item>Indian</Dropdown.Item>
                                    <Dropdown.Item>Irish</Dropdown.Item>
                                    <Dropdown.Item>Italian</Dropdown.Item>
                                    <Dropdown.Item>Japanese</Dropdown.Item>
                                    <Dropdown.Item>Jewish</Dropdown.Item>
                                    <Dropdown.Item>Korean</Dropdown.Item>
                                    <Dropdown.Item>Latin American</Dropdown.Item>
                                    <Dropdown.Item>Mediterranean</Dropdown.Item>
                                    <Dropdown.Item>Mexican</Dropdown.Item>
                                    <Dropdown.Item>Middle Eastern</Dropdown.Item>
                                    <Dropdown.Item>Nordic</Dropdown.Item>
                                    <Dropdown.Item>Southern</Dropdown.Item>
                                    <Dropdown.Item>Spanish</Dropdown.Item>
                                    <Dropdown.Item>Thai</Dropdown.Item>
                                    <Dropdown.Item>Vietnamese</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">What meal type would you like?</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Main Course</Dropdown.Item>
                                    <Dropdown.Item>Side Dish</Dropdown.Item>
                                    <Dropdown.Item>Dessert</Dropdown.Item>
                                    <Dropdown.Item>Appetizer</Dropdown.Item>
                                    <Dropdown.Item>Salad</Dropdown.Item>
                                    <Dropdown.Item>Bread</Dropdown.Item>
                                    <Dropdown.Item>Breakfast</Dropdown.Item>
                                    <Dropdown.Item>Soup</Dropdown.Item>
                                    <Dropdown.Item>Beverage</Dropdown.Item>
                                    <Dropdown.Item>Sauce</Dropdown.Item>
                                    <Dropdown.Item>Marinade</Dropdown.Item>
                                    <Dropdown.Item>Fingerfood</Dropdown.Item>
                                    <Dropdown.Item>Snack</Dropdown.Item>
                                    <Dropdown.Item>Drink</Dropdown.Item>
                                    <Dropdown.Item>Japanese</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Form.Group controlId="formBasicEquipment">
                                <Form.Label>What kitchen equipment do you own?</Form.Label>
                                <Form.Control type="text" placeholder="Enter equipment" /> 
                            </Form.Group>

                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">Are you following any diets?</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Gluten Free</Dropdown.Item>
                                    <Dropdown.Item>Ketogenic</Dropdown.Item>
                                    <Dropdown.Item>Vegetarian</Dropdown.Item>
                                    <Dropdown.Item>Lacto-Vegetarian</Dropdown.Item>
                                    <Dropdown.Item>Ovo-Vegetarian</Dropdown.Item>
                                    <Dropdown.Item>Vegan</Dropdown.Item>
                                    <Dropdown.Item>Pescetarian</Dropdown.Item>
                                    <Dropdown.Item>Paleo</Dropdown.Item>
                                    <Dropdown.Item>Primal</Dropdown.Item>
                                    <Dropdown.Item>Whole30</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                            <Dropdown>
                                <Dropdown.Toggle variant="primary" id="dropdown-basic">Any food intolerances?</Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item>Diary</Dropdown.Item>
                                    <Dropdown.Item>Egg</Dropdown.Item>
                                    <Dropdown.Item>Gluten</Dropdown.Item>
                                    <Dropdown.Item>Grain</Dropdown.Item>
                                    <Dropdown.Item>Peanut</Dropdown.Item>
                                    <Dropdown.Item>Seafood</Dropdown.Item>
                                    <Dropdown.Item>Sesame</Dropdown.Item>
                                    <Dropdown.Item>Shellfish</Dropdown.Item>
                                    <Dropdown.Item>Soy</Dropdown.Item>
                                    <Dropdown.Item>Sulfite</Dropdown.Item>
                                    <Dropdown.Item>Tree Nut</Dropdown.Item>
                                    <Dropdown.Item>Wheat</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            
                            <Button variant="primary" type="submit">
                                Next
                            </Button>
                        </Form>
                    </div>
                );}}
        </AzureAD>
    );
}

export default Preferences;