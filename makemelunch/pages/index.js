import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../styles/Home.module.css";
import { useAuth } from "../context/UserAuthContext";
import { setErrorMessage } from "../context/setErrorMessage";

import {
  Container,
  Row,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Alert,
} from "reactstrap";

export default function Home() {
  const auth = useAuth();
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

  if (auth.user) {
    return (
      <>
        <Container fluid style={editStyle}>
          <Head>
            <title>HomePage</title>
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
        <Col>
          <h3 style={summaryStyle}>
            Ever forgotten to go grocery shopping and been left with a random
            assortment of ingredients in your fridge? Now you can see what types
            of food you can make from those ingredients!
          </h3>
          <br></br>
          <h3 style={summaryStyle}>
            With MakeMeLunch, you can easily make use of your left over
            groceries! Simply add ingredients to your account. Then view what
            recipes you can make from those ingredients! The top five recipes
            that most closely match your ingredients will be given. It&apos;s
            that simple! Why don&apos;t you give it a try?
          </h3>
        </Col>
      </>
    );
  }
  if (!auth.user) {
    return (
      <div className="container">
        <Head>
          <title>SignUp/Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <Row>
            <h1 style={headStyle}>MakeMeLunch</h1>
          </Row>
          <br></br>
          <Col>
            <Link href="/login" passHref>
              <Button variant="contained" color="secondary">
                Sign In
              </Button>
            </Link>
          </Col>
          <br></br>
          <Col>
            <Link href="/signup" passHref>
              <Button variant="contained" color="secondary">
                Sign Up
              </Button>
            </Link>
          </Col>
        </main>
      </div>
    );
  }
}
