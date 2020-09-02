import React from "react";

const Recipe = props => {
    return(
        <div>
            <h1>{props.title}</h1>
            <p>{props.calories} Calories</p>
            <ol>
                {props.ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ol>
            <img src={props.image} alt={props.title} />
        </div>
    );
}

export default Recipe;