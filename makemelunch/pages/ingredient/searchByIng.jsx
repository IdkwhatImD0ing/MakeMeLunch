import Head from "next/head";
import Link from "next/link";

import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/UserAuthContext";
import styles from "../../styles/view.module.css";
import { getAllIngredients } from "../helper/firebaseHelper";

function recipes() {
  const auth = useAuth();
  const [recipeObject, setObject] = useState(null);

  const myrecipes = async (event) => {
    event.preventDefault();

    let ingredients = await getAllIngredients(auth);

    let options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
      params: {
        ingredients: ingredients,
        number: "5",
        ignorePantry: "true",
        ranking: "1",
      },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPIDAPI_KEY,
        "X-RapidAPI-Host":
          "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        setObject(response.data);
        console.log(recipeObject);
        setResponse(response.data);
      })
      .catch(function (error) {
        console.error(error);
        return;
      });
  };

  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>Search For Recipes!</h1>
        <br />
        <form onSubmit={(event) => myrecipes(event)}>
          <button type="submit">Search</button>
        </form>
        <Link href="/">&larr; Go back</Link>
        {recipeObject && (
          <div className={styles.main}>
            <div>
              <span>Id: {recipeObject[0].id}</span>
              <span>Name: {recipeObject[0].title}</span>
              <img src={recipeObject[0].img} />
            </div>
          </div>
        )}
      </main>
    </>
  );
}

export default recipes;
