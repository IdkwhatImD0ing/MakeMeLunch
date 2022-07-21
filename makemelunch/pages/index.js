import Head from "next/head";
import Link from "next/link";

import { useAuth } from "../context/UserAuthContext";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useRouter } from "next/router";
import AppAppBar from "./index/appappbar";
import ProductHero from "./index/producthero";
import ProductHowItWorks from "./index/producthowitworks";
import ProductValues from "./index/productvalues";
import ProductQuestion from "./index/projectquestion";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        <AppBar position="static" sx={{ backgroundColor: "green" }}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                MakeMeLunch
              </Typography>

              <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                MakeMeLunch
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                <Button
                  variant="contained"
                  href="/ingredient/addIng"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "green",
                    },
                  }}
                >
                  Add
                </Button>
                <Button
                  variant="contained"
                  href="/ingredient/deleteIng"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "green",
                    },
                  }}
                >
                  Remove
                </Button>
                <Button
                  variant="contained"
                  href="/ingredient/viewingredients"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "green",
                    },
                  }}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  href="/ingredient/searchByIng"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "green",
                    },
                  }}
                >
                  Search
                </Button>
                <Button
                  variant="contained"
                  href="/ingredient/showRecipe"
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "green",
                    },
                  }}
                >
                  Recipe
                </Button>
                <Button
                  variant="contained"
                  onClick={() => {
                    auth.logOut();
                    router.push("/");
                  }}
                  sx={{
                    mt: 3,
                    mb: 2,
                    backgroundColor: "green",
                    "&:hover": {
                      backgroundColor: "#fff",
                      color: "green",
                    },
                  }}
                >
                  Log Out
                </Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
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
