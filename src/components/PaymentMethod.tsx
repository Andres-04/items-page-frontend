import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function PaymentMethod() {
  return (
    <Card className="w-full max-w-sm p-4 rounded-2xl shadow-md">
      <CardContent className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold">Medios de pago</h2>
        <div>  
          <p className="text-sm font-medium">Tarjetas de crédito</p>
          <p className="text-xs text-muted-foreground">¡Paga en hasta 48 cuotas!</p>
          <div className="flex items-center gap-2 mt-2">
            <Image src="https://i.postimg.cc/fRR3mm6Z/seller1.png" alt="Visa" width={30} height={30} />
            <Image src="https://i.postimg.cc/fRR3mm6Z/seller1.png" alt="Mastercard" width={30} height={30} />
            <Image src="https://i.postimg.cc/fRR3mm6Z/seller1.png" alt="American Express" width={30} height={30} />
            <Image src="https://i.postimg.cc/fRR3mm6Z/seller1.png" alt="Codensa" width={30} height={30} />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium">Tarjetas de débito</p>
          <div className="flex items-center gap-2 mt-2">
            <Image src="https://i.postimg.cc/fRR3mm6Z/seller1.png" alt="Visa Débito" width={30} height={30} />
            <Image src="https://i.postimg.cc/fRR3mm6Z/seller1.png" alt="Mastercard Débito" width={30} height={30} />
          </div>
        </div>

        <div>
          <p className="text-sm font-medium">Efectivo</p>
          <div className="flex items-center gap-2 mt-2">
            <Image src="https://i.postimg.cc/fRR3mm6Z/seller1.png" alt="Efecty" width={30} height={30} />
          </div>
        </div>

        <Link href="#" className="text-sm text-blue-500 hover:underline">
        Conoce otros medios de pago
        </Link>
      </CardContent>
    </Card>
  );
}