import React, { Component } from "react";
import Pantry from './Pantry';
import Preferences from './Preferences';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Nav, Row, Col, Card, CardDeck } from 'react-bootstrap';
import { authProvider } from "./authProvider";
import {
    AzureAD,
    AuthenticationState,
    IAzureADFunctionProps
  } from "react-aad-msal";

export default class Dashboard extends Component<{}, {ingredients: string[], step: string}>{

    cuisine: string;
    mealType: string;
    equipment: string;
    diet: string;
    intolerances: string;
    recipes: any[];
    pages: string[];
    pageIdx: number;
    
    constructor(props: any) {
        super(props);
        this.cuisine = "";
        this.mealType = "";
        this.equipment = "";
        this.diet = "";
        this.intolerances = "";
        this.recipes = [];
        this.pages = ["preferences", "pantry", "home"];
        this.pageIdx = 0;
        this.state = {
            ingredients: [],
            step: "preferences"
        }
    }

    setCuisine(cuisine: string) {
        this.cuisine = cuisine;
    }

    setMealType(mealType: string) {
        this.mealType = mealType;
    }

    setEquipment(equipment: string) {
        this.equipment = equipment;
    }

    setDiet(diet: string) {
        this.diet = diet;
    }

    setIntolerances(intolerances: string) {
        this.intolerances = intolerances;
    }

    setIngredients = (ingredients: string[]) => {
        this.setState({ingredients: ingredients});
    }

    getIngredients = () => {
        return this.state.ingredients;
    }

    setStep = (step: string) => {
        this.setState({step: step});
        console.log("updated step to " + this.state.step);
    }

    goForward = () => {
        if (this.pageIdx + 1 < this.pages.length) {
            this.pageIdx += 1;
            this.setStep(this.pages[this.pageIdx]);
        }
    }

    goBack = () => {
        if (this.pageIdx - 1 >= 0) {
            this.pageIdx -= 1;
            this.setStep(this.pages[this.pageIdx]);
        }
    }

    queryRecipes = () => {
        let endpoint : string = "https://api.spoonacular.com/recipes/complexSearch?";
        if (this.cuisine.length > 0) {
            endpoint += "cuisine=" + this.cuisine;
        }
        if (this.mealType.length > 0) {
            endpoint += "&mealType=" + this.mealType;
        }
        if (this.equipment.length > 0) {
            endpoint += "&equipment=" + this.equipment;
        }
        if (this.diet.length > 0) {
            endpoint += "&diet=" + this.diet;
        }
        if (this.intolerances.length > 0) {
            endpoint += "&intolerances=" + this.intolerances;
        }
        if (this.state.ingredients.length > 0) {
            endpoint += "&includeIngredients=" + this.state.ingredients.join(",");
        }
        endpoint += "&apiKey=" + process.env.REACT_APP_SPOONACULAR_API_KEY; 
        console.log(endpoint);
        fetch(endpoint, {
            "method": "GET"
        })
        .then(resp => {
            return resp.json();
        }) 
        .then(json => {
            console.log(json);
            const recipeSlide = {
                padding: 20
            };
            json.results.forEach((recipe: 
                {   
                    id: number; 
                    image: string; 
                    imageType: string; 
                    likes: number; 
                    missedIngredientCount: number, 
                    title: string, 
                    usedIngredientCount: number 
                }
                ) => {
                console.log(recipe);
                this.recipes.push(
                    (
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={recipe.image} />
                            <Card.Body>
                                <Card.Title>{recipe.title}</Card.Title>
                                <a href={"https://spoonacular.com/recipes/link-" + recipe.id}>View Recipe</a>
                                {/* <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                        // <div style={recipeSlide} id={recipe.id.toString()}>
                        //     <img src={recipe.image} alt={recipe.title}></img>
                        //     <h3>{recipe.title}</h3>
                        // </div>
                    )
                );
            });
            console.log(this.recipes);
        })
        .catch(err => {
	        console.error(err);
        });
    }
    
    render() {

        const preferenceProps = {
            setCuisine: this.setCuisine.bind(this),
            setMealType: this.setMealType.bind(this),
            setEquipment: this.setEquipment.bind(this),
            setDiet: this.setDiet.bind(this),
            setIntolerances: this.setIntolerances.bind(this),
            goForward: this.goForward.bind(this)
            // setStep: this.setStep.bind(this)
        };

        const pantryProps = {
            setIngredients: this.setIngredients.bind(this),
            getIngredients: this.getIngredients.bind(this),
            goForward: this.goForward.bind(this)
            // setStep: this.setStep.bind(this)
        };

        const responsive = {
            desktop: {
                breakpoint: { max: 3000, min: 1024 },
                items: 4
                // slidesToSlide: 3 //optional, default to 1.
                // partialVisibilityGutter: 40
            }
        };

        let comp : any;
        if (this.state.step === "preferences") {
            comp = <Preferences {... preferenceProps}/>
        } else if (this.state.step === "pantry") {
            comp = <Pantry {... pantryProps} />
        } else {
            this.queryRecipes();
            console.log("recipes are " + this.recipes);
            comp = 
                <div>
                    <Carousel
                        swipeable={false}
                        draggable={true}
                        showDots={false}
                        arrows={true}
                        responsive={responsive}
                        ssr={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        customTransition="all 0.5"
                        transitionDuration={500}
                        infinite={true}
                        containerClass="carousel-container"
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        // itemClass="carousel-item-padding-30-px"
                    >
                        {/* <CardDeck> */}
                            {this.recipes}
                        {/* </CardDeck> */}
                    </Carousel>
                </div>
        }
        
        const navStyle = {
            backgroundColor: "#685DEA"
        };

        const linkStyle = {
            color: "white",
            fontFamily: 'Poppins'
        };

        const greetingStyle = {
            marginTop: 70,
            color: "#685DEA",
            fontFamily: 'Poppins',
            fontWeight: 'bold' as 'bold',
            marginLeft: 50
        };
        
        return (
            <AzureAD provider={authProvider}>
            {({ login, logout, accountInfo, authenticationState, error}: IAzureADFunctionProps) => {
                return (
                    <div>
                        <Nav className="justify-content-end" style={navStyle}>
                            <Nav.Item>
                                <Nav.Link style={linkStyle} onClick={this.goBack} href="#home" disabled={this.pageIdx == 0 || this.pageIdx == this.pages.length - 1}>Back</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link style={linkStyle} onClick={logout} href="#welcome">Sign Out</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        {this.state.step == "home" ? <h3 style={greetingStyle}>{accountInfo != null ? accountInfo.account.name + "'s" : "Your"} Kitchen</h3> : ""}
                        {comp}
                    </div>
                );
            }}
            </AzureAD>
        )
    }

}