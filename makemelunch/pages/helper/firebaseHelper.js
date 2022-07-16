import { database } from "../../firebase";
import { useAuth } from "../../context/UserAuthContext";
import { useRouter } from "next/router";

import { doc, updateDoc, deleteField, setDoc } from "firebase/firestore";

function addIngredient(ingredient) {
  const auth = useAuth();
  const router = useRouter();

  let userId = auth.currentUser.uid;
  let colRef = database.collection(userId);
  let docRef = colRef.doc("ingredients");

  setDoc(docRef, { ingredient: 1 }, { merge: true });
  return;
}

function deleteIngredient(ingredient) {
  const auth = userAuth();
  const router = useRouter();

  let userId = auth.currentUser.uid;
  let colRef = database.collection(userId);
  let docRef = colRef.doc("ingredients");

  updateDoc(docRef, { ingredient: deleteField() });
  return;
}

function getAllIngredients() {
  const auth = userAuth();
  const router = useRouter();

  let userId = auth.currentUser.uid;
  let colRef = database.collection(userId);
  let docRef = colRef.doc("ingredients");

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
