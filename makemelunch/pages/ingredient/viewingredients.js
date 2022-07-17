import { getAllIngredients } from "../helper/fireBaseHelper.js";
import { useAuth } from "../../context/UserAuthContext.jsx";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
//import styles from "../../styles/Home.module.css";
import Link from "next/link";
import styles from "../../styles/ing.module.css";
import { Container, Row, Button } from "reactstrap";

export default function ViewIngredients() {
  const auth = useAuth();
  const [ings, setIngs] = useState([]);
  const [yes, setYes] = useState(null);

  const viewIng = async (event) => {
    event.preventDefault();
    let str = await getAllIngredients(auth);
    //console.log(str);
    setIngs(str.split(","));
    setYes(1);
    console.log(ings);
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
  return (
    <>
      <div className={styles.container}>
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
          <h1 className={styles.title}>View Ingredients</h1>
          <br />
          <form onSubmit={(event) => viewIng(event)}>
            <button type="submit">View</button>
          </form>
          <br />
          <Link href="/">&larr; Go back</Link>
          <br />
          {yes && (
            <div className={styles.viewingredients}>
              {ings.map((ing) => (
                <h3 id={ing}>{ing}</h3>
              ))}
            </div>
          )}
        </main>
      </div>
    </>
  );
}
