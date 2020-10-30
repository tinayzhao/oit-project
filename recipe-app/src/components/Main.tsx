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
            </Row>
            <Row>
                <Col><p>{ response }</p></Col>
            </Row>
        </Container>
    );
}

export default Main;