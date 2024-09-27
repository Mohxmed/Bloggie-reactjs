import React from "react";
import LoginForm from "../components/ui/login/LoginForm";

export default function Login() {
  return (
    <div className="w-full min-h-[500px] h-[calc(100vh-4rem)] flex justify-center items-center login-svg">
      <LoginForm />
    </div>
  );
}
