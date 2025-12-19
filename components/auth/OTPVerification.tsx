"use client";
import { useState } from "react";
import AuthForm, { InputConfig } from "./AuthForm";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle forgot password logic here
    console.log({ email });
    alert("If an account with that email exists, a password reset link has been sent.");
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
  ];

  return (
    <AuthForm
      title="Forgot Your Password?"
      description="Enter your email address and we'll send you a link to reset your password."
      onSubmit={handleSubmit}
      inputs={inputs}
      submitText="Send Reset Link"
      footerText="Remember your password?"
      footerLinkText="Sign in"
      footerLinkHref="/signin"
    />
  );
};

export default ForgotPasswordPage;