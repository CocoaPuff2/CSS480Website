"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function KeyboardDocumentation() {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;

      if (
        (isMac && e.altKey && e.ctrlKey) || // Mac: Control + Option
        (!isMac && e.altKey && !e.ctrlKey)   // Windows: Alt only
      ) {
        const shortcut = e.key.toLowerCase();
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
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-8">Keyboard Documentation</h1>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Navigation Shortcuts</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>Tab + H</strong> — Go to <Link href="/" data-keyboard="h" className="text-blue-600 underline">Home</Link></li>
          <li><strong>Tab + K</strong> — Go to <Link href="/keyboard-documentation" data-keyboard="k" className="text-blue-600 underline">Keyboard Documentation</Link></li>
          <li><strong>Tab + T</strong> — Go to <Link href="/things-to-read" data-keyboard="t" className="text-blue-600 underline">Things to Read</Link></li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-4">Opening External Links</h2>
        <p className="text-gray-700 mb-2">
          You can open external links by pressing:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li><strong>On Windows:</strong> Press <strong>Alt</strong> + [number]</li>
          <li><strong>On MacOS:</strong> Press <strong>Control</strong> + <strong>Option (⌥)</strong> + [number]</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">External Link Shortcuts</h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li><a href="https://bimmerplug.com" target="_blank" data-keyboard="1" className="text-blue-600 underline">BMW Mods</a> (Alt+1 / Ctrl+⌥+1)</li>
          <li><a href="https://www.formula1.com" target="_blank" data-keyboard="2" className="text-blue-600 underline">Formulaa 1</a> (Alt+2 / Ctrl+⌥+2)</li>
          <li><a href="https://www.musee-orangerie.fr/en/node/197502" target="_blank" data-keyboard="3" className="text-blue-600 underline">Musée d'Orangerie</a> (Alt+3 / Ctrl+⌥+3)</li>
          <li><a href="https://www.visitdubai.com/en/articles/top-things-to-do-in-dubai" target="_blank" data-keyboard="4" className="text-blue-600 underline">Dubai Itinerary</a> (Alt+4 / Ctrl+⌥+4)</li>
          <li><a href="https://www.miumiu.com/us/en.html" target="_blank" data-keyboard="5" className="text-blue-600 underline">Miu Miu</a> (Alt+5 / Ctrl+⌥+5)</li>
          <li><a href="https://vaganovaacademy.ru/index/eng.html" target="_blank" data-keyboard="6" className="text-blue-600 underline">Vaganova Ballet Academy</a> (Alt+6 / Ctrl+⌥+6)</li>
          <li><a href="https://www.twinspires.com/edge/racing/top-10-best-racehorses-of-all-time/" target="_blank" data-keyboard="7" className="text-blue-600 underline">Racehorses</a> (Alt+7 / Ctrl+⌥+7)</li>
          <li><a href="https://stackoverflow.com/questions" target="_blank" data-keyboard="8" className="text-blue-600 underline">Stack Overflow</a> (Alt+8 / Ctrl+⌥+8)</li>
          <li><a href="https://www.dodgegarage.com/srt-demon-170" target="_blank" data-keyboard="9" className="text-blue-600 underline">Dodge Garage</a> (Alt+9 / Ctrl+⌥+9)</li>
          <li><a href="https://www.musee-orsay.fr/en" target="_blank" data-keyboard="0" className="text-blue-600 underline">Musée d'Orsay</a> (Alt+0 / Ctrl+⌥+0)</li>
        </ol>
      </section>
    </main>
  );
}
