"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import AuthForm, { InputConfig } from "./AuthForm";

const ResetPasswordPage = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    // Handle reset password logic here
    console.log({ token, password });
  };

  const inputs: InputConfig[] = [
    {
      id: "password",
      label: "New Password",
      name: "password",
      type: "password",
      autoComplete: "new-password",
      required: true,
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
    {
      id: "confirm-password",
      label: "Confirm New Password",
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
      title="Reset Your Password"
      onSubmit={handleSubmit}
      inputs={inputs}
      submitText="Reset Password"
      footerText="Remember your password?"
      footerLinkText="Sign in"
      footerLinkHref="/signin"
    />
  );
};

export default ResetPasswordPage;