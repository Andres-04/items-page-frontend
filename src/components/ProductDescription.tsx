type Props = {
  description: string;
};

export default function ProductDescription({ description }: Props) {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">Descripción</h1>
      <p className="text-lg text-muted-foreground">{description}</p>
    </section>
  );
}