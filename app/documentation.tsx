"use client";

export default function KeyboardDocumentation() {
  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-6">Keyboard Shortcuts</h1>

      <section className="space-y-4 text-gray-800">
        <p><strong>Go to Home Page:</strong></p>
        <ul className="list-disc list-inside">
          <li>Mac: Control + Option + H</li>
          <li>Windows: Alt + H</li>
        </ul>

        <p><strong>Go to Keyboard Documentation Page:</strong></p>
        <ul className="list-disc list-inside">
          <li>Mac: Control + Option + K</li>
          <li>Windows: Alt + K</li>
        </ul>

        <p><strong>Go to Things to Read Page:</strong></p>
        <ul className="list-disc list-inside">
          <li>Mac: Control + Option + T</li>
          <li>Windows: Alt + T</li>
        </ul>

        <p><strong>External Links (1–0):</strong></p>
        <ul className="list-disc list-inside">
          <li>Mac: Control + Option + [1–0]</li>
          <li>Windows: Alt + [1–0]</li>
        </ul>
      </section>
    </main>
  );
}
