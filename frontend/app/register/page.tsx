"use client";

import { useState } from "react";
import { register } from "@/services/auth";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register({
        username,
        email,
        password,
      });

      alert("Registration Successful");

      window.location.href = "/login";
    } catch (error: any) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <section className="space-y-4">
      <form
        onSubmit={handleRegister}
        className="space-y-4 border-2 border-black rounded-md p-4 w-full max-w-md mx-auto mt-30"
      >
        <h1 className="text-2xl font-semibold text-center text-black">
          Register
        </h1>

        <div className="space-y-2">
          <label>Username</label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-slate-500 p-2 rounded text-black"
          />
        </div>

        <div className="space-y-2">
          <label>Email</label>

          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-slate-500 p-2 rounded text-black"
          />
        </div>

        <div className="space-y-2">
          <label>Password</label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-slate-500 p-2 rounded text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Register
        </button>

        <p className="text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600">
            Login
          </a>
        </p>
      </form>
    </section>
  );
}