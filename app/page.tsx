"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const hobbies = [
  { id: 0, name: 'Programming' },
  { id: 1, name: 'Horseback Riding' },
  { id: 2, name: 'Traveling' },
  { id: 3, name: 'Cars' },
  { id: 4, name: 'Paris!' }
];

function HobbyList() {
  const [hobbyList, setHobbyList] = useState(hobbies);

  const shuffleList = () => {
    const shuffledHobbies = [...hobbyList];
    for (let i = shuffledHobbies.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledHobbies[i], shuffledHobbies[j]] = [shuffledHobbies[j], shuffledHobbies[i]];
    }
    setHobbyList(shuffledHobbies);
  };

  return (
    <div>
      <button
        onClick={shuffleList}
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        aria-label="Shuffle hobbies list"
      >
        Shuffle List
      </button>
      <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)] mt-6">
        {hobbyList.map(hobby => (
          <li key={hobby.id} className="mb-2 tracking-[-.01em]">
            {hobby.name}
          </li>
        ))}
      </ol>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex gap-4 mt-4" aria-label="Main navigation">
      <Link href="/">
        <a className="underline focus:outline focus:outline-2 focus:outline-blue-500" accessKey="h">Home</a>
      </Link>
      <Link href="/things-to-read">
        <a className="underline focus:outline focus:outline-2 focus:outline-blue-500" accessKey="t">Things to Read</a>
      </Link>
      <Link href="/keyboard-documentation">
        <a className="underline focus:outline focus:outline-2 focus:outline-blue-500" accessKey="k">Keyboard Documentation</a>
      </Link>
      {/* Added the link to Car Gallery */}
      <Link href="/car-gallery">
        <a className="underline focus:outline focus:outline-2 focus:outline-blue-500" accessKey="c">Car Gallery</a>
      </Link>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-black">
      <NavBar />

      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start text-white">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />

        <Image
          src="/car.png"
          alt="Image of a cool car"
          width={720}
          height={152}
          priority
        />

        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            I'm Sal! Welcome to my CSS 480 Landing Page! I like traveling, programming, and cool cars, especially Dodge Challengers and BMWs.
            I'm excited to share my journey with you and look forward to building awesome projects in this course!
          </li>
        </ol>

        <p>List of Hobbies:</p>
        <HobbyList />

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>

        {/* Keyboard Shortcuts Section */}
        <div className="mt-16 w-full max-w-xl text-sm text-left text-white">
          <h2 className="text-xl font-semibold mb-4">Keyboard Shortcuts</h2>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Go to Home Page:</strong> Control + Option + Tab + H (Mac), Alt + Tab + H (Windows) — Works globally from any page</li>
            <li><strong>Go to Things to Read:</strong> Control + Option + T (Mac), Alt + T (Windows)</li>
            <li><strong>Go to Keyboard Documentation:</strong> Control + Option + K (Mac), Alt + K (Windows)</li>
            <li><strong>External Links:</strong> Control + Option + 1–0 (Mac), Alt + 1–0 (Windows)</li>
          </ul>
          <p className="mt-6">
            <strong>(Keyboard Access:</strong> On Windows: Hold <code>Alt</code> + number key.<br />
            On Mac: Hold <code>Control</code> + <code>Option (⌥)</code> + number key.
            This works for navigating to external links via access keys.
            To return to the Home page from anywhere, press <code>Control + Option + Tab + H</code>.)
          </p>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-white">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
