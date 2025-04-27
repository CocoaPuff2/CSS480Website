import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="flex gap-4 mt-4" aria-label="Main navigation">
      <Link href="/">
        <a
          className="underline focus:outline focus:outline-2 focus:outline-blue-500"
          accessKey="h" // Shortcut for 'Home'
          aria-label="Home"
        >
          Home
        </a>
      </Link>
      <Link href="/things-to-read">
        <a
          className="underline focus:outline focus:outline-2 focus:outline-blue-500"
          accessKey="t" // Shortcut for 'Things to Read'
          aria-label="Things to Read"
        >
          Things to Read
        </a>
      </Link>
    </nav>
  );
}
