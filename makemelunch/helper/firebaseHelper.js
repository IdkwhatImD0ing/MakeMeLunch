import { database } from "../firebase";
import { useAuth } from "../context/UserAuthContext";
import { useRouter } from "next/router";

import {
  doc,
  updateDoc,
  deleteField,
  setDoc,
  collection,
  getDoc,
} from "firebase/firestore";

export function addIngredient(auth, ingredient) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "ingredients");

  setDoc(docRef, { [ingredient]: 1 }, { merge: true });
  return;
}

export function deleteIngredient(auth, ingredient) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "ingredients");

  updateDoc(docRef, { [ingredient]: deleteField() });
  return;
}

export async function getAllIngredients(auth) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "ingredients");
  let docSnap = await getDoc(docRef);

  let fields = Object.keys(docSnap.data());

  let string = "";
  string += fields[0];
  for (let i = 1; i < fields.length; i++) {
    string += ",";
    string += fields[i];
  }
  return string;
}

export async function ingChanged(ingBool) {
  let userId = auth.user.uin;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "flags");
  updateDoc(docRef, { ingredientsChanged: ingBool });

  return;
}

export async function addRecipe(recipe) {
  let userId = auth.user.uin;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "recipe");
  updateDoc(docRef, {
    title: recipe.title,
    image: recipe.image,
    summary: recipe.summary,
    ingredients: recipe.extendedingredients,
    instructions: recipe.instructions,
    link: recipe.sourceUrl,
  });

  return;
}

export async function viewRecipe() {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "recipe");
  let docSnap = await getDoc(docRef);
  return docSnap.data();
}
