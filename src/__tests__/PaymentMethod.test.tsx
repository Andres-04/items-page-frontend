import {render, screen} from '@testing-library/react';
import PaymentMethod from '@/components/PaymentMethod';


describe('PaymentMethod', () => {
  it('should render PaymentMethod component', () => {
    render(<PaymentMethod />);

    expect(screen.getByText('Medios de pago')).toBeInTheDocument();
    expect(screen.getByText('Tarjetas de crédito')).toBeInTheDocument();
    expect(screen.getByText('Tarjetas de débito')).toBeInTheDocument();
    expect(screen.getByText('Efectivo')).toBeInTheDocument();
  });

  it("should render main and secondary titles", () => {
    render(<PaymentMethod />);

    expect(screen.getByText("Medios de pago")).toBeInTheDocument();
    expect(screen.getByText("Tarjetas de crédito")).toBeInTheDocument();
    expect(screen.getByText("¡Paga en hasta 48 cuotas!")).toBeInTheDocument();
    expect(screen.getByText("Tarjetas de débito")).toBeInTheDocument();
    expect(screen.getByText("Efectivo")).toBeInTheDocument();
  });

  it("should render payment method images", () => {
    render(<PaymentMethod />);

    expect(screen.getByAltText("Visa")).toBeInTheDocument();
    expect(screen.getByAltText("Mastercard")).toBeInTheDocument();
    expect(screen.getByAltText("American Express")).toBeInTheDocument();
    expect(screen.getByAltText("Codensa")).toBeInTheDocument();
    expect(screen.getByAltText("Visa Débito")).toBeInTheDocument();
    expect(screen.getByAltText("Mastercard Débito")).toBeInTheDocument();
    expect(screen.getByAltText("Efecty")).toBeInTheDocument();
  });
});
