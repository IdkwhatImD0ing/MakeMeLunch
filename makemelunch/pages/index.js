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
} from "react-bootstrap";

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
        <style jsx>{`
          .container {
            min-height: 100vh;
            padding: 0 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          main {
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
          footer {
            width: 100%;
            height: 100px;
            border-top: 1px solid #eaeaea;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          footer img {
            margin-left: 0.5rem;
          }
          footer a {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          .title a {
            text-align: center;
            color: #0070f3;
            text-decoration: none;
          }
          .title a:hover,
          .title a:focus,
          .title a:active {
            text-decoration: underline;
          }
          .title {
            margin: 0;
            line-height: 1.15;
            font-size: 4rem;
          }
          .title,
          .description {
            text-align: center;
          }
          .description {
            line-height: 1.5;
            font-size: 1.5rem;
          }
          code {
            background: #fafafa;
            border-radius: 5px;
            padding: 0.75rem;
            font-size: 1.1rem;
            font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
              DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
          }
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 800px;
            margin-top: 3rem;
          }
          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }
          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }
          .card h3 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }
          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
          .logo {
            height: 1em;
          }
          @media (max-width: 600px) {
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }
          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    );
  }
}
