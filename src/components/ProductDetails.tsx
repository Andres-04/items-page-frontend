import { Star } from "lucide-react";
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
  return (
    <div className="space-y-4">
      {/* Condición y ventas */}
      <div className="text-sm text-muted-foreground">{product.condition ? "Nuevo" : "Usado"} | +{product.total_sold} vendidos</div>

      {/* Título */}
      <h1 className="text-xl font-semibold leading-tight">{product.title}</h1>

      {/* Rating */}
      <div className="flex items-center gap-1 text-sm">
        <span>{reviews.score}</span>
        <div className="flex text-yellow-400">
          {[...Array(5)].map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <span className="text-muted-foreground">({reviews.total})</span>
      </div>

      {/* Precio */}
      <div className="space-y-1">
        <h2 className="text-3xl font-medium">${product.price.toLocaleString("es-CO")}</h2>
        <p className="text-green-600">{"AAAAAAAA"}</p>
        <Button variant="link" className="h-auto p-0 text-blue-600 text-sm">
          Ver los medios de pago
        </Button>
      </div>

      {/* Color */}
      <div className="space-y-1">
        <p className="text-sm font-medium">Color: <span className="font-normal">{"blue"}</span></p>
        <div className="flex gap-2">
          {["blue", "green"].map((img, index) => (
            <div
              key={index}
              className="w-10 h-10 border rounded-md overflow-hidden"
            >
              <img src={img} alt={`Color ${index}`} className="object-cover w-full h-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Características */}
      <div className="space-y-1 text-sm">
        <p className="font-medium">Lo que tienes que saber de este producto</p>
        <ul className="list-disc list-inside text-muted-foreground space-y-1">
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