import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

import { useAuth } from "../../context/UserAuthContext";
import { addIngredient, ingChanged } from "../../helper/firebaseHelper";
import MainAppBar from "../components/mainappbar";
import StickyProductQuestion from "../components/stickyproductquestion";
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

const url =
  "https://images.unsplash.com/photo-1490735891913-40897cdaafd1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const Add = () => {
  const router = useRouter();
  const auth = useAuth();

  const addIng = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    addIngredient(auth, data.get("ingredient"));
    ingChanged(auth, true);
    router.push("/");
  };

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Add Ingredients</title>
        <link rel="icon" href="/icon.ico" />
      </Head>

      <Box
        component="section"
        sx={{
          display: "flex",
          overflow: "hidden",
          backgroundImage: `url(${url})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          flexDirection: "column",
          height: "100vh",
        }}
      >
        <MainAppBar />
        <Container>
          <Typography variant="h3" sx={{ my: 4, textAlign: "center" }}>
            Add Ingredients
          </Typography>
          <Box
            component="form"
            onSubmit={addIng}
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
              Add
            </Button>
            <Link textAlign="center" href="javascript:history.back()">
              &larr; Go back
            </Link>
          </Box>
        </Container>
      </Box>
      <StickyProductQuestion />
    </ThemeProvider>
  );
};

export default Add;
