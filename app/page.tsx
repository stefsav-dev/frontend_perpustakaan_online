'use client';

import "./globals.css";
import { NavigationMenuDemo } from "./utility/NavigationMenu";

export default function HomePage() {
  return (
    <>
    <NavigationMenuDemo/>
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">Welcome to the Home Page!</h1>
    </main>
    </>
  );
}