import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/UserAuthContext";
import styles from "../../styles/Home.module.css";

function showRecipe() {
  const auth = useAuth();
  const router = useRouter();

  //const[response, setResponse] = useState(null);
  const [recipeObject, setObject] = useState(null);

  const show = async (event) => {
    event.preventDefault();

    const data = router.query.id;
    let options = {
      method: "GET",
      url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${data}/information`,
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

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
  };
  if (!recipeObject) {
    return (
      <main className={styles.main}>
        <form onSubmit={(event) => show(event)}>
          <button type="submit">Show Recipe</button>
        </form>
      </main>
    );
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
