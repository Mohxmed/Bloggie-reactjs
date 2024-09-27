import { auth, db } from "@utils/firebase/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import uploadImage from "@utils/store/uploadImage";

async function handleRegister(email, password, displayName, photoUrl) {
  try {
    // Create user with email and password
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    const user = userCredential.user;

    // Upload profile picture to storage
    const uploadedImgUrl = await uploadImage(photoUrl, user.uid);
    // Update profile with display name and photo URL
    await updateProfile(user, {
      displayName: displayName,
      photoURL: uploadedImgUrl,
    });
    // Save user to firestore
    await setDoc(doc(db, "users", user.uid), {
      displayName: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
      verified: false,
    });

    toast.success("New Account created successfully");
  } catch (error) {
    switch (error.code) {
      case "auth/email-already-in-use":
        toast.error("Email already in use.");
        break;
      default:
        toast.error("Registration failed. Please try again.");
        break;
    }
  }
}

export default handleRegister;
