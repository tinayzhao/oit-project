import React, { useState, FunctionComponent } from "react";
import { Form, Card, Button, Nav } from 'react-bootstrap';
import { Link, RouteComponentProps } from 'react-router-dom';
import Profile from './Profile';

class Pantry extends Profile {
    
    selected : string[];
    suggested: string[];

    constructor() {
        super();
        this.suggested = ["egg", "tomato", "cheese", "banana", "milk"];
        this.selected = [];
    }

    onChange(e: React.ChangeEvent<HTMLInputElement>) {
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
            this.suggested = newIngredients;
        })
        .catch(err => {
	        console.error(err);
        });

        e.preventDefault();
    };

    renderSuggested(): any {
        return (
            this.suggested.map((ingredient) =>
                <Form.Check name={ingredient} checked={selected.includes(ingredient)} inline onChange={changeSelection} key={ingredient} label={ingredient} />
            )
        );
    };

    renderSelected = () => {
        return (
            this.selected.map((ingredient) =>
                <Card key={ingredient}>
                    <Card.Body>{ingredient}</Card.Body>
                </Card>
            )
        );
    };

    changeSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        const status = e.target.checked;
        console.log(name);
        console.log(status);
        let selections = [...this.selected];
        if (status) {
            selections.push(name);
        } else {
            const idx = selections.indexOf(name);
            if (idx > -1) {
                selections.splice(idx, 1);
            }
        }
        this.selected = selections;
    };

    render() {
        return (
            <div>
                <h1>What's in your pantry? 🛍</h1>
                <Form>
                    <Form.Group controlId="formBasicSearch">
                        <Form.Control type="text" placeholder="Type to Search" onChange={onChange} />
                    </Form.Group>
                </Form>
                <h2>Suggested</h2>
                <Form>
                    {this.renderSuggested.call(window)}
                </Form>
                <h2>Selected</h2>
                {this.renderSelected.call(window)}
                <Link to={{pathname: "home"}}>
                    <Button>Submit</Button>
                </Link>
            </div>
        );
    }


}

// type Props = {
//     location: RouteComponentProps<{ bla: string }, {}, { state: any }>;
// };

// const Pantry:FunctionComponent<Props> = (props) => {
//     const stateProps = props.location;

//     const [suggested, setSuggested] = useState<string[]>(["egg", "tomato", "cheese", "banana", "milk"]);
//     const [selected, setSelected] = useState<string[]>([]);

//     const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         console.log("HERE");
//         console.log(stateProps);
//         const val = e.currentTarget.value;
//         const endpoint = "https://api.spoonacular.com/food/ingredients/autocomplete?query=" + val 
//         + "&apiKey=" + process.env.REACT_APP_SPOONACULAR_API_KEY;
//         fetch(endpoint, {
//             "method": "GET"
//         })
//         .then(resp => {
//             return resp.json();
//         }) 
//         .then(json => {
//             let newIngredients: string[]  = []
//             json.forEach((element: { name: string; }) => {
//                 newIngredients.push(element.name);
//             });
//             setSuggested(newIngredients);
//         })
//         .catch(err => {
// 	        console.error(err);
//         });

//         e.preventDefault();
//     };

//     const renderSuggested = () => {
//         return (
//             suggested.map((ingredient) =>
//                 <Form.Check name={ingredient} checked={selected.includes(ingredient)} inline onChange={changeSelection} key={ingredient} label={ingredient} />
//             )
//         );
//     };

//     const renderSelected = () => {
//         return (
//             selected.map((ingredient) =>
//                 <Card key={ingredient}>
//                     <Card.Body>{ingredient}</Card.Body>
//                 </Card>
//             )
//         );
//     };

//     const changeSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const name = e.target.name;
//         const status = e.target.checked;
//         console.log(name);
//         console.log(status);
//         let selections = [...selected];
//         if (status) {
//             selections.push(name);
//         } else {
//             const idx = selections.indexOf(name);
//             if (idx > -1) {
//                 selections.splice(idx, 1);
//             }
//         }
//         setSelected(selections);
//     };

//     return (
//         <div>
//             {/* <Nav className="justify-content-end">
//                 <Nav.Item>
//                     <Nav.Link>Sign Out</Nav.Link>
//                 </Nav.Item>
//             </Nav> */}
//             <h1>What's in your pantry? 🛍</h1>
//             <Form>
//                 <Form.Group controlId="formBasicSearch">
//                     <Form.Control type="text" placeholder="Type to Search" onChange={onChange} />
//                 </Form.Group>
//             </Form>
//             <h2>Suggested</h2>
//             <Form>
//                 {renderSuggested.call(window)}
//             </Form>
//             <h2>Selected</h2>
//             {renderSelected.call(window)}
//             <Link to={{
//                 pathname: "home",
//                 state: {
//                     // ...stateProps,
//                    ingredients: selected
//                 }
//             }}>
//                 <Button>Submit</Button>
//             </Link>
//         </div>
//     );
   
// }

export default Pantry;