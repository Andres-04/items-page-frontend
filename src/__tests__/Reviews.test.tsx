import {render, screen} from '@testing-library/react';
import Reviews from '@/components/Reviews';


describe('Reviews', () => {
  it('should render Reviews component', () => {
    const desc = 'example';
    render("");

    expect(screen.getByText('')).toBeInTheDocument();
    expect(screen.getByText('')).toBeInTheDocument();
  });
});