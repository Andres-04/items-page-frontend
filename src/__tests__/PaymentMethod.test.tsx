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
});
