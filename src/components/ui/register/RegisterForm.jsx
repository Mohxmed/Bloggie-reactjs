import { useState } from "react";
import { Link } from "react-router-dom";
// Components
import Input, { ValidInput } from "@components/Input";
import ImageUpload from "@components/ImageUpload";
import { FormButton, GoogleLoginButton } from "@components/Buttons";
// utils
import useFormValidate from "@hooks/useFromValidate";
import useCreateAccount from "@utils/auth/useCreateAccount";

const RegisterForm = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  //
  const { errors, check } = useFormValidate(formData);

  // handlers
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }
  };
  const handleRemoveImage = (e) => {
    e.stopPropagation();
    setSelectedImage(null);
  };

  /* Submit */
  const { handleRegister } = useCreateAccount(
    formData.email,
    formData.password,
    formData.displayName,
    selectedImage
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      handleRegister();
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onBlur={() => check()}
      className="w-full max-w-md mx-auto bg-white p-8 rounded-lg border space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
        Register
      </h2>
      <div>
        {/* Register Inputs */}
        <Input
          label="Name"
          type="text"
          name="displayName"
          value={formData.displayName}
          onChange={handleChange}
          placeholder="Type your full name"
          errors={errors.name}
        />
        <ValidInput validKey={errors.name} />
      </div>
      <div>
        <Input
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          errors={errors.email}
        />
        <ValidInput validKey={errors.email} />
      </div>
      <div>
        <Input
          label="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Enter your password"
          errors={errors.password}
        />
        <ValidInput validKey={errors.password} />
      </div>

      <div>
        <Input
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Re-enter your password"
          errors={errors.confirmPassword}
        />
        <ValidInput validKey={errors.confirmPassword} />
      </div>

      <div className="flex flex-col gap-4 items-center justify-between">
        {/* Upload Profile Picture */}
        <ImageUpload
          selectedImage={selectedImage}
          handleImageChange={handleImageChange}
          handleRemoveImage={handleRemoveImage}
        />
        {/* policy and term-of-use checkbox */}
        <div className="self-start flex items-center">
          <input type="checkbox" defaultChecked id="terms" className="mr-2" />
          <label className="text-xs" htmlFor="terms">
            I accept Bloggie{" "}
            <a href="#" className="text-blue-600">
              Policies & Terms of use
            </a>
          </label>
        </div>
        <FormButton label={"Create New Account"} onClick={handleSubmit} />
        {/* Google */}
        <GoogleLoginButton label={"Google Register"} onClick={() => {}} />
        {/* Other options links */}
        <div className="divide-x-2 space-x-2 divide-gray-300">
          <Link to={"/login"} className="text-sm text-blue-800 self-start">
            Already have an account
          </Link>
          <Link
            to={"/signup"}
            className="text-sm text-blue-800 self-start pl-2"
          >
            Forgot my password
          </Link>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
