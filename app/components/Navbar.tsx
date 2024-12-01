'use client';

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-500 text-white py-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-lg font-bold">
          <Link href="/">MyApp</Link>
        </h1>
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-blue-400 transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-blue-400 transition">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-blue-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
