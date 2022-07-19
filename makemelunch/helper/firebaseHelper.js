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
  set,
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

export async function ingChanged(auth, ingBool) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "flags");
  setDoc(docRef, { ingredientsChanged: ingBool }, { merge: true });

  return;
}

export async function getIngVar(auth) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "flags");
  let docSnap = await getDoc(docRef);

  return docSnap.data();
}

export function addRecipe(auth, recipe) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "recipe");
  setDoc(docRef, recipe, { merge: true });

  return;
}

export async function viewRecipe(auth) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "recipe");
  let docSnap = await getDoc(docRef);
  return docSnap.data();
}
