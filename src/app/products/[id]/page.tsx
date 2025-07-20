import { notFound } from 'next/navigation';
import { Metadata } from "next";
import PurchaseInfo from "@/components/PurchaseInfo";
import PaymentMethod from "@/components/PaymentMethod";
import ProductGallery from "@/components/ProductGallery";
import ProductDescription from "@/components/ProductDescription";
import SellerProfile from "@/components/SellerProfile";
import ProductDetails from "@/components/ProductDetails";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

type Props = {
  params: { id: string };
};

async function getProduct(id: string) {
  const res = await fetch('http://localhost:8000/products/' + id + '/full', {
    cache: 'no-store'
  });

  if (!res.ok) return null;
  return await res.json();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const info = await getProduct(id);
  if (!info) return {};
  const title = info.product.title;
  return {
    title: `${title}`,
    description: `Compra ${title} al mejor precio. Disponible ahora.`,
  };
}

export default async function Products({ params }: Props) {
  const { id } = await params;
  const info = await getProduct(id);
  if (!info) return notFound();

  return (
  <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
    <Card className="w-full max-w-7xl bg-white rounded-2xl rounded-md shadow-md p-6">
      <CardContent className="grid grid-cols-1 md:grid-cols-[800px_1fr] gap-6">
        {/* Primera columna */}
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <ProductGallery images={info.product.images} />
            </div>
            <div className="flex-1">
              <ProductDetails product={info.product} reviews={info.reviews}/>
            </div>
          </div>
          <Separator />
          <div>
            <ProductDescription description={info.product.description} />
          </div>
        </div>

        {/* Segunda columna */}
        <div className="flex flex-col gap-6">
          <div>
            <PurchaseInfo product={info.product} seller={info.seller} />
          </div>
          <div>
            <SellerProfile seller={info.seller} />
          </div>
          <div>
            <PaymentMethod />
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
  );
}