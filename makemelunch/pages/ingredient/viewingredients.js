import { getAllIngredients } from "../../helper/firebaseHelper.js";
import { useAuth } from "../../context/UserAuthContext.jsx";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
//import styles from "../../styles/Home.module.css";
import Link from "next/link";
import styles from "../../styles/ing.module.css";
import Container from "@mui/material/Container";
import MainAppBar from "../components/mainappbar";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ProductQuestion from "../components/projectquestion";

export default function ViewIngredients() {
  const auth = useAuth();
  const [ings, setIngs] = useState([]);
  const [yes, setYes] = useState(null);

  const handleClick = () => {
    auth.logOut();
  };

  const viewIng = async (event) => {
    event.preventDefault();
    let str = await getAllIngredients(auth);
    //console.log(str);
    setIngs(str.split(","));
    setYes(1);
  };

  return (
    <>
      <Head>
        <title>View Ingredients</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainAppBar />

      <main className={styles.main}>
        <Container maxWidth="xl" sx={{ textAlign: "center" }}>
          <Typography variant="h3" sx={{ my: 4 }}>
            View your ingredients
          </Typography>
          <Box component="form" onSubmit={viewIng} noValidate>
            <Button
              type="submit"
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
              View Recipe
            </Button>
          </Box>
        </Container>
        <br />
        <Link href="javascript:history.back()">&larr; Go back</Link>
        <br />
        {yes && (
          <div className={styles.viewingredients}>
            {ings.map((ing, index) => (
              <div id={index} key={ing}>
                <h3 id={ing}>{ing}</h3>
              </div>
            ))}
          </div>
        )}
      </main>
      <ProductQuestion />
    </>
  );
}
