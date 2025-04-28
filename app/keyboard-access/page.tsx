"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThingsToRead() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

      if (
        (isMac && e.altKey && e.ctrlKey) || // MacOS: Control + Option (Alt)
        (!isMac && e.altKey && !e.ctrlKey)   // Windows: Alt only
      ) {
        const shortcut = e.key;
        const link = document.querySelector(`a[data-keyboard="${shortcut}"]`) as HTMLAnchorElement;
        if (link) {
          link.click();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="p-8">
      {/* Navbar */}
      <nav className="flex space-x-8 mb-8 text-lg font-semibold">
        <Link href="/" className="text-blue-600 hover:underline" data-keyboard="h">Home</Link>
        <Link href="/documentation" className="text-blue-600 hover:underline" data-keyboard="d">Documentation</Link>
      </nav>

      {/* Main Content */}
      <main>
        <h1 className="text-3xl font-bold mb-6">Things to Read</h1>

        <p className="mb-6 text-gray-700">
          <strong>Keyboard Support:</strong>
          <br />
          • On <strong>Windows</strong>: Press <strong>Alt</strong> + [number] to open links.
          <br />
          • On <strong>MacOS</strong>: Press <strong>Control + Option (⌥)</strong> + [number] to open links.
          <br />
          <br />
          <em>
            This feature is intended to enhance efficiency and accessibility, allowing users who rely on keyboard navigation to quickly access resources without using a mouse.
          </em>
        </p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <Link href="https://bimmerplug.com" target="_blank" data-keyboard="1" className="text-blue-600 underline">
              1. BMW Mods
            </Link>
            {" "} (Alt+1 / Ctrl+⌥+1)
          </li>
          <li>
            <Link href="https://www.formula1.com" target="_blank" data-keyboard="2" className="text-blue-600 underline">
              2. Formula 1
            </Link>
            {" "} (Alt+2 / Ctrl+⌥+2)
          </li>
          <li>
            <Link href="https://www.musee-orangerie.fr/en/node/197502" target="_blank" data-keyboard="3" className="text-blue-600 underline">
              3. Musée d'Orangerie
            </Link>
            {" "} (Alt+3 / Ctrl+⌥+3)
          </li>
