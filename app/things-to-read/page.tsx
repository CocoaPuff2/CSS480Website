"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function ThingsToRead() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.altKey) {
        const shortcut = e.key;
        const link = document.querySelector(`a[data-keyboard="${shortcut}"]`) as HTMLAnchorElement;
        if (link) {
          link.click();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Things to Read</h1>
      <p className="mb-6">
        Here are some interesting websites you can jump to using your keyboard (hold <strong>Alt</strong> + number).
      </p>
      <ol className="list-decimal list-inside space-y-4">
        <li>
          <Link
            href="https://bimmerplug.com"
            target="_blank"
            data-keyboard="1"
            className="text-blue-600 hover:underline"
          >
            BMW Mods (Alt+1)
          </Link>
        </li>
        <li>
          <Link
            href="https://www.formula1.com"
            target="_blank"
            data-keyboard="2"
            className="text-blue-600 hover:underline"
          >
            Formula 1 (Alt+2)
          </Link>
        </li>
        <li>
          <Link
            href="https://www.musee-orangerie.fr/en/node/197502"
            target="_blank"
            data-keyboard="3"
            className="text-blue-600 hover:underline"
          >
            Musée d'Orangerie (Alt+3)
          </Link>
        </li>
        <li>
          <Link
            href="https://www.visitdubai.com/en/articles/top-things-to-do-in-dubai"
            target="_blank"
            data-keyboard="4"
            className="text-blue-600 hover:underline"
          >
            Dubai Itinerary (Alt+4)
          </Link>
        </li>
        <li>
          <Link
            href="https://www.miumiu.com/us/en.html"
            target="_blank"
            data-keyboard="5"
            className="text-blue-600 hover:underline"
          >
            Miu Miu (Alt+5)
          </Link>
        </li>
        <li>
          <Link
            href="https://vaganovaacademy.ru/index/eng.html"
            target="_blank"
            data-keyboard="6"
            className="text-blue-600 hover:underline"
          >
            Vaganova Ballet Academy (Alt+6)
          </Link>
        </li>
        <li>
          <Link
            href="https://www.twinspires.com/edge/racing/top-10-best-racehorses-of-all-time/"
            target="_blank"
            data-keyboard="7"
            className="text-blue-600 hover:underline"
          >
            Racehorses (Alt+7)
          </Link>
        </li>
        <li>
          <Link
            href="https://stackoverflow.com/questions"
            target="_blank"
            data-keyboard="8"
            className="text-blue-600 hover:underline"
          >
            Stack Overflow (Alt+8)
          </Link>
        </li>
        <li>
          <Link
            href="https://www.dodgegarage.com/srt-demon-170"
            target="_blank"
            data-keyboard="9"
            className="text-blue-600 hover:underline"
          >
            Dodge Garage (Alt+9)
          </Link>
        </li>
        <li>
          <Link
            href="https://www.musee-orsay.fr/en"
            target="_blank"
            data-keyboard="0"
            className="text-blue-600 hover:underline"
          >
            Musée d'Orsay (Alt+0)
          </Link>
        </li>
      </ol>
    </main>
  );
}
