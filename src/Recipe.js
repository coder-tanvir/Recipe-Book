import React from "react";

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="recipe">
      <h1 className="name">{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p>T.Calories:{calories}</p>
      <img className="images" src={image} alt="" />
    </div>
  );
};

export default Recipe;
