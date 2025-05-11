import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex gap-4 mt-4" aria-label="Main navigation">
      <Link href="/">
        <a className="underline focus:outline focus:outline-2 focus:outline-blue-500" accessKey="h">
          Home
        </a>
      </Link>
      <Link href="/things-to-read">
        <a className="underline focus:outline focus:outline-2 focus:outline-blue-500" accessKey="t">
          Things to Read
        </a>
      </Link>
      <Link href="/keyboard-documentation">
        <a className="underline focus:outline focus:outline-2 focus:outline-blue-500" accessKey="k">
          Keyboard Documentation
        </a>
      </Link>
      {/* Add the "Car Gallery" link */}
      <Link href="/car-gallery">
        <a className="underline focus:outline focus:outline-2 focus:outline-blue-500" accessKey="c">
          Car Gallery
        </a>
      </Link>
    </nav>
  );
}
