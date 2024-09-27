import { db } from "@utils/firebase/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useState } from "react";

export default async function getUserData(uid) {
  const [data, setData] = useState({});
  const docRef = doc(db, "users", uid);
  const getData = await getDoc(docRef);

  const userData = getData.data();
  setData(userData);
  return data;
}
