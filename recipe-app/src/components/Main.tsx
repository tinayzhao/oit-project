import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

const Main = () => {

    const [response, setResponse] = useState("Nothing to display.");

    const queryRapidAPI: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const endpoint = "https://rapidapi.p.rapidapi.com/recipes/search?query=breakfast&cuisine=American&number=10&offset=0&includeIngredients=apple";
        fetch(endpoint, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
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

    const querySpoonacularAPI: React.MouseEventHandler<HTMLDivElement> = (e) => {
        const endpoint = "https://api.spoonacular.com/recipes/complexSearch?query=bred&number=10&apiKey=" + process.env.REACT_APP_SPOONACULAR_API_KEY;
        fetch(endpoint, {
            "method": "GET"
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
        const endpoint = "https://app.ticketmaster.com/discovery/v2/events.json?keyword=concert&countryCode=US&apikey=" + process.env.REACT_APP_TICKETMASTER_API_KEY;
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

    //Oauth consumer creation makes it difficult to use, so eliminating Meetup API
    // const queryMeetupAPI: React.MouseEventHandler<HTMLDivElement> = (e) => {
    //     //get authorization token
    //     // const authEndpoint = "https://secure.meetup.com/oauth2/access";
    //     // fetch(authEndpoint, {
    //     //     "method": "GET",
    //     //     "body":
    //     // })
    //     // .then(resp => {
    //     //     console.log(resp);
    //     //     return resp.text();
    //     // })
    //     // .then(txt => {
    //     //     console.log(txt);
    //     //     setResponse(txt);
    //     // })
    //     // .catch(err => {
	//     //     console.error(err);
    //     // });


    //     const endpoint = "https://api.meetup.com/find/groups?text=lgbt";
    //     fetch(endpoint, {
    //         "method": "GET"
    //     })
    //     .then(resp => {
    //         console.log(resp);
    //         return resp.text();
    //     })
    //     .then(txt => {
    //         console.log(txt);
    //         setResponse(txt);
    //     })
    //     .catch(err => {
	//         console.error(err);
    //     });

    //     e.preventDefault();
    // };
 
    return (
        <Container>
            <Row>
                <Col><h1>API Page</h1></Col>
            </Row>
            <Row>
                <Col>
                <Form>
                    <Form.Label></Form.Label>
                    <Button onClick={ queryRapidAPI} variant="primary">Spoonacular Rapid API</Button>{' '}
                </Form>
                </Col>
                <Col>
                    <Button onClick={ querySpoonacularAPI} variant="success">Spoonacular API</Button>{' '}
                </Col>
                <Col>
                    <Button onClick={ queryTicketmasterAPI }variant="warning">Ticketmaster API</Button>{' '}
                </Col>
            </Row>
            <Row>
                <Col><p>{ response }</p></Col>
            </Row>
        </Container>
    );
}

export default Main;