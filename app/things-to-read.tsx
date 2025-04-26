// app/things-to-read/page.tsx
import Link from 'next/link';

export default function ThingsToRead() {
  return (
    <div className="p-8">
      <h1 className="text-3xl mb-4">Things to Read</h1>
      <p className="mb-6">Here are some of the websites I enjoy:</p>
      <ul>
        <li><Link href="https://bimmerplug.com" target="_blank">BMW Mods</Link></li>
        <li><Link href="https://www.formula1.com" target="_blank">Formula 1</Link></li>
        <li><Link href="https://www.musee-orangerie.fr/en/node/197502" target="_blank">Musee d'Orangerie</Link></li>
        <li><Link href="https://www.visitdubai.com/en/articles/top-things-to-do-in-dubai" target="_blank">Dubai Itinerary</Link></li>
        <li><Link href="https://www.miumiu.com/us/en.html" target="_blank">Miu Miu</Link></li>
        <li><Link href="https://vaganovaacademy.ru/index/eng.html" target="_blank">Vaganova Ballet Academy</Link></li>
        <li><Link href="https://www.twinspires.com/edge/racing/top-10-best-racehorses-of-all-time/" target="_blank">Racehorses</Link></li>
        <li><Link href="https://stackoverflow.com/questions" target="_blank">Stack Overflow</Link></li>
        <li><Link href="https://www.dodgegarage.com/srt-demon-170" target="_blank">Dodge Garage</Link></li>
        <li><Link href="https://www.musee-orsay.fr/en" target="_blank">Musee d'Orsay</Link></li>
      </ul>
    </div>
  );
}
