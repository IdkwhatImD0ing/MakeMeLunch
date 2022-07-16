import { database } from "../../firebase";
import { useAuth } from "../../context/UserAuthContext";
import { useRouter } from "next/router";

import {
  doc,
  updateDoc,
  deleteField,
  setDoc,
  collection,
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

export function getAllIngredients(auth) {
  let userId = auth.user.uid;
  let colRef = collection(database, userId);
  let docRef = doc(colRef, "ingredients");

  let fields = Object.keys(docRef.data());
  if (fields.length == 0) {
    return "error";
  }
  let string = fields[0];
  for (let i = 1; i < fields.length; i++) {
    string += ",";
    string += fields[i];
  }

  return fields;
}
