import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@utils/firebase/firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const handleSignIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    toast.success("Successfully logged in");
  } catch (err) {
    // Handle different error codes
    switch (err.code) {
      case "auth/network-request-failed":
        toast.error(
          "Network error. Please check your internet connection and try again."
        );
        break;
      case "auth/invalid-email":
        toast.error("Invalid email.");
        break;
      case "auth/user-not-found":
        toast.error("No user found with this email.");
        break;
      case "auth/wrong-password":
        toast.error("Incorrect password. Please try again.");
        break;
      default:
        toast.error("Failed to login. Please try again.");
    }
  }
};
export default handleSignIn;
