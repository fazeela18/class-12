"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignInPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Invalid email or password");
    } else {
      setError("");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">Sign In</h1>
      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
        >
          Sign In
        </button>
      </form>
      <div className="mt-6 text-center">
        <p className="text-sm text-gray-500">Or</p>
        <button
          onClick={() => signIn("github")}
          className="w-full bg-gray-700 text-white py-2 rounded-md hover:bg-gray-900 transition mt-4"
        >
          Sign In with GitHub
        </button>
        <button
          onClick={() => signIn("facebook")}
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-800 transition mt-4"
        >
          Sign In with FaceBook
        </button>
      </div>
    </div>
  );
}
