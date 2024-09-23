import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebase/firebase";

const useSendData = (collectionName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const addData = async (newData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Add to firestore
      const docRef = await addDoc(collection(db, collectionName), newData);
      console.log("Document written with ID: ", docRef.id);
      setSuccess(true);
    } catch (e) {
      console.error("Error adding document: ", e);
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return { addData, loading, error, success };
};

export default useSendData;
