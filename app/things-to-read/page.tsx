import Link from 'next/link';

export default function ThingsToRead() {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Things to Read</h1>
      <p className="mb-6">Here are some of the websites I enjoy:</p>
      <ul className="space-y-4">
        <li>
          <Link
            href="https://bimmerplug.com"
            target="_blank"
            className="text-blue-600 hover:underline visited:text-purple-600 focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit BMW Mods website"
            tabIndex={0} // Ensures the link can be focused via keyboard
          >
            BMW Modifications
          </Link>
        </li>
        <li>
          <Link
            href="https://www.formula1.com"
            target="_blank"
            className="text-blue-600 hover:underline visited:text-purple-600 focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit Formula 1 website"
            tabIndex={0}
          >
            Formula 1
          </Link>
        </li>
        <li>
          <Link
            href="https://www.musee-orangerie.fr/en/node/197502"
            target="_blank"
            className="text-blue-600 hover:underline visited:text-purple-600 focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit Musee d'Orangerie website"
            tabIndex={0}
          >
            Musee d'Orangerie
          </Link>
        </li>
        {/* Add the rest of your links similarly */}
      </ul>
    </div>
  );
}
