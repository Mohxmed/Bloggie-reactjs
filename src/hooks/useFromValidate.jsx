import { useState } from "react";

const useFormValidate = (formData) => {
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function check() {
    let checkErrors = {};
    // email RegEx check
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      checkErrors.email = "Email is invalid";
    }
    // Min Length
    if (formData.password.length < 6) {
      checkErrors.password = "Password must be at least 6 characters";
    }
    // Match Password
    if (formData.password !== formData.confirmPassword) {
      checkErrors.confirmPassword = "Password is not Match";
    }
    // If no data
    if (!formData.email.trim()) {
      checkErrors.email = "Email is required";
    }
    if (!formData.password.trim()) {
      checkErrors.password = "Password is required";
    }
    if (!formData.displayName) {
      checkErrors.name = "Name is required";
    }
    if (!formData.confirmPassword) {
      checkErrors.confirmPassword = "Password Confirm is required";
    }
    // Password contain spaces
    if (!/^\S*$/.test(formData.password)) {
      checkErrors.password = "Password should not contain spaces";
    }
    console.log(checkErrors);
    setErrors(checkErrors);
  }

  return { errors, check };
};

export default useFormValidate;
