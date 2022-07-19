import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/ing.module.css";
import { useAuth } from "../../context/UserAuthContext";
import { setErrorMessage } from "../../context/setErrorMessage";
import { deleteIngredient, ingChanged } from "../../helper/firebaseHelper";
import { Container, Row, Button } from "react-bootstrap";

const Del = () => {
  const router = useRouter();
  const auth = useAuth();

  const handleClick = () => {
    auth.logOut();
  };

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

  const deleteIng = (event, ingredient) => {
    event.preventDefault();

    deleteIngredient(auth, ingredient);
    ingChanged(auth, true);
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Container fluid style={editStyle}>
        <Head>
          <title>Remove Ingredients</title>
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
        <h1 className={styles.title}>Remove Ingredient</h1>
        <br />
        <form onSubmit={(event) => deleteIng(event, ingredient)}>
          <label htmlFor="ingredient">Ingredient: </label>
          <input
            type="ingredient"
            name="ingredient"
            value={ingredient}
            onChange={(event) => setIngredient(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <br />
        <Link href="javascript:history.back()">&larr; Go back</Link>
      </main>
    </div>
  );
};

export default Del;
