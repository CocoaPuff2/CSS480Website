"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThingsToRead() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) { // For both Windows Alt and Mac Option
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
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/documentation" className="text-blue-600 hover:underline">Documentation</Link>
      </nav>

      {/* Main Content */}
      <main>
        <h1 className="text-3xl font-bold mb-6">Things to Read</h1>
        <p className="mb-6 text-gray-700">
          Use your keyboard! Press <strong>Alt</strong> (Windows) or <strong>Option</strong> (Mac) + the number to instantly open a link.
        </p>

        <ol className="list-decimal list-inside space-y-4">
          <li>
            <Link
              href="https://bimmerplug.com"
              target="_blank"
              data-keyboard="1"
              className="text-blue-600 underline"
            >
              1. BMW Mods
            </Link>
            {" "} (Alt+1 / ⌥+1)
          </li>
          <li>
            <Link
              href="https://www.formula1.com"
              target="_blank"
              data-keyboard="2"
              className="text-blue-600 underline"
            >
              2. Formula 1
            </Link>
            {" "} (Alt+2 / ⌥+2)
          </li>
          <li>
            <Link
              href="https://www.musee-orangerie.fr/en/node/197502"
              target="_blank"
              data-keyboard="3"
              className="text-blue-600 underline"
            >
              3. Musée d'Orangerie
            </Link>
            {" "} (Alt+3 / ⌥+3)
          </li>
          <li>
            <Link
              href="https://www.visitdubai.com/en/articles/top-things-to-do-in-dubai"
              target="_blank"
              data-keyboard="4"
              className="text-blue-600 underline"
            >
              4. Dubai Itinerary
            </Link>
            {" "} (Alt+4 / ⌥+4)
          </li>
          <li>
            <Link
              href="https://www.miumiu.com/us/en.html"
              target="_blank"
              data-keyboard="5"
              className="text-blue-600 underline"
            >
              5. Miu Miu
            </Link>
            {" "} (Alt+5 / ⌥+5)
          </li>
          <li>
            <Link
              href="https://vaganovaacademy.ru/index/eng.html"
              target="_blank"
              data-keyboard="6"
              className="text-blue-600 underline"
            >
              6. Vaganova Ballet Academy
            </Link>
            {" "} (Alt+6 / ⌥+6)
          </li>
          <li>
            <Link
              href="https://www.twinspires.com/edge/racing/top-10-best-racehorses-of-all-time/"
              target="_blank"
              data-keyboard="7"
              className="text-blue-600 underline"
            >
              7. Racehorses
            </Link>
            {" "} (Alt+7 / ⌥+7)
          </li>
          <li>
            <Link
              href="https://stackoverflow.com/questions"
              target="_blank"
              data-keyboard="8"
              className="text-blue-600 underline"
            >
              8. Stack Overflow
            </Link>
            {" "} (Alt+8 / ⌥+8)
          </li>
          <li>
            <Link
              href="https://www.dodgegarage.com/srt-demon-170"
              target="_blank"
              data-keyboard="9"
              className="text-blue-600 underline"
            >
              9. Dodge Garage
            </Link>
            {" "} (Alt+9 / ⌥+9)
          </li>
          <li>
            <Link
              href="https://www.musee-orsay.fr/en"
              target="_blank"
              data-keyboard="0"
              className="text-blue-600 underline"
            >
              10. Musée d'Orsay
            </Link>
            {" "} (Alt+0 / ⌥+0)
          </li>
        </ol>
      </main>
    </div>
  );
}

