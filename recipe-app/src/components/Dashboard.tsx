import React, { Component } from "react";
import Pantry from './Pantry';
import Preferences from './Preferences';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default class Dashboard extends Component<{}, {ingredients: string[]}>{

    cuisine: string;
    mealType: string;
    equipment: string;
    diet: string;
    intolerances: string;
    // ingredients: string[];
    step: string;
    
    constructor(props: any) {
        super(props);
        this.cuisine = "";
        this.mealType = "";
        this.equipment = "";
        this.diet = "";
        this.intolerances = "";
        // this.ingredients = [];
        this.step = "pantry";
        this.state = {
            ingredients: []
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
        // this.state.ingredients = ingredients;
    }

    getIngredients = () => {
        return this.state.ingredients;
    }

    setStep = (step: string) => {
        this.step = step;
        console.log("updated step to " + this.step);
        this.forceUpdate();
    }

    render() {
        console.log(this.step);
        const pantryProps = {
            setIngredients: this.setIngredients.bind(this),
            getIngredients: this.getIngredients.bind(this),
            setStep: this.setStep.bind(this)
        }

        const responsive = {
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 6,
              slidesToSlide: 6 // optional, default to 1.
            }
        };
    
        const recipes = [
            { 
                id: "1", 
                title: "Pasta 1", 
                summary: "lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", 
                image: "https://spoonacular.com/recipeImages/716429-312x231.jpg" 
            },
            { 
                id: "2", 
                title: "Pasta 2", 
                summary: "lorem ipsum lorem ipsum ayo lorem ipsum lorem ipsum", 
                image: "https://spoonacular.com/recipeImages/715538-312x231.jpg" 
            }
        ];

        const recipeItems = recipes.map(recipe => (
            <div className="recipeSlide" id={recipe.id}>
                <img className="recipeImage" src = {recipe.image }alt={recipe.title}></img>
                <h1 className="recipeTitle">{recipe.title}</h1>
                <p className="recipeSummary">{recipe.summary}</p>
            </div>
        ));

        let comp : any;
        if (this.step === "preferences") {
            comp = <Preferences />
        } else if (this.step === "pantry") {
            comp = <Pantry {... pantryProps} />
        } else {
            comp = 
                <div>
                    <Carousel
                        swipeable={false}
                        draggable={true}
                        showDots={false}
                        responsive={responsive}
                        ssr={true}
                        autoPlaySpeed={5000}
                        keyBoardControl={true}
                        customTransition="all 0.5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        // deviceType={this.props.deviceType}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {recipeItems}
                    </Carousel>
            </div>
        }
        

        return (
            <div>
                {comp}
            </div>
        )
    }

}