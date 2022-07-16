import React, { ReactNode } from "react";
import Link from "next/link";

interface PropsI {
  children: ReactNode;
}

export default function Layout({ children }: PropsI) {
  return (
    <>
      <nav className="bg-gray-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <ul className="flex">
            <li className="mr-4 border-b-2 border-transparent transition hover:border-blue-500">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-4 border-b-2 border-transparent transition hover:border-blue-500">
              <Link href="/posts">Posts</Link>
            </li>
            <li className="mx-4 border-b-2 border-transparent transition hover:border-blue-500">
              <Link href="/posts/add">Add post</Link>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section className="container pb-9 px-4 mx-auto">{children}</section>
      </main>
    </>
  );
}
