"use client";

import { useRouter } from "next/navigation";
import type { SubmitEvent  } from "react";
import { useState } from "react";


export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    if (email == "test@gmail.com" && password == "123456789") {
      router.push("/tasks");
    }
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white border border-slate-200 rounded-xl shadow-sm p-6 space-y-4"
      >
        <h1 className="text-xl font-semibold text-slate-800 text-center">
          Login
        </h1>

        <div className="space-y-1">
          <label className="block text-sm text-slate-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm text-slate-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-blue-700 transition"
        >
          Sign in
        </button>

        <p className="text-xs text-slate-400 text-center">
          Demo login: test@gmail.com / 123456789
        </p>
      </form>
    </main>
  );

}
