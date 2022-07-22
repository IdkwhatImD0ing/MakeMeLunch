import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/UserAuthContext";
import styles from "../../styles/ing.module.css";
import {
  addRecipeGroup,
  getAllIngredients,
  getIngVar,
  ingChanged,
} from "../../helper/firebaseHelper";
import { useRouter } from "next/router";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MainAppBar from "../components/mainappbar";
import ProductQuestion from "../components/projectquestion";

function Recipes() {
  const auth = useAuth();
  const [recipeObject, setObject] = useState(null);
  const router = useRouter();

  const editStyle = {
    padding: "10px",
    textAlign: "center",
  };

  const myrecipes = async (event) => {
    event.preventDefault();

    let ingredients = await getAllIngredients(auth);
    ingChanged(auth, false);

    let options = {
      method: "GET",
      url: "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/findByIngredients",
      params: {
        ingredients: ingredients,
        number: "5",
        ignorePantry: "true",
        ranking: "2",
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
        ingChanged(auth, false);
      })
      .catch(function (error) {
        console.error(error);
        return;
      });
  };

  const viewRecipe = (event, id) => {
    event.preventDefault();
    router.push({ pathname: "/ingredient/showRecipe", query: { id: id } });
  };

  return (
    <>
      <Head>
        <title>Search With Ingredients</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainAppBar />
      <main className={styles.main}>
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ my: 4 }}>
            Search based on your ingredinents
          </Typography>
          <Box component="form" onSubmit={myrecipes} noValidate>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "green",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "green",
                },
              }}
            >
              View Recipe
            </Button>
          </Box>
        </Container>
        <br />
        <Link href="javascript:history.back()">&larr; Go back</Link>
        <br />
        {recipeObject && (
          <div className={styles.main}>
            {recipeObject.map((recipe, index) => (
              <div id={index} key={recipe.id}>
                <Container style={editStyle}>
                  <h2>{recipe.title}</h2>
                  <br />
                  <img src={recipe.image} alt={recipe.title} />
                  <br />
                  <text>Id: {recipe.id}</text>
                  <form onSubmit={(event) => viewRecipe(event, recipe.id)}>
                    <button type="submit">More Info</button>
                  </form>
                  <br />
                </Container>
              </div>
            ))}
            {/* <div>
              <span>Id: {recipeObject[0].id}</span>
              <span>Name: {recipeObject[0].title}</span>
              <img src={recipeObject[0].img} />
            </div> */}
          </div>
        )}
      </main>
      <ProductQuestion />
    </>
  );
}

export default Recipes;
