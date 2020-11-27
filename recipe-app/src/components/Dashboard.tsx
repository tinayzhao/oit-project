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
    step: string;
    recipes: any[];
    
    constructor(props: any) {
        super(props);
        this.cuisine = "";
        this.mealType = "";
        this.equipment = "";
        this.diet = "";
        this.intolerances = "";
        this.step = "preferences";
        this.recipes = [];
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
    }

    getIngredients = () => {
        return this.state.ingredients;
    }

    setStep = (step: string) => {
        this.step = step;
        console.log("updated step to " + this.step);
        this.forceUpdate();
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
                // this.recipes.push(recipe);
                this.recipes.push(
                    (
                        <div className="recipeSlide" id={recipe.id.toString()}>
                            <img className="recipeImage" src = {recipe.image }alt={recipe.title}></img>
                            <h1 className="recipeTitle">{recipe.title}</h1>
                        </div>
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
            setStep: this.setStep.bind(this)
        };

        const pantryProps = {
            setIngredients: this.setIngredients.bind(this),
            getIngredients: this.getIngredients.bind(this),
            setStep: this.setStep.bind(this)
        };

        const responsive = {
            desktop: {
            breakpoint: { max: 3000, min: 1024 },
              items: 6,
              slidesToSlide: 6 // optional, default to 1.
            }
        };

        let comp : any;
        if (this.step === "preferences") {
            comp = <Preferences {... preferenceProps}/>
        } else if (this.step === "pantry") {
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
                        {this.recipes}
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