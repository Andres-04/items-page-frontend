import { render, screen } from "@testing-library/react";
import SellerProfile from "@/components/SellerProfile";

const seller = {
  name: "Samsung Oficial",
  is_topseller: true,
  sales_last_month: 1200,
  total_followers: 5000,
  total_products: 80,
  rating: 4.3,
  rating_count: 100,
  photo: "https://example.com/photo.jpg",
  features: ["Entrega rápida", "Compra protegida"],
};

describe("SellerProfile", () => {
  it("should render name, products and follow button", () => {
    render(<SellerProfile seller={seller} />);

    expect(screen.getByText("Samsung Oficial")).toBeInTheDocument();
    expect(screen.getByText("80 Productos")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /seguir/i })).toBeInTheDocument();
  });

  it("should render MercadoLíder if topseller is true", () => {
    render(<SellerProfile seller={seller} />);

    expect(screen.getByText("MercadoLíder")).toBeInTheDocument();
    expect(screen.getByText("¡Uno de los mejores del sitio!")).toBeInTheDocument();
  });

  it("should render ReputationBar", () => {
    render(<SellerProfile seller={seller} />);

    const reputationBars = screen.getAllByTestId("reputation-bar");
    expect(reputationBars.length).toBe(5);
  });

  it("should render sales and features", () => {
    render(<SellerProfile seller={seller} />);
    expect(screen.getByText("+1200")).toBeInTheDocument();
    expect(screen.getByText("Ventas concretadas")).toBeInTheDocument();
    expect(screen.getByText("Entrega rápida")).toBeInTheDocument();
    expect(screen.getByText("Compra protegida")).toBeInTheDocument();
  });

  it("should render seller photo", () => {
    render(<SellerProfile seller={seller} />);
    const img = screen.getByAltText("Seller profile") as HTMLImageElement;
    expect(img.src).toContain("photo.jpg");
  });

  it("should render seller page button", () => {
    render(<SellerProfile seller={seller} />);
    expect(screen.getByRole("button", { name: /ir a la página del vendedor/i })).toBeInTheDocument();
  });

  it("should not render MercadoLíder when topseller is false", () => {
    const sellerNoTop = { ...seller, is_topseller: false };
    render(<SellerProfile seller={sellerNoTop} />);
    expect(screen.queryByText("MercadoLíder")).not.toBeInTheDocument();
  });
});
