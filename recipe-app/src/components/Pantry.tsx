import React, { Component } from "react";
import { Form, Card, Button, Nav } from 'react-bootstrap';
import { authProvider } from "./authProvider";
import {
    AzureAD,
    AuthenticationState,
    IAzureADFunctionProps
  } from "react-aad-msal";

export default class Pantry extends Component<{setIngredients: Function, getIngredients: Function, setStep: Function}, {suggested: string[]}>{

    constructor(props: any) {
        super(props);
        this.state = {
            suggested: ["egg", "tomato", "cheese", "banana"]
        };
    }

    //search change
    onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        const endpoint = 
        "https://api.spoonacular.com/food/ingredients/autocomplete?query=" 
        + val + "&apiKey=" + process.env.REACT_APP_SPOONACULAR_API_KEY;
        fetch(endpoint, {
            "method": "GET"
        })
        .then(resp => {
            return resp.json();
        }) 
        .then(json => {
            let newIngredients: string[]  = []
            json.forEach((element: { name: string; }) => {
                newIngredients.push(element.name);
            });
            this.setState({suggested: newIngredients});
            console.log(this.state.suggested);
        })
        .catch(err => {
	        console.error(err);
        });
        // e.preventDefault();
    };

    renderSuggested = () => {
        return (
            this.state.suggested.map((ingredient) =>
                <Form.Check 
                    name={ingredient} 
                    defaultChecked={this.props.getIngredients().includes(ingredient)} 
                    inline 
                    onChange={this.changeSelection} 
                    key={ingredient} 
                    label={ingredient} 
                />
            )
        );
    };

    renderSelected = () => {
        return (
            this.props.getIngredients().map((ingredient: any) =>
                <Card key={ingredient}>
                    <Card.Body>{ingredient}</Card.Body>
                </Card>
            )
        );
    };

    //checkbox change
    changeSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("CHANGING");
        console.log(this.props.getIngredients());
        console.log(this.state.suggested);
        const name = e.target.name;
        const status = e.target.checked;
        let selections = [...this.props.getIngredients()];
        if (status) {
            selections.push(name);
        } else {
            const idx = selections.indexOf(name);
            if (idx > -1) {
                selections.splice(idx, 1);
            }
        }
        this.props.setIngredients(selections);
        console.log(this.props.getIngredients());
    };

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
            textAlign: 'center' as 'center',
            fontFamily: 'Poppins'
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
                        <h3 style={greetingStyle}>What's in your pantry? 🛍</h3>
                        <Form>
                            <Form.Group controlId="formBasicSearch">
                                <Form.Control type="text" placeholder="Type to Search" onChange={this.onChange} />
                            </Form.Group>
                        </Form>
                        <h2>Suggested</h2>
                        <Form>
                            {this.renderSuggested.call(window)}
                        </Form>
                        <h2>Selected</h2>
                        <div key={this.props.getIngredients().toString()}>{this.renderSelected.call(window)}</div>
                        <Button onClick={() => this.props.setStep("home")}>Submit</Button>
                    </div>
                );
            }}
            </AzureAD>
        );
    }

}