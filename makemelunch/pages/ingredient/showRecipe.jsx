import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/UserAuthContext";
import styles from "../../styles/ing.module.css";
import { addRecipe, viewRecipe } from "../../helper/firebaseHelper";
import Container from "@mui/material/Container";
import MainAppBar from "../components/mainappbar";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProductQuestion from "../components/projectquestion";

function ShowRecipe() {
  const auth = useAuth();
  const router = useRouter();

  const editStyle = {
    padding: "10px",
    textAlign: "center",
  };

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
    if (data) {
      axios
        .request(options)
        .then(function (recipe) {
          setObject(recipe.data);
          addRecipe(auth, recipe.data);
          //recipeObject = recipe.data;
          //setResponse(recipe.data)
        })
        .catch(function (error) {
          console.error(error);
          return;
        });
    } else {
      setObject(await viewRecipe(auth));
    }
  };
  if (!recipeObject) {
    return (
      <>
        <Head>
          <title>Show Recipe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainAppBar />
        <main className={styles.main}>
          <Container maxWidth="xl" sx={{ textAlign: "center" }}>
            <Typography variant="h3" sx={{ my: 4 }}>
              View your last viewed recipe
            </Typography>
            <Box component="form" onSubmit={show} noValidate>
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
        </main>
        <ProductQuestion />
      </>
    );
  }
  if (recipeObject) {
    return (
      <div>
        <Head>
          <title>Show Recipe</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainAppBar />
        <Container style={editStyle}>
          <h1 className={styles.titlea}>{recipeObject.title}</h1>
          <img src={recipeObject.image} alt={recipeObject.title} />
          <h3 className={styles.optStyle}>Summary: </h3>
          <div
            className="product-des"
            dangerouslySetInnerHTML={{ __html: recipeObject.summary }}
          ></div>
          <h3 className={styles.optStyle}>Ingredients: </h3>
          <text>{recipeObject.extendedingredients}</text>
          {recipeObject.extendedIngredients && (
            <div>
              {recipeObject.extendedIngredients?.map((ingredient, index) => (
                <div id={index} key={ingredient.id}>
                  <h4>{ingredient.original}</h4>
                </div>
              ))}
            </div>
          )}
          <h3 className={styles.optStyle}>Instructions: </h3>
          <text>{recipeObject.instructions}</text>
          <h3 className={styles.optStyle}>Original Link: </h3>
          <Link href={recipeObject.sourceUrl}> Link</Link>
        </Container>
        <br />
        <br />
        <br />
        <ProductQuestion />
      </div>
    );
  }
}

function getStringList(eingredients) {
  let arr = [];
  eingredients.map((ingredient) => arr.append(ingredient));
}

export default ShowRecipe;
