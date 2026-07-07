"use client";

import { useState } from "react";
import { login } from "@/services/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await login({
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);

      alert("Login Successful");

      window.location.href = "/dashboard";
    } catch (error: unknown) {
      alert((error as { response?: { data?: { message?: string } } }).response?.data?.message || "Login Failed");
    }
  };

  return (
    <section>
      <form
        onSubmit={handleLogin}
        className="space-y-4 border-2 border-black rounded-md p-4 w-full max-w-md mx-auto mt-40"
      >
        <h1 className="text-2xl font-semibold text-center text-black">Login</h1>

        <div>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-slate-500 p-2 rounded text-black"
          />
        </div>

        <div>
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
          Login
        </button>

        <p className="text-center">
          Don&rsquo;t have an account?{" "}
          <a href="/register" className="text-blue-600">
            Register
          </a>
        </p>
      </form>
    </section>
  );
}