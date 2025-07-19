import { notFound } from 'next/navigation';
import { Metadata } from "next";
import PurchaseInfo from "@/components/PurchaseInfo";
import PaymentMethod from "@/components/PaymentMethod";
import ProductGallery from "@/components/ProductGallery";

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
    <main className="flex flex-col space-y-5 min-h-screen items-center justify-center bg-gray-100">
      <PurchaseInfo product={info.product} seller={info.seller} />
      <PaymentMethod />
      <ProductGallery images={info.product.images} />
    </main>
  );
}