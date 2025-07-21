import {render, screen} from '@testing-library/react';
import StarRating from '@/components/StarRating';


describe('StarRating', () => {
  it('should render StarRating component', () => {
    const desc = 'example';
    render("");

    expect(screen.getByText('')).toBeInTheDocument();
    expect(screen.getByText('')).toBeInTheDocument();
  });
});