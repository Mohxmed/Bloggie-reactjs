import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@utils/firebase/firebase";
import useAuthStatus from "@hooks/useAuthStatus";
import LoadingSpinner from "@components/LoadingSpinner";
import { RiVipCrown2Fill } from "react-icons/ri";
import userPlaceholder from "../../../assets/userplacehold.webp";
import { FcCheckmark } from "react-icons/fc";
import {
  PiFacebookLogo,
  PiGithubLogo,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiX,
  PiXLogo,
} from "react-icons/pi";

const getUserData = async (uid) => {
  const userDocRef = doc(db, "users", uid);
  const userDocSnap = await getDoc(userDocRef);

  if (userDocSnap.exists()) {
    return userDocSnap.data();
  } else {
    throw new Error("No user data found in Firestore");
  }
};

const Profile = () => {
  const { user } = useAuthStatus();
  const [firestoreUserData, setFirestoreUserData] = useState(null);
  const options = { year: "numeric", month: "long", day: "numeric" };
  const lastLogin = new Date(
    user && Number(user.metadata.lastLoginAt)
  ).toLocaleDateString(undefined, options);
  const joinedAt = new Date(
    user && Number(user.metadata.createdAt)
  ).toLocaleDateString(undefined, options);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchUserData = async () => {
      if (user) {
        try {
          const userData = await getUserData(user.uid);
          setFirestoreUserData(userData);
        } catch (error) {
          console.error("Error fetching Firestore data:", error);
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, [user]);

  return (
    <div className="container mt-4 grid grid-cols-12 gap-4">
      <div className="col-span-3 space-y-4">
        <div className="border rounded-lg">
          {user && firestoreUserData ? (
            <div className="p-4">
              {/* User profile image */}
              <div className="flex justify-center">
                <img
                  src={firestoreUserData.photoURL || userPlaceholder}
                  alt="User Profile"
                  className="rounded-full h-24 w-24 object-cover mb-4 border p-1"
                />
              </div>
              {/* Display Name */}
              <div className="border-b pb-2 flex items-center gap-2 justify-center">
                <h2 className="text-xl font-semibold text-gray-800">
                  {firestoreUserData.displayName || "User"}
                </h2>
                {firestoreUserData.admin ? (
                  <span className="bg-gradient-to-r from-yellow-600 to-yellow-700 px-1 w-max aspect-square flex items-center rounded-full text-white text-xs ">
                    <RiVipCrown2Fill size={15} />
                  </span>
                ) : null}
              </div>
              {/* Verification Status */}
              <div
                className={`flex justify-center mt-2 px-4 py-1 rounded-full text-sm ${
                  firestoreUserData.verified
                    ? "bg-green-200 text-green-800"
                    : "bg-red-200 text-red-800"
                }`}
              >
                {firestoreUserData.verified ? (
                  <span className="flex items-center gap-2">
                    <span>Verified</span> <FcCheckmark />
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <span>Not Verified</span> <PiX />
                  </span>
                )}
              </div>
              {/* Last Seen */}
              <span className="text-xs text-gray-500 mt-2 block text-center">
                Last Seen :{" "}
                {firestoreUserData.admin ? "Always Here!" : lastLogin}
              </span>
              <span className="text-xs text-gray-500 mt-2 block text-center">
                Joined at :{" "}
                {firestoreUserData.admin ? "Before Internet" : joinedAt}
              </span>
            </div>
          ) : null}
          {/* Statistics */}
          <div className="flex justify-between gap-1 border-y py-2">
            <div className="flex justify-center items-center flex-col g-gray-300 w-1/3 h-12">
              <span className="text-md font-bold text-gray-600">15</span>
              <span className="text-xs text-gray-500">Posts</span>
            </div>
            <div className="flex justify-center items-center flex-col g-gray-300 w-1/3 h-12">
              <span className="text-md font-bold text-gray-600">790</span>
              <span className="text-xs text-gray-500">Views</span>
            </div>
            <div className="flex justify-center items-center flex-col g-gray-300 w-1/3 h-12">
              <span className="text-md font-bold text-gray-600">150</span>
              <span className="text-xs text-gray-500">Followers</span>
            </div>
          </div>
          {/* Social Media */}
          <div className="p-4 gap-4 justify-center text-gray-500 flex">
            <a>
              <PiGithubLogo />
            </a>
            <a>
              <PiLinkedinLogo />
            </a>
            <a>
              <PiXLogo />
            </a>
            <a>
              <PiInstagramLogo />
            </a>
            <a>
              <PiFacebookLogo />
            </a>
          </div>
        </div>
        <div className="border rounded-lg h-12 p-2 flex items-center gap-2">
          <span className="bg-blue-100 px-2 py-1 text-sm rounded-md text-gray-700">
            English
          </span>
          <span className="bg-blue-100 px-2 py-1 text-sm rounded-md text-gray-700">
            Arabic
          </span>
        </div>
      </div>

      {/* Second Profile Section */}
      <div className=" rounded-lg col-span-6 border "></div>
      <div className=" rounded-lg col-span-3 border "></div>
    </div>
  );
};

export default Profile;

// <div className="flex justify-center items-center h-[calc(100vh-4rem)] bg-gray-100">
//   <div className="bg-white shadow-lg rounded-lg min-h-80 flex justify-center items-center p-6 max-w-md w-full">
//     {firestoreUserData ? (
//       <div className="text-center">

//         {/* Email */}
//         <p className="text-gray-600 mb-4">{firestoreUserData.email}</p>

//       </div>
//     ) : (
//       <LoadingSpinner />
//     )}
//   </div>
// </div>
