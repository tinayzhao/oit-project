import React, { Component } from "react";
import { Form, Button, Dropdown, Nav, Row, Col } from 'react-bootstrap';
import { authProvider } from "./authProvider";
import {
    AzureAD,
    AuthenticationState,
    IAzureADFunctionProps
  } from "react-aad-msal";

  interface PreferenceProps {
    setCuisine: Function;
    setMealType: Function;
    setEquipment: Function;
    setDiet: Function;
    setIntolerances: Function;
    setStep: Function;
  }

export default class Preferences extends Component<PreferenceProps, {}>{

    constructor(props: any) {
        super(props);
    }

    render = () => {
        const navStyle = {
            backgroundColor: "#685DEA"
        };

        const linkStyle = {
            color: "white"
        };

        const greetingStyle = {
            marginTop: 70,
            color: "#685DEA",
            textAlign: 'center' as 'center'
        };

        const dropdownAlign = {
            textAlign: 'center' as 'center',
            marginTop: 30
        };

        const dropdownColor = {
            backgroundColor: "#685DEA",
            
        };

        const formStyle = {
            width: 406
        };

        const nextStyle = {
            textAlign: 'center' as 'center',
            marginTop: 50,
            backgroundColor: "#685DEA"
        };

        return (
            <AzureAD provider={authProvider}>
                {({ login, logout, accountInfo, authenticationState, error}: IAzureADFunctionProps) => {
                    return (
                        <div>
                            <Nav className="justify-content-end" style={navStyle}>
                                <Nav.Item>
                                    <Nav.Link style={linkStyle} onClick={logout} href="#welcome">Sign Out</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <h3 style={greetingStyle}>Hello{accountInfo != null ? " " + accountInfo.account.name : ""} 👋 Let's get to know you better!</h3>
                            <Form>
                                <Dropdown style={dropdownAlign}>
                                    <Dropdown.Toggle style={dropdownColor} id="dropdown-basic">What's your everyday cuisine?</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("African")}>African</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("American")}>American</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("British")}>British</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Cajun")}>Cajun</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Caribbean")}>Caribbean</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Chinese")}>Chinese</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("EastEuropean")}>Eastern European</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("European")}>European</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("German")}>German</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Greek")}>Greek</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Indian")}>Indian</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Irish")}>Irish</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Italian")}>Italian</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Japanese")}>Japanese</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Jewish")}>Jewish</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Korean")}>Korean</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("LatinAmerican")}>Latin American</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Mediterranean")}>Mediterranean</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Mexican")}>Mexican</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("MiddleEastern")}>Middle Eastern</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Nordic")}>Nordic</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Southern")}>Southern</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Spanish")}>Spanish</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Thai")}>Thai</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setCuisine("Vietnamese")}>Vietnamese</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
    
                                <Dropdown style={dropdownAlign}>
                                    <Dropdown.Toggle style={dropdownColor} id="dropdown-basic">What meal type would you like?</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => this.props.setMealType("maincourse")}>Main Course</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("sidedish")}>Side Dish</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("dessert")}>Dessert</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("appetizer")}>Appetizer</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("salad")}>Salad</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("bread")}>Bread</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("breakfast")}>Breakfast</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("soup")}>Soup</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("beverage")}>Beverage</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("sauce")}>Sauce</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("marinade")}>Marinade</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("fingerfood")}>Fingerfood</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("snack")}>Snack</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setMealType("drink")}>Drink</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
    
                                <Row className="justify-content-md-center">
                                    <Col xs={12} sm={4} md={4}>
                                        <Form.Group controlId="formBasicEquipment" style={dropdownAlign}>
                                            <Form.Label>What kitchen equipment do you own?</Form.Label>
                                            <Form.Control style={formStyle} onChange={(e) => this.props.setEquipment(e.currentTarget.value)} type="text" placeholder="Enter equipment" /> 
                                        </Form.Group>
                                    </Col>
                                </Row>
                                
    
                                <Dropdown style={dropdownAlign}>
                                    <Dropdown.Toggle style={dropdownColor} id="dropdown-basic">Are you following any diets?</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => this.props.setDiet("glutenfree")}>Gluten Free</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setDiet("ketogenic")}>Ketogenic</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setDiet("vegetarian")}>Vegetarian</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setDiet("lacto-vegetarian")}>Lacto-Vegetarian</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setDiet("ovo-vegetarian")}>Ovo-Vegetarian</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setDiet("vegan")}>Vegan</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setDiet("pescetarian")}>Pescetarian</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setDiet("paleo")}>Paleo</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setDiet("primal")}>Primal</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setDiet("whole30")}>Whole30</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
    
                                <Dropdown style={dropdownAlign}>
                                    <Dropdown.Toggle style={dropdownColor} id="dropdown-basic">Any food intolerances?</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("diary")}>Diary</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("egg")}>Egg</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("gluten")}>Gluten</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("grain")}>Grain</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("peanut")}>Peanut</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("seafood")}>Seafood</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("sesame")}>Sesame</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("shellfish")}>Shellfish</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("soy")}>Soy</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("sulfite")}>Sulfite</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("treenut")}>Tree Nut</Dropdown.Item>
                                        <Dropdown.Item onClick={() => this.props.setIntolerances("wheat")}>Wheat</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>

                                <Row className="justify-content-md-center">
                                    {/* <Col xs={12} sm={5} md={3}> */}
                                        <Button onClick={() => this.props.setStep("pantry")} style={nextStyle} type="submit">
                                            Next
                                        </Button>
                                    {/* </Col> */}
                                </Row>
                                    
                            </Form>
                        </div>
                    );}}
            </AzureAD>
        );
    }
    
}