// src/app/login/page.tsx
"use client";

import { useState } from "react";
import { useAuth } from "../hooks/userAuth";
import AuthForm from "../components/AuthForm";
import "../../styles/globals.css";

export default function LoginPage() {
  const { login, register } = useAuth();
  const [isSignUp, setIsSignUp] = useState(false);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    await login(
      formData.get("email") as string,
      formData.get("password") as string,
    );

    form.reset();
  };

  const handleRegistration = async (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    await register(
      formData.get("email") as string,
      formData.get("password") as string,
    );

    form.reset();
  };

  return (
    <div className="u-max-width-650" style={{ margin: "0 auto" }}>
      <section className="card u-margin-32">
        <h2 className="eyebrow-heading-2">Login/Register</h2>
        <AuthForm
          handleSubmit={isSignUp ? handleRegistration : handleLogin}
          submitType={isSignUp ? "Sign Up" : "Log In"}
        />
        <button
          onClick={() => setIsSignUp(!isSignUp)}
          className="u-margin-block-start-16"
        >
          {isSignUp
            ? "Already have an account? Log in"
            : "Don't have an account? Sign up"}
        </button>
      </section>
    </div>
  );
}
