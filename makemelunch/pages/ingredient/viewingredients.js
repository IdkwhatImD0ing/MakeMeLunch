import { getAllIngredients } from "../../helper/firebaseHelper.js";
import { useAuth } from "../../context/UserAuthContext.jsx";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
//import styles from "../../styles/Home.module.css";
import Link from "next/link";
import styles from "../../styles/ing.module.css";

import MainAppBar from "../components/mainappbar.js";

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
        <h1 className={styles.title}>View Ingredients</h1>
        <br />
        <form onSubmit={(event) => viewIng(event)}>
          <button type="submit">View</button>
        </form>
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
    </>
  );
}
