import { toast } from "react-toastify";
import { storage } from "@utils/firebase/firebase";
import { uploadBytes, getDownloadURL, ref } from "firebase/storage";

const uploadImage = async (file, uid) => {
  if (!file) {
    toast.error("No file selected for upload.");
    return null; // Return null if no file is provided
  }

  // Create a storage reference with a better structure
  const storageRef = ref(storage, `profile_photos/${uid}/profile_picture.jpg`);

  try {
    // Upload the file
    await uploadBytes(storageRef, file);

    // Get the download URL
    const downloadUrl = await getDownloadURL(storageRef);
    console.log("Photo uploaded successfully");
    return downloadUrl; // Return the download URL
  } catch (e) {
    toast.error("Error occurred while uploading image to server");
    console.error("Upload error:", e); // Log the error
    return null; // Return null on error
  }
};

export default uploadImage;
