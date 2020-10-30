import React, { useState } from "react";
import { Form } from 'react-bootstrap';

const Pantry = () => {

    const [suggested, setSuggested] = useState<string[]>(["egg", "tomato", "cheese", "banana", "milk"]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const val = e.currentTarget.value;
        const endpoint = "https://api.spoonacular.com/food/ingredients/autocomplete?query=" + val 
        + "&apiKey=" + process.env.REACT_APP_SPOONACULAR_API_KEY;
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
            setSuggested(newIngredients);
        })
        .catch(err => {
	        console.error(err);
        });

        e.preventDefault();
    };

    const renderCheckboxes = () => {
        return (
            suggested.map((ingredient) =>
                <Form.Check inline key={ingredient} label={ingredient} />
            )
        );
    };

    return (
        <div>
            <h1>What's in your pantry?</h1>
            <Form>
                <Form.Group controlId="formBasicSearch">
                    <Form.Control type="text" placeholder="Type to Search" onChange={onChange} />
                </Form.Group>
            </Form>
            <h2>Suggested</h2>
            <Form>
                {renderCheckboxes.call(window)}
            </Form>
        </div>
    );
   
}

export default Pantry;