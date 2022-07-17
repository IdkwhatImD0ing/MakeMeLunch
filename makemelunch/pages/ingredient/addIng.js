import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/ing.module.css";
import { useAuth } from "../../context/UserAuthContext";
import { setErrorMessage } from "../../context/setErrorMessage";
import { addIngredient } from "../helper/firebaseHelper";
import { Container, Row, Button } from "reactstrap";

const add = () => {
  const router = useRouter();
  const auth = useAuth();

  const [ingredient, setIngredient] = useState("");

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

  const addIng = (event, ingredient) => {
    event.preventDefault();

    addIngredient(auth, ingredient);
    router.push("/");
  };

  return (
    <>
      <Container fluid style={editStyle}>
        <Head>
          <title>Add Ingredients</title>
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

      <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>Add Ingredient</h1>
          <br />
          <form onSubmit={(event) => addIng(event, ingredient)}>
            <label htmlFor="ingredient">Ingredient</label>
            <input
              type="ingredient"
              name="ingredient"
              value={ingredient}
              onChange={(event) => setIngredient(event.target.value)}
            />
            <button type="submit">Submit</button>
          </form>
          <br />
          <Link href="/">&larr; Go back</Link>
        </main>
      </div>
    </>
  );
};

export default add;
