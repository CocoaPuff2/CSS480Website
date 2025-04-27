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
            className="text-blue-600 hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit BMW Mods website"
            accessKey="1" // Shortcut for the first link
          >
            BMW Mods
          </Link>
        </li>
        <li>
          <Link
            href="https://www.formula1.com"
            target="_blank"
            className="text-blue-600 hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit Formula 1 website"
            accessKey="2" // Shortcut for the second link
          >
            Formula 1
          </Link>
        </li>
        <li>
          <Link
            href="https://www.musee-orangerie.fr/en/node/197502"
            target="_blank"
            className="text-blue-600 hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit Musee d'Orangerie website"
            accessKey="3" // Shortcut for the third link
          >
            Musee d'Orangerie
          </Link>
        </li>
        <li>
          <Link
            href="https://www.visitdubai.com/en/articles/top-things-to-do-in-dubai"
            target="_blank"
            className="text-blue-600 hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit Dubai Itinerary website"
            accessKey="4" // Shortcut for the fourth link
          >
            Dubai Itinerary
          </Link>
        </li>
        <li>
          <Link
            href="https://www.miumiu.com/us/en.html"
            target="_blank"
            className="text-blue-600 hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit Miu Miu website"
            accessKey="5" // Shortcut for the fifth link
          >
            Miu Miu
          </Link>
        </li>
        <li>
          <Link
            href="https://vaganovaacademy.ru/index/eng.html"
            target="_blank"
            className="text-blue-600 hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit Vaganova Ballet Academy website"
            accessKey="6" // Shortcut for the sixth link
          >
            Vaganova Ballet Academy
          </Link>
        </li>
        <li>
          <Link
            href="https://www.twinspires.com/edge/racing/top-10-best-racehorses-of-all-time/"
            target="_blank"
            className="text-blue-600 hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit Top 10 Best Racehorses of All Time"
            accessKey="7" // Shortcut for the seventh link
          >
            Racehorses
          </Link>
        </li>
        <li>
          <Link
            href="https://stackoverflow.com/questions"
            target="_blank"
            className="text-blue-600 hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit Stack Overflow website"
            accessKey="8" // Shortcut for the eighth link
          >
            Stack Overflow
          </Link>
        </li>
        <li>
          <Link
            href="https://www.dodgegarage.com/srt-demon-170"
            target="_blank"
            className="text-blue-600 hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit Dodge Garage website"
            accessKey="9" // Shortcut for the ninth link
          >
            Dodge Garage
          </Link>
        </li>
        <li>
          <Link
            href="https://www.musee-orsay.fr/en"
            target="_blank"
            className="text-blue-600 hover:underline focus:outline focus:outline-2 focus:outline-blue-500"
            aria-label="Visit Musee d'Orsay website"
            accessKey="0" // Shortcut for the tenth link
          >
            Musee d'Orsay
          </Link>
        </li>
      </ul>
    </div>
  );
}
