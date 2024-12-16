"use client";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Welcome to Study Calls</h1>
      <Link href="/call">Start a Study Call</Link>
    </main>
  );
}
