import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState, useEffect } from "react";
import axios from "axios";
import { useAuth } from "../../context/UserAuthContext";
import styles from "../../styles/ing.module.css";
import { Container, Row, Button, Col } from "reactstrap";

function showRecipe() {
  const auth = useAuth();
  const router = useRouter();
  const headStyle = {
    color: "green",
    padding: "10px",
    fontFamily: "Sans-Serif",
    textAlign: "center",
  };

  const editStyle = {
    padding: "10px",
    textAlign: "center",
  };

  const buttonStyle = {
    padding: "10px",
    textAlign: "center",
    color: "blue",
  };

  const optStyle = {
    padding: "10px",
    textAlign: "center",
    margin: "20px",
  };

  const backStyle = {
    color: "red",
    margin: "30px",
  };

  const summaryStyle = {
    color: "black",
    textAlign: "center",
  };

  //const[response, setResponse] = useState(null);
  const [recipeObject, setObject] = useState(null);

  const show = async (event) => {
    event.preventDefault();

    const data = router.query.id;
    var summary;
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
        var summary = document.createElement("div");
        summary.innerHTML = recipeObject.summary;
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
        <Container fluid style={editStyle}>
          <Head>
            <title>HomePage</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Row>
            <h1 style={headStyle}>MakeMeLunch</h1>
          </Row>

          <Row>
            <Button style={optStyle}>
              <a href="/ingredient/viewingredients"> View Ingredients </a>
            </Button>
            <Button style={optStyle}>
              <a href="/ingredient/addIng"> Add Ingredients </a>
            </Button>
            <Button style={optStyle}>
              <a href="/ingredient/deleteIng"> Remove Ingredients </a>
            </Button>
            <Button style={optStyle}>
              <a href="/ingredient/searchByIng">
                {" "}
                Search for Recipe by Ingredient
              </a>
            </Button>
          </Row>

          <Row>
            <Button style={backStyle}>
              <a href="/">
                <b>Back to Home</b>
              </a>
            </Button>
            <Button style={backStyle}>
              <Link href="/">
                <a onClick={() => handleClick()}>
                  {" "}
                  <b>Log Out </b>
                </a>
              </Link>
            </Button>
          </Row>
        </Container>
        <main className={styles.main}>
          <Col>
            <h1 className={styles.titlea}>{recipeObject.title}</h1>
            <img
              src={recipeObject.image}
              alt={recipeObject.title}
              class="center"
            />
            <h3 className={styles.optStyle}>Summary: </h3>
            <text>{recipeObject.summary}</text>
            <h3 className={styles.optStyle}>Ingredients: </h3>
            <text>{recipeObject.extendedingredients}</text>
            <div>{recipeObject.extendedingredients.map( ingredient =>
              <h4>{ingredient}</h4>
            )}</div>
            <h3 className={styles.optStyle}>Instructions: </h3>
            <text>{recipeObject.instructions}</text>
            <h3 className={styles.optStyle}>Original Link: </h3>
            <Link href={recipeObject.sourceUrl}>&larr; Link</Link>
          </Col>
        </main>
        <br />
        <br />
        <br />
      </div>
    );
  }
}

function getStringList (eingredients) {
  let arr = []
  eingredients.map(ingredient => arr.append(ingredient))
}

export default showRecipe;
