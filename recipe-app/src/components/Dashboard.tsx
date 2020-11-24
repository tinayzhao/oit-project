import React, { Component } from "react";
import Pantry from './Pantry';

export default class Dashboard extends Component{

    cuisine: string;
    mealType: string;
    equipment: string;
    diet: string;
    intolerances: string;
    ingredients: string[];
    
    constructor(props: any) {
        super(props);
        this.cuisine = "";
        this.mealType = "";
        this.equipment = "";
        this.diet = "";
        this.intolerances = "";
        this.ingredients = [];
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
        this.ingredients = ingredients;
    }

    getIngredients = () => {
        return this.ingredients;
    }

    render() {

        const pantryProps = {
            setIngredients: this.setIngredients.bind(this),
            getIngredients: this.getIngredients.bind(this)
        }
        return (
            <Pantry {... pantryProps} />
        )
    }

}