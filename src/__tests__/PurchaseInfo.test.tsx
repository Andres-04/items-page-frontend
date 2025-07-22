import {render, screen} from '@testing-library/react';
import PurchaseInfo from '@/components/PurchaseInfo';


describe('PurchaseInfo', () => {
  it('should render PurchaseInfo component', () => {
    const product = {
      stock: 10,
      free_shipping: true
    };
    const seller = {
      name: 'Samsung Oficial',
      sales_last_month: 100
    };
    render(<PurchaseInfo product={product} seller={seller}/>);

    expect(screen.getByText('Envío gratis')).toBeInTheDocument();
    expect(screen.getByText(/10\s+disponibles/i)).toBeInTheDocument();
    expect(screen.getByText(/\+\s*100\s*ventas/i)).toBeInTheDocument();
  });
});