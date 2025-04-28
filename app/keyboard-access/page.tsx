export default function KeyboardAccessPage() {
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Keyboard Access Documentation</h1>
      <section className="space-y-4">
        <p>
          Our site is fully accessible via the keyboard! You can use the following shortcuts:
        </p>
        <ul className="list-disc list-inside space-y-2">
          <li><strong>Tab</strong> – Move to the next link or button</li>
          <li><strong>Shift + Tab</strong> – Move to the previous link or button</li>
          <li><strong>Enter</strong> – Activate the current link or button</li>
          <li><strong>Alt + 1</strong> – Open "BMW Mods"</li>
          <li><strong>Alt + 2</strong> – Open "Formula 1"</li>
          <li><strong>Alt + 3</strong> – Open "Musée d'Orangerie"</li>
        </ul>
        <p className="mt-6">
          <strong>Design Focus:</strong> We focused on making the site easy to navigate by keyboard.
          This includes visible focus indicators and quick access to important links through keyboard shortcuts.
          This follows usability principles of supporting efficiency, minimizing user effort, and ensuring discoverability.
        </p>
      </section>
    </main>
  );
}
