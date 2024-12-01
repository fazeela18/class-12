"use client";

import { signOut } from "next-auth/react";

export default function SignOutPage() {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-gray-700 mb-4">Welcome!</h1>
      <p className="text-gray-600 mb-6">You are logged in successfully.</p>
      <button
        onClick={() => signOut()}
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition"
      >
        Sign Out
      </button>
    </div>
  );
}
