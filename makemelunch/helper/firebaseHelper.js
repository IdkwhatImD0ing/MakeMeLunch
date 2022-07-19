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

  await updateDoc(docRef, { [ingredient]: deleteField() });
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

export async function ingChanged(auth, ingBool) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "flags");
  await updateDoc(docRef, { ingredientsChanged: ingBool });

  return;
}

export async function getIngVar(auth) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "flags");
  let docSnap = await getDoc(docRef);

  return docSnap.data();
}


export async function addRecipeGroup(auth, recipe) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "recipeGroup");
  await updateDoc(docRef, recipe);

  return;
}

export async function addRecipe(auth, recipe) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "recipe");
  await updateDoc(docRef, recipe);

  return;
}

export async function viewRecipeGroup(auth) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "recipeGroup");
  let docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function viewRecipe(auth) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "recipe");
  let docSnap = await getDoc(docRef);
  return docSnap.data();
}
