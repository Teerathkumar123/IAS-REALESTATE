import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#030A14] text-foreground flex flex-col items-center justify-center p-6 text-center">
      <h1 className="font-serif text-6xl font-light text-emeraldAcc-500 mb-4">404</h1>
      <h2 className="font-serif text-2xl font-light uppercase mb-6 text-white">PAGE NOT FOUND</h2>
      <p className="text-sm text-slate-400 max-w-md mb-8">
        The requested architectural page could not be found. Return to IAS Real Estate & Builders homepage.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-emeraldAcc-500 text-background text-xs font-sans tracking-widest font-bold uppercase rounded-sm hover:opacity-90 transition-opacity"
      >
        RETURN HOME
      </Link>
    </main>
  );
}
