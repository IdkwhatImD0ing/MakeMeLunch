import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import { useState } from "react";
import axios from "axios";
import { useAuth } from "../../context/UserAuthContext";
import styles from "../../styles/ing.module.css";
import { getAllIngredients } from "../../helper/firebaseHelper";
import { useRouter } from "next/router";
import { Container, Row, Button, Col } from "reactstrap";

function Recipes() {
  const auth = useAuth();
  const [recipeObject, setObject] = useState(null);
  const router = useRouter();

  const handleClick = () => {
    auth.logOut();
  };

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
        console.log(response.data);
        setObject(response.data);
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
      <Container fluid style={editStyle}>
        <Head>
          <title>Search With Ingredients</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Row>
          <h1 style={headStyle}>
            <Link href="/">MakeMeLunch</Link>
          </h1>
        </Row>

        <Row>
          <Button style={optStyle}>
            <Link href="/ingredient/viewingredients"> View Ingredients </Link>
          </Button>
          <Button style={optStyle}>
            <Link href="/ingredient/addIng"> Add Ingredients </Link>
          </Button>
          <Button style={optStyle}>
            <Link href="/ingredient/deleteIng"> Remove Ingredients </Link>
          </Button>
          <Button style={optStyle}>
            <Link href="/ingredient/searchByIng">
              Search for Recipe by Ingredient
            </Link>
          </Button>
        </Row>

        <Row>
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
        <h1 className={styles.title}>Search For Recipes!</h1>
        <br />
        <form onSubmit={(event) => myrecipes(event)}>
          <button type="submit">Search</button>
        </form>
        <br />
        <Link href="javascript:history.back()">&larr; Go back</Link>
        <br />
        {recipeObject && (
          <div className={styles.main}>
            {recipeObject.map((recipe, index) => (
              <div id={index} key={recipe.id}>
                <Container fluid style={editStyle}>
                  <Col className="align-items-center">
                    <h2>{recipe.title}</h2>
                    <br />
                    <Image
                      src={recipe.image}
                      alt={recipe.title}
                      layout="intrinsic"
                      width="500"
                      height="500"
                    />
                    <br />
                    <text>Id: {recipe.id}</text>
                    <form onSubmit={(event) => viewRecipe(event, recipe.id)}>
                      <button type="submit">More Info</button>
                    </form>
                    <br />
                  </Col>
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
    </>
  );
}

export default Recipes;
