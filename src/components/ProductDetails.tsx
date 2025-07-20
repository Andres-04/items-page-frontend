"use client"

import { Star } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

type Features = {
  name: string;
  value: string;
};

type Product = {
  title: string;
  condition: boolean;
  price: number;
  total_sold: number;
  features: Features[];
};

type Reviews = {
  score: number;
  total: number;
};

type Props = {
  product: Product;
  reviews: Reviews;
};

export default function ProductDetails({ product, reviews }: Props) {
  const colors = ["red", "black", "gray"];
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  return (
    <div className="space-y-4">
      {/* Condición y ventas */}
      <div className="text-sm text-muted-foreground">{product.condition ? "Nuevo" : "Usado"} | +{product.total_sold} vendidos</div>

      {/* Título */}
      <h1 className="text-xl font-semibold leading-tight">{product.title}</h1>

      {/* Rating */}
      <div className="flex items-center gap-1 text-sm">
        <span>{reviews.score}</span>
        <div className="flex text-blue-600">
          {[...Array(5)].map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${
                index < Math.round(reviews.score)
                  ? "fill-blue-600 text-blue-600"
                  : "text-muted-foreground"
              }`}
            />
          ))}
        </div>
        <span className="text-muted-foreground">({reviews.total})</span>
      </div>

      {/* Precio */}
      <div className="space-y-1">
        <h2 className="text-3xl font-medium">${product.price.toLocaleString("es-CO")}</h2>
        <p>
          en <span className="text-green-600">3 cuotas de ${(product.price/3).toLocaleString("es-CO")} con 0% interés</span>
        </p>
        <Button variant="link" className="h-auto p-0 text-blue-600 text-sm">
          Ver los medios de pago
        </Button>
      </div>

      {/* Color */}
      <div className="space-y-1">
        <p className="text-sm font-medium">Color: <span className="font-normal">{selectedColor}</span></p>
        <div className="flex gap-4">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`w-10 h-10 rounded-full cursor-pointer border-2 ${
                selectedColor === color ? "border-blue-600" : "border-gray-300"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      {/* Características */}
      <div className="space-y-1 text-sm">
        <p className="font-medium">Lo que tienes que saber de este producto</p>
        <ul className="list-disc list-inside space-y-1">
          {product.features.map((feature, index) => (
          <li key={index}>
            <span className="font-medium">{feature.name}:</span> {feature.value}
          </li>
          ))}
        </ul>
        <Button variant="link" className="h-auto p-0 text-blue-600 text-sm">
          Ver características
        </Button>
      </div>
    </div>
  );
}