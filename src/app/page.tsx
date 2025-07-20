import PaymentMethod from "@/components/PaymentMethod";

export default async function Home() {
  const res = await fetch('http://localhost:8000', {
    cache: 'no-store'
  });
  const msg = await res.json();
  return ( 
    <main className="flex flex-col justify-center items-center min-h-screen bg-gray-50">
      <h1>Mensaje: {msg.message}</h1>
    </main>
  );
}
