// JavaScript source code
import React from "react";
import { useEffect, useState } from "react";

function recipes() {
  const { searchedRecipes, setSearchedRecipes } = useState([]);
  const getrecipes = async (name) => {
    const data = await fetch(
      'https://api.spoonacular.com/recipes/findByIngredients?apikey=${process.env.SPOON_API_KEY}&query=${name}'
    );
    const recipes = await data.json();
    setrecipes.results();
  };
  return <div>recipes</div>;
}
export default recipes;
