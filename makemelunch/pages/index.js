import Head from "next/head";
import Link from "next/link";

import { useAuth } from "../context/UserAuthContext";

import * as React from "react";

import { useRouter } from "next/router";
import AppAppBar from "./components/appappbar";
import ProductHero from "./components/producthero";
import ProductHowItWorks from "./components/producthowitworks";
import ProductValues from "./components/productvalues";
import ProductQuestion from "./components/productquestion";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MainAppBar from "./components/mainappbar";
import ProductHeroMain from "./components/productheromain";
import ProductHowItWorksMain from "./components/producthowitworksmain";

const rightLink = {
  fontSize: 16,
  color: "common.white",
  ml: 3,
};

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#00a152",
    },
    secondary: {
      main: "#7cdedc",
    },
    background: {
      default: "#90ee90",
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

  if (!auth || !auth.user) {
    return (
      <React.Fragment>
        <Head>
          <title>HomePage</title>
          <link rel="icon" href="/icon.ico" />
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
      <React.Fragment>
        <Head>
          <title>HomePage</title>
          <link rel="icon" href="/icon.ico" />
        </Head>
        <MainAppBar />
        <ThemeProvider theme={theme}>
          <ProductHeroMain />
          <ProductHowItWorksMain />
          <ProductQuestion />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}
