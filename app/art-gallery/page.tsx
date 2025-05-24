"use client";

import Image from "next/image";

export default function ArtGallery() {
  return (
    <main className="min-h-screen bg-neutral-100 text-gray-900 p-8 space-y-12">
      <h1 className="text-4xl font-bold text-center mb-4">🎨 Art Gallery</h1>
      <p className="text-center max-w-2xl mx-auto text-lg">
        Explore some of my favorite paintings! This layout is designed to guide your eye top to bottom,
        placing the most attention-grabbing painting first.
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
            Vincent van Gogh's swirling sky pulls you in instantly. Gogh's post-impressionist masterpiece captures emotional turbulence through vivid brushwork and color.
            Few people know that this famous painting was created in Saint-Paul Asylum after the artist suffered a mental break.
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
            Vermeer's painting, often called the "Mona Lisa of the North", draws you in with the subject’s mysterious gaze and iconic earring.
            This painting is referred to as a tronie, meaning it's not a portrait, rather a character.
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
            Water lillies is actually a collection of paintings by Monet, not just a single painting.
          </p>
        </div>
      </div>
    </main>
  );
}
