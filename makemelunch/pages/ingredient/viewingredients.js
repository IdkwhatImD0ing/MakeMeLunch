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
            <title>View Ingredients</title>
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
          <h1 className={styles.title}>View Ingredients</h1>
          <br />
          <form onSubmit={(event) => viewIng(event)}>
            <button type="submit">View</button>
          </form>
          <br />
          <Link href="javascript:history.back()">&larr; Go back</Link>
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
