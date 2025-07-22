import {render, screen} from '@testing-library/react';
import ProductDetails from '@/components/ProductDetails';


describe('ProductDetails', () => {
  const product = {
    title: 'Vidrio Templado Samsung S3',
    condition: true,
    price: 10000,
    total_sold: 1,
    features: [
      { name: "Material", value: "Vidrio" },
      { name: "Modelo", value: "Samsung S3" },
    ],
  };
  const reviews = {
    score: 3.0,
    total: 1,
  };  

  it("should render title, condition and sales", () => {
    render(<ProductDetails product={product} reviews={reviews} />);

    expect(screen.getByText("Vidrio Templado Samsung S3")).toBeInTheDocument();
    expect(screen.getByText(/Nuevo/i)).toBeInTheDocument();
    expect(screen.getByText(/\+1 vendidos/)).toBeInTheDocument();
  });

  it("should render price information", () => {
    render(<ProductDetails product={product} reviews={reviews} />);

    expect(screen.getByText("$10.000")).toBeInTheDocument();
    expect(screen.getByText(/3 cuotas de \$3.333/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ver los medios de pago/i })).toBeInTheDocument();
  });

  it("should render product features", () => {
    render(<ProductDetails product={product} reviews={reviews} />);

    expect(screen.getByText(/Lo que tienes que saber de este producto/i)).toBeInTheDocument();
    expect(screen.getByText(/Material:/)).toBeInTheDocument();
    expect(screen.getByText(/Modelo:/)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /ver características/i })).toBeInTheDocument();
  });

});