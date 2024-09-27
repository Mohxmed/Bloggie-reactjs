import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@utils/firebase/firebase";
const useAuthStatus = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log("User is logged in");
      } else {
        setUser(null);
        console.log("User is not logged in");
      }
    });
    return () => unsubscribe();
  }, []);

  return { user };
};

export default useAuthStatus;
