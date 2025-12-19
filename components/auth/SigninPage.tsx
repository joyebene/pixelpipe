"use client";
import { useState } from "react";
import Link from "next/link";
import AuthForm, { InputConfig } from "./AuthForm";
import { useRouter } from "next/navigation";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-in logic here
    console.log({ email, password });
    router.push("/dashboard");
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
      autoComplete: "current-password",
      required: true,
      value: password,
      onChange: (e) => setPassword(e.target.value),
    },
  ];

  return (
    <AuthForm
      title="Welcome Back!!"
      onSubmit={handleSubmit}
      inputs={inputs}
      submitText="Sign In"
      footerText="Don't have an account?"
      footerLinkText="Sign up"
      footerLinkHref="/signup"
    >
      <div className="flex items-center justify-end">
        <div className="text-sm">
          <Link
            href="/forgot-password"
            className="font-medium text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300"
          >
            Forgot your password?
          </Link>
        </div>
      </div>
    </AuthForm>
  );
};

export default SignInPage;