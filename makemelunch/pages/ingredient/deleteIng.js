import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/ing.module.css";
import { useAuth } from "../../context/UserAuthContext";
import { setErrorMessage } from "../../context/setErrorMessage";
import { deleteIngredient, ingChanged } from "../../helper/firebaseHelper";
import MainAppBar from "../components/mainappbar";
import ProjectQuestion from "../components/projectquestion";
import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { TextField, Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
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

const Del = () => {
  const router = useRouter();
  const auth = useAuth();

  const deleteIng = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    deleteIngredient(auth, data.get("ingredient"));
    ingChanged(auth, true);
    router.push("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Remove Ingredients</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainAppBar />
      <Container>
        <Typography variant="h3" sx={{ my: 4, textAlign: "center" }}>
          Remove Ingredients
        </Typography>
        <Box
          component="form"
          onSubmit={deleteIng}
          noValidate
          sx={{ mt: 1, textAlign: "center " }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="ingredient"
            label="Ingredient"
            name="ingredient"
            autoComplete="ingredient"
            autoFocus
          />
          <Button
            type="Submit"
            fullWidth
            variant="contained"
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
          <Link textAlign="center" href="javascript:history.back()">
            &larr; Go back
          </Link>
        </Box>
      </Container>
      <ProjectQuestion />
    </ThemeProvider>
  );
};

export default Del;
