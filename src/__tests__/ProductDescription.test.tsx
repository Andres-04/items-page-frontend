import {render, screen} from '@testing-library/react';
import ProductDescription from '@/components/ProductDescription';


describe('ProductDescription', () => {
  it('should render ProductDescription component', () => {
    const desc = 'example';
    render(<ProductDescription description={desc} />);

    expect(screen.getByText('Descripción')).toBeInTheDocument();
    expect(screen.getByText('example')).toBeInTheDocument();
  });
});