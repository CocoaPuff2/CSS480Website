"use client";

import Image from "next/image";

export default function ArtGallery() {
  return (
    <main className="min-h-screen bg-neutral-100 text-gray-900 p-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-4">🎨 Art Gallery</h1>
      <p className="text-center max-w-2xl mx-auto text-lg">
        Explore a few of my favorite paintings from history. This layout is designed to guide your eye top to bottom,
        placing the most attention-grabbing painting first. Let your imagination wander!
      </p>

      <div className="flex flex-col items-center space-y-12">

        <div className="flex flex-col items-center">
          <Image
            src="/starrynight.jpg"
            alt="Starry Night by Vincent van Gogh"
            width={700}
            height={500}
            priority
          />
          <h2 className="mt-4 text-2xl font-semibold">Starry Night</h2>
          <p className="text-sm text-center max-w-xl">
            Vincent van Gogh's swirling sky pulls you in instantly. This post-impressionist masterpiece captures emotional turbulence through vivid brushwork and color.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/girlpearl.jpg"
            alt="Girl with a Pearl Earring by Johannes Vermeer"
            width={600}
            height={500}
          />
          <h2 className="mt-4 text-2xl font-semibold">Girl with a Pearl Earring</h2>
          <p className="text-sm text-center max-w-xl">
            Often called the "Mona Lisa of the North", Vermeer’s quiet portrait draws you in with the subject’s mysterious gaze and iconic earring.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <Image
            src="/monet.jpg"
            alt="Water Lilies by Claude Monet"
            width={650}
            height={400}
          />
          <h2 className="mt-4 text-2xl font-semibold">Water Lilies</h2>
          <p className="text-sm text-center max-w-xl">
            Monet’s peaceful pond painting gently closes the visual journey, emphasizing reflection, stillness, and color harmony.
          </p>
        </div>
      </div>
    </main>
  );
}
