"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import type { SubmitEvent } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ name, email, password });
    // فعلاً بعد ثبت‌نام می‌فرستیمش login
    router.push("/login");
  }

  return (
    <main className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-white border border-slate-200 rounded-xl shadow-sm p-6 space-y-4"
      >
        <h1 className="text-xl font-semibold text-slate-800 text-center">
          Create Account
        </h1>

        <div className="space-y-1">
          <label className="block text-sm text-slate-700">Name</label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm text-slate-700">Email</label>
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <div className="space-y-1">
          <label className="block text-sm text-slate-700">Password</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white text-sm font-medium py-2.5 rounded-lg hover:bg-green-700 transition"
        >
          Sign up
        </button>

        <p className="text-xs text-slate-400 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            Sign in
          </a>
        </p>
      </form>
    </main>
  );
}
