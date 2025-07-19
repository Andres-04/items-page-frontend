"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images: string[];
};

export default function ProductGallery({ images }: Props) {
  const [selected, setSelected] = useState(images[0]);

  return (
    <div className="flex gap-4">
      {/* Miniaturas a la izquierda */}
      <div className="flex flex-col gap-2">
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelected(img)}
            className={`w-[60px] h-[60px] border ${
              selected === img ? "border-2 border-[#3483fa]" : "border-[#929292]/70"
            } rounded overflow-hidden`}
          >
            <Image
              src={img}
              alt={`Thumbnail ${index + 1}`}
              width={60}
              height={60}
              className="object-contain w-full h-full"
            />
          </button>
        ))}
      </div>

      {/* Imagen principal a la derecha */}
      <div className="w-[410px] h-[500px] rounded overflow-hidden flex items-center justify-center">
        <Image
          src={selected}
          alt="Selected Product"
          width={410}
          height={500}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
