import { getAllIngredients } from "../helper/fireBaseHelper.js";
import { useAuth } from "../../context/UserAuthContext.jsx";
import { useRouter } from "next/router";
import { useState } from "react";
//import styles from "../../styles/Home.module.css";
import Link from "next/link";
import styles from "../../styles/view.module.css"

export default function ViewIngredients() {
  const router = useRouter();
  const auth = useAuth();
  const [ings, setIngs] = useState([])

  const viewIng = async (event) => {
    event.preventDefault();
    let str = await getAllIngredients(auth);
    //console.log(str);
    setIngs(str.split(','))
    console.log(ings)
  };
  const arr = ["apple", "pineapple", "tomato", "orange", "cranberry", "pear", "strawberry", "grape", "dragonfruit", "watermelon"]
  return (
    <>
      <header>
        <a>MakeMyLunch</a>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/ingredient/addIng">Add Ingredients</a></li>
            <li><a href="/ingredient/deleteIng">Remove Ingredients</a></li>
            <li><a href="/viewingredients">View Ingredients</a></li>
            <li><a href="/getrecipes">Get Recipes</a></li>
            <li><a href="#">Sign Out</a></li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>View Ingredients</h1>
        <br />
        <form onSubmit={(event) => viewIng(event)}>
          <button type="submit">View</button>
        </form>
        <Link href="/">&larr; Go back</Link>
        <div className={styles.viewingredients}>
          {ings.map(ing => <h3 id={ing}>{ing}</h3>)}
        </div>
      </main>
    </>
  );
}
