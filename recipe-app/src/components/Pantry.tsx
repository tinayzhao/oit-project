import React, { Component } from "react";
import { Form, Card, Button, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class Pantry extends Component<{setIngredients: Function, getIngredients: Function, setStep: Function}, {suggested: string[]}>{

    constructor(props: any) {
        super(props);
        this.state = {
            suggested: ["egg", "tomato", "cheese", "banana"]
        };
    }

    onChange: any = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log("CHECKING");
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
        return (
            <div>
                <h1>What's in your pantry? 🛍</h1>
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

// export default Pantry;