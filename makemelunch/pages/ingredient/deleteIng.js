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

const Del = () => {
  const router = useRouter();
  const auth = useAuth();

  const [ingredient, setIngredient] = useState("");

  const deleteIng = (event, ingredient) => {
    event.preventDefault();

    deleteIngredient(auth, ingredient);
    ingChanged(auth, true);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Remove Ingredients</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainAppBar />
      <main className={styles.main}>
        <Typography variant="h3" sx={{ my: 4 }}>
          Remove Ingredients
        </Typography>
        <br />
        <form onSubmit={(event) => deleteIng(event, ingredient)}>
          <label htmlFor="ingredient">Ingredient: </label>
          <input
            type="ingredient"
            name="ingredient"
            value={ingredient}
            onChange={(event) => setIngredient(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <br />
        <Link href="javascript:history.back()">&larr; Go back</Link>
      </main>
      <ProjectQuestion />
    </>
  );
};

export default Del;
