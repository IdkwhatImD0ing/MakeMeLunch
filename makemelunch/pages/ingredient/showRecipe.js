import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/UserAuthContext";
import styles from "../../styles/Home.module.css";
import { getAllIngredients } from "../helper/firebaseHelper";

function showRecipe() {
  const auth = useAuth();
  const router = useRouter();
  const data = router.query;
  let found = false;

  //const[response, setResponse] = useState(null);
  const [recipeObject, setObject] = useState(null);
  //var recipeObject;

  let options = {
    method: "GET",
    url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/123193/information",
    headers: {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };
  if (!found) {
    found = true;
    axios
      .request(options)
      .then(function (recipe) {
        console.log(recipe.data);
        setObject(recipe.data);
        //recipeObject = recipe.data;
        //setResponse(recipe.data)
      })
      .catch(function (error) {
        console.error(error);
        return;
      });
  }

  if (recipeObject) {
    return (
      <div>
        <div>{recipeObject.title}</div>
        <div>{recipeObject.summary}</div>
        <div>{recipeObject.extendedingredients}</div>
        <div>{recipeObject.instructions}</div>
        <div>{recipeObject.image}</div>
      </div>
    );
  }
}

export default showRecipe;
