import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import styles from "../../styles/Home.module.css";
import { useAuth } from "../../context/UserAuthContext";
import { setErrorMessage } from "../../context/setErrorMessage";
import { addIngredient } from "../helper/firebaseHelper";

const Login = () => {
  const router = useRouter();
  const auth = useAuth();

  const [ingredient, setIngredient] = useState("");

  const addIng = (event, ingredient) => {
    event.preventDefault();

    addIngredient(auth, ingredient);
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Add Ingredient</h1>
        <br />
        <form onSubmit={(event) => addIng(event, ingredient)}>
          <label htmlFor="ingredient">Ingredient</label>
          <input
            type="ingredient"
            name="ingredient"
            value={ingredient}
            onChange={(event) => setIngredient(event.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <Link href="/">&larr; Go back</Link>
      </main>
    </div>
  );
};

export default Login;
