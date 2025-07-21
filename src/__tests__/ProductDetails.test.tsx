import {render, screen} from '@testing-library/react';
import ProductDetails from '@/components/ProductDetails';


describe('ProductDetails', () => {
  it('should render ProductDescription component', () => {
    const product = {
      title: 'Vidrio Templado Samsung S3',
      condition: true,
      price: 10000,
      total_sold: 1,
      features: [],
    };
    const reviews = {
      score: 3.0,
      total: 1,
    };
    render(<ProductDetails product={product} reviews={reviews}/>);

    expect(screen.getByText('Vidrio Templado Samsung S3')).toBeInTheDocument();
    expect(screen.getByText(3.0)).toBeInTheDocument();
  });
});