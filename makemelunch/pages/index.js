import Head from "next/head";
import Link from "next/link";

import { useAuth } from "../context/UserAuthContext";

import * as React from "react";

import { useRouter } from "next/router";
import AppAppBar from "./components/appappbar";
import ProductHero from "./components/producthero";
import ProductHowItWorks from "./components/producthowitworks";
import ProductValues from "./components/productvalues";
import ProductQuestion from "./components/projectquestion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainAppBar from "./components/mainappbar";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

const theme = createTheme({
  palette: {
    background: {
      main: "green",
      secondary: "#90ee90",
    },
  },
});

const indexTheme = createTheme({
  palette: {
    background: {},
  },
});

export default function Home() {
  const auth = useAuth();
  const router = useRouter();

  if (!auth.user) {
    return (
      <React.Fragment>
        <Head>
          <title>HomePage</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <AppAppBar />
          <ProductHero />
          <ProductValues />
          <ProductHowItWorks />
          <ProductQuestion />
        </ThemeProvider>
      </React.Fragment>
    );
  }
  if (auth.user) {
    return (
      <>
        <Head>
          <title>HomePage</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <MainAppBar />
        <div>
          <h3>
            Ever forgotten to go grocery shopping and been left with a random
            assortment of ingredients in your fridge? Now you can see what types
            of food you can make from those ingredients!
          </h3>
          <br></br>
          <h3>
            With MakeMeLunch, you can easily make use of your left over
            groceries! Simply add ingredients to your account. Then view what
            recipes you can make from those ingredients! The top five recipes
            that most closely match your ingredients will be given. It&apos;s
            that simple! Why don&apos;t you give it a try?
          </h3>
        </div>
      </>
    );
  }
}
