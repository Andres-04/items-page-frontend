
export async function getProduct(id: string) {
  const res = await fetch('http://localhost:8000/products/' + id + '/full', {
    cache: 'no-store'
  });

  if (!res.ok) return null;
  return await res.json();
}
