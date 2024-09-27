import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// components
import Input, { ValidInput } from "@components/Input";
import { FormButton, GoogleLoginButton } from "@components/Buttons";
// utils
import useFormValidate from "@hooks/useFromValidate";
import handleLogin from "@utils/auth/handleLogin";
import useGoogleLogin from "@utils/auth/useGoogleLogin";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { errors, check } = useFormValidate(formData);
  const handleGoogleLogin = useGoogleLogin();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    check();
    if (
      !Object.keys(errors).includes("email") &&
      !Object.keys(errors).includes("password")
    ) {
      handleLogin(formData.email, formData.password);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md mx-auto bg-white p-8 rounded-lg border space-y-4"
    >
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
        Login
      </h2>
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
      <div className="flex flex-col gap-4 items-center justify-between">
        {/*Submit Button*/}
        <FormButton label={"Log In"} onClick={handleSubmit} />
        {/*Google button*/}
        <GoogleLoginButton
          label={"Google Account"}
          onClick={() => {
            handleGoogleLogin();
          }}
        />
        {/*Links*/}
        <div className="divide-x-2 space-x-2 divide-gray-300">
          <Link to={"/register"} className="text-sm text-blue-800 self-start">
            Create a new account
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

export default LoginForm;
