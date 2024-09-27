import { auth, db } from "@utils/firebase/firebase";
import { getDoc, setDoc, doc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const useGoogleLogin = () => {
  // react-router
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check if user already exists in Firestore
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);
      // if-not (just for the first time)
      if (!userDocSnap.exists()) {
        const userData = {
          displayName: user.displayName || "Mohamed",
          email: user.email,
          photoURL: user.photoURL || null,
          verified: false,
        };
        // save to firestore
        await setDoc(userDocRef, userData);
      }
      toast.success("Successfully Signed in");

      // Navigate to home
      navigate("/");
    } catch (e) {
      toast.error(e.code);
    }
  };
  return handleGoogleLogin;
};

export default useGoogleLogin;
