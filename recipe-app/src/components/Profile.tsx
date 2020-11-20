class Profile {

    cuisine: string;
    mealType: string;
    equipment: string;
    diet: string;
    intolerances: string;
    ingredients: string[];

    constructor() {
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

    setIngredients(ingredients: string[]) {
        this.ingredients = ingredients;
    }

}

export default Profile;