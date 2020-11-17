import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Dashboard = () => {

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

    return (
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
    );
}

export default Dashboard;