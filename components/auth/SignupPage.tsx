"use client";
import { useState } from "react";
import AuthForm, { InputConfig } from "./AuthForm";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Handle sign-up logic here
    console.log({ email, password });
  };

  const inputs: InputConfig[] = [
    {
      id: "email",
      label: "Email Address",
      name: "email",
      type: "email",
      autoComplete: "email",
      required: true,
      value: email,
      onChange: (e) => setEmail(e.target.value),
    },
    {
      id: "password",
      label: "Password",
      name: "password",
      type: "password",
      autoComplete: "new-password",
      required: true,
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
    {
      id: "confirm-password",
      label: "Confirm Password",
      name: "confirm-password",
      type: "password",
      autoComplete: "new-password",
      required: true,
      value: confirmPassword,
      onChange: (e) => setConfirmPassword(e.target.value),
    },
  ];

  return (
    <AuthForm
      title="Create an Account"
      onSubmit={handleSubmit}
      inputs={inputs}
      submitText="Sign Up"
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkHref="/signin"
    />
  );
};

export default SignUpPage;