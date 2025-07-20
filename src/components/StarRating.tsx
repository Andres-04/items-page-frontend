"use client"

import { Star } from "lucide-react";

type Props = {
  rating: number;
};

export default function StarRating({ rating }: Props) {
  return (
    <div className="flex items-center gap-1 text-sm">
      <div className="flex text-blue-600">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${
              index < Math.round(rating)
                ? "fill-blue-600 text-blue-600"
                : "text-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}