import { useState, useEffect } from "react";
import { collection, getDocs, QuerySnapshot } from "firebase/firestore";
import { db } from "../utils/firebase/firebase";

const useFetchData = (collectionName) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch Data From Firestore
        const querySnapshot = await getDocs(collection(db, collectionName));
        const items = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(items);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    //
    fetchData();
  }, [collectionName]);

  return { data, loading, error };
};

export default useFetchData;
