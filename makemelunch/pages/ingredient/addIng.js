import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/ing.module.css";
import { useAuth } from "../../context/UserAuthContext";
import { addIngredient, ingChanged } from "../../helper/firebaseHelper";
import MainAppBar from "../components/mainappbar";
import ProjectQuestion from "../components/projectquestion";
import { Button, Typography } from "@mui/material";

const Add = () => {
  const router = useRouter();
  const auth = useAuth();

  const [ingredient, setIngredient] = useState("");

  const addIng = (event, ingredient) => {
    event.preventDefault();

    addIngredient(auth, ingredient);
    ingChanged(auth, true);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Add Ingredients</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainAppBar />
      <div className={styles.container}>
        <main className={styles.main}>
          <Typography variant="h3" sx={{ my: 4 }}>
            Add Ingredients
          </Typography>
          <br />
          <form onSubmit={(event) => addIng(event, ingredient)}>
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
      </div>
      <ProjectQuestion />
    </>
  );
};

export default Add;
