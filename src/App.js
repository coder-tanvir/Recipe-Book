import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "317bbd61";
  const APP_KEY = "892af0448a37fe342a05dd9fa2344d49	";
  const request = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const [recipes, setrecipes] = useState([]);
  const [search, setsearch] = useState("");
  const [query, setquery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setrecipes(data.hits);
    console.log(data.hits);
  };

  const updatesearch = (event) => {
    setsearch(event.target.value);
  };

  const getsearch = (event) => {
    event.preventDefault();
    setquery(search);
  };
  return (
    <div className="App">
      <h1 className="apptitle">Recipe😋BOOK</h1>
      <form className="search-form" onSubmit={getsearch}>
        <input type="text" className="search-bar" onChange={updatesearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
