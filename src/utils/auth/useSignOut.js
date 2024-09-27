import { auth } from "@utils/firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useSignOut = () => {
  // React-router
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/login");
    toast.success("Successfully Signed out.");
  };

  return handleSignOut;
};
export default useSignOut;
