import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Seller = {
  name: string;
  sales_last_month: number;
};

type Product = {
  stock: number;
  free_shipping: boolean;
};

type Props = {
  product: Product;
  seller: Seller;
};

export default function PurchaseInfo({ product, seller }: Props) {
  return (
    <Card className="w-full max-w-xs mx-auto shadow-none p-4 space-y-4">
      <CardHeader>
        <p className="text-sm">
          <span className="text-green-600 font-bold">Envío{product.free_shipping ? " gratis" : ""}</span>  a todo el país
        </p>
        
        <p className="text-xs text-muted-foreground">
          Conoce los tiempos y las formas de envío.
        </p>
        <Link href="#" className="text-blue-500 text-xs">
          Calcular cuándo llega
        </Link>
      </CardHeader>

      <CardContent className="space-y-2">
        <p className="font-semibold">Stock disponible</p>
        <p className="text-sm text-muted-foreground">
          Cantidad:
          <span className="font-semibold"> 1 unidad</span>
          <span className="text-gray-400"> ({product.stock} disponibles)</span>
        </p>

        <div className="space-y-2 pt-2">
          <Button variant="blue" className="w-full">Comprar ahora</Button>
          <Button variant="bluelight" className="w-full">
            Agregar al carrito
          </Button>
        </div>

        <p className="text-sm">
          Vendido por <Link href="#" className="text-blue-500">{seller.name}</Link>
        </p>
        <p className="text-sm text-muted-foreground">
          MercadoLíder | <span className="font-bold">+{seller.sales_last_month} ventas</span>
        </p>

        <p className="text-xs">
          <span className="text-blue-500 font-bold">Devolución gratis.</span> Tienes 30 días desde que lo recibes.
        </p>
        <p className="text-xs">
          <span className="text-blue-500 font-bold">Compra Protegida,</span> recibe el producto que esperabas o te devolvemos tu dinero.
        </p>
      </CardContent>
    </Card>
  );
}