import Link from "next/link";

export default async function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-2xl font-bold">Productos</h1>

      <Link href="/products/ML0001" className="text-blue-500 hover:underline">
        Ir a producto ML0001
      </Link>

      <Link href="/products/ML0002" className="text-blue-500 hover:underline">
        Ir a producto ML0002
      </Link>
    </main>
  );
}
