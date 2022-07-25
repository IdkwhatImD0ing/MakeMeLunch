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
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MainAppBar from "../components/mainappbar";
import ProductQuestion from "../components/productquestion";

const url =
  "https://images.unsplash.com/photo-1490735891913-40897cdaafd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

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

  if (!recipeObject) {
    return (
      <>
        <Head>
          <title>Search With Ingredients</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box
          component="section"
          sx={{
            display: "flex",
            overflow: "auto",
            backgroundImage: `url(${url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            flexDirection: "column",
            height: "100vh",
          }}
        >
          <MainAppBar />
          <main className={styles.main}>
            <Container maxWidth="xl" sx={{ textAlign: "center" }}>
              <Typography variant="h3" sx={{ my: 4 }}>
                Search based on your ingredients
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
                  Search Now
                </Button>
              </Box>
            </Container>
            <br />
            <Link href="javascript:history.back()">&larr; Go back</Link>
            <br />
          </main>
        </Box>
        <ProductQuestion />
      </>
    );
  } else {
    return (
      <>
        <Head>
          <title>Search With Ingredients</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Box
          component="section"
          sx={{
            display: "flex",
            overflow: "hidden",
            backgroundImage: `url(${url})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <MainAppBar />
          <Typography variant="h3" sx={{ my: 4 }}>
            Search based on your ingredients
          </Typography>
          <Container>
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
            </div>
          </Container>
        </Box>
        <ProductQuestion />
      </>
    );
  }
}

export default Recipes;
