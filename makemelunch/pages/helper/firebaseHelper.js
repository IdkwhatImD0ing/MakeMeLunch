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
}

function deleteIngredient(ingredient) {
  const auth = userAuth();
  const router = useRouter();

  let userId = auth.currentUser.uid;
  let colRef = database.collection(userId);
  let docRef = colRef.doc("ingredients");

  updateDoc(docRef, { ingredient: deleteField() });
}
