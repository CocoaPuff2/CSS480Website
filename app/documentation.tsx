"use client";

import Link from "next/link";

export default function Documentation() {
  return (
    <div className="p-8">
      {/* Navbar */}
      <nav className="flex space-x-8 mb-8 text-lg font-semibold">
        <Link href="/" className="text-blue-600 hover:underline">Home</Link>
        <Link href="/documentation" className="text-blue-600 hover:underline">Documentation</Link>
      </nav>

      {/* Documentation Content */}
      <main>
        <h1 className="text-3xl font-bold mb-6">Documentation: Keyboard Support</h1>
        <section className="text-gray-700 space-y-4">
          <p>
            <strong>Goal:</strong> Provide fast, accessible navigation to important links using only the keyboard.
          </p>
          <p>
            <strong>Keyboard Shortcut:</strong> Press <strong>Alt (Windows)</strong> or <strong>Option (⌥) (Mac)</strong> plus a number key (1-0) to instantly visit the corresponding page.
          </p>
          <p>
            <strong>Usability Principles Applied:</strong>
          </p>
          <ul className="list-disc list-inside pl-4 space-y-2">
            <li><strong>Efficiency of Use:</strong> Experienced users can perform actions quickly without needing a mouse.</li>
            <li><strong>Accessibility:</strong> Users who rely on keyboards or have motor impairments can still easily navigate the site.</li>
            <li><strong>Consistency:</strong> Consistent shortcut patterns (Alt/Option + Number) across all pages.</li>
            <li><strong>Visibility:</strong> Shortcut instructions are clearly displayed next to each link.</li>
          </ul>
          <p>
            <strong>Note:</strong> On MacOS, the <strong>Option (⌥)</strong> key is equivalent to Windows' <strong>Alt</strong> key for activating the shortcut functionality in this app.
          </p>
        </section>
      </main>
    </div>
  );
}
