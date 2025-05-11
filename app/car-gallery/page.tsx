"use client";

import Image from "next/image";
import '../car-gallery.css';

export default function CarGallery() {
  return (
    <div className="min-h-screen bg-white text-black p-8 space-y-12">
      <h1 className="text-2xl font-bold text-center">Car Gallery</h1>

      <div className="flex flex-col items-center space-y-8">
        <div className="flex flex-col items-center">
          <Image
            src="https://example.com/dodge.jpg" // Fixed URL: added second slash
            alt="Dodge Challenger!!"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold subheading">Dodge Challenger</p>
          <p className="text-sm">This is my absolute favorite car. I love American muscle cars.</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="https://example.com/bmw.jpg" // Fixed URL: added second slash
            alt="BMW"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold subheading">BMW M5</p>
          <p className="text-sm">I love vintage cars, especially any BMW from the 1990s.</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="https://example.com/camaro.jpg" // Fixed URL: added second slash
            alt="Camaro"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold subheading">Camaro</p>
          <p className="text-sm">Bumblebee from Transformers! The car that got me into cars.</p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="https://example.com/mercedes.jpg" // Fixed URL: added second slash
            alt="Mercedes AMG"
            width={600}
            height={400}
            className="rounded-lg"
          />
          <p className="mt-2 text-lg font-semibold subheading">Mercedes A</p>
          <p className="text-sm">I see so many of these in Dubai, and they have a really cool look!</p>
        </div>
      </div>
    </div>
  );
}
