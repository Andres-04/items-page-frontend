import { Card, CardContent } from "@/components/ui/card";
import ReputationBar from "@/components/ReputationBar";
import { Button } from "@/components/ui/button";
import { Truck, BadgeCheck, Medal } from "lucide-react";
import Image from "next/image";

type Seller = {
  name: string;
  is_topseller: boolean;
  sales_last_month: number;
  total_followers: number;
  total_products: number;
  rating: number,
  rating_count: number,
  photo: string;
  features: string[];
};

type Props = {
  seller: Seller;
};

export default function SellerProfile({seller}: Props) {
  return (
    <Card className="w-full max-w-xs p-4">
      <CardContent className="p-4 space-y-4">
        {/* Header */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-md border flex items-center justify-center text-lg font-bold">
            <Image
              src={seller.photo}
              alt="Seller profile"
              width={60}
              height={60}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="flex-1">
            <h2 className="text-base font-medium leading-tight">{seller.name}</h2>
            <p className="text-sm text-muted-foreground">{seller.total_products} Productos</p>
          </div>
          <Button variant="bluelight" className="h-auto px-2 text-blue-600 text-xs">Seguir</Button>
        </div>

        {seller.is_topseller && (
          <div className="space-y-1">
            <p className="flex items-center gap-x-2 text-green-600 font-medium">
              <Medal className="w-4 h-4" />
              MercadoLíder
            </p>
            <p className="text-xs text-muted-foreground">¡Uno de los mejores del sitio!</p>
            <ReputationBar level={Math.round(seller.rating)}/>
          </div>
        )}

        <div className="grid grid-cols-3 text-center text-sm gap-2">
          <div className="flex flex-col items-center space-y-1">
            <span className="font-medium">+{seller.sales_last_month}</span>
            <span className="text-muted-foreground text-xs">Ventas concretadas</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <Truck className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground text-xs">{seller.features[0]}</span>
          </div>
          <div className="flex flex-col items-center space-y-1">
            <BadgeCheck className="h-4 w-4 text-muted-foreground" />
            <span className="text-muted-foreground text-xs">{seller.features[1]}</span>
          </div>
        </div>

        <Button variant="bluelight" className="w-full bg-blue-50 text-blue-600 hover:bg-blue-100">
          Ir a la página del vendedor
        </Button>
      </CardContent>
    </Card>
  );
}