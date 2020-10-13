import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Main = () => {

    const [response, setResponse] = useState("Nothing to display.");

    const querySpoonacularAPI: React.MouseEventHandler<HTMLDivElement> = (e) => {
        //doesn't have option for breakfast, lunch, dinner
        const endpoint = "https://rapidapi.p.rapidapi.com/food/ingredients/autocomplete?query=apple&number=5&intolerances=egg";
        fetch(endpoint, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": REACT_APP_API_KEY
            }
        })
        .then(resp => {
            console.log(resp);
            return resp.text();
        })
        .then(txt => {
            console.log(txt);
            setResponse(txt);
        })
        .catch(err => {
	        console.error(err);
        });

        e.preventDefault();
    };


 
    return (
        <Container>
            <Row>
                <Col><h1>API Page</h1></Col>
            </Row>
            <Row>
                <Col><Button onClick={ querySpoonacularAPI} variant="primary">Spoonacular API</Button>{' '}</Col>
                <Col><Button variant="success">Eventbrite API</Button>{' '}</Col>
                <Col><Button variant="warning">Ticketmaster API</Button>{' '}</Col>
            </Row>
            <Row>
                <Col><p>{ response }</p></Col>
            </Row>
        </Container>
    );
}

export default Main;