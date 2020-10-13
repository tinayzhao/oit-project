import React, { useState } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';

const Main = () => {

    const [response, setResponse] = useState("Nothing to display.");

    const querySpoonacularAPI: React.MouseEventHandler<HTMLDivElement> = (e) => {
        // doesn't have option for breakfast, lunch, dinner
        const endpoint = "https://rapidapi.p.rapidapi.com/food/ingredients/autocomplete?query=apple&number=5&intolerances=egg";
        fetch(endpoint, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_SPOONACULAR_API_KEY
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

    //Eventbrite API doesn't have search functionality anymore, but alternatives are 
    //Retrieve an Event by ID — GET /v3/events/:event_id/ 
    //List Events by Venue — GET /v3/venues/:venue_id/events/
    //List Events by Organization — GET /v3/organizations/:organization_id/events/

    const queryTicketmasterAPI: React.MouseEventHandler<HTMLDivElement> = (e) => {
        //searches based on location
        const endpoint = "https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=" + process.env.REACT_APP_TICKETMASTER_API_KEY;
        fetch(endpoint, {
            "method": "GET",
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
                <Col><Button onClick={ queryTicketmasterAPI }variant="warning">Ticketmaster API</Button>{' '}</Col>
            </Row>
            <Row>
                <Col><p>{ response }</p></Col>
            </Row>
        </Container>
    );
}

export default Main;