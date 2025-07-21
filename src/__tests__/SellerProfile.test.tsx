import {render, screen} from '@testing-library/react';
import SellerProfile from '@/components/SellerProfile';


describe('SellerProfile', () => {
  it('should render SellerProfile component', () => {
    const desc = 'example';
    render("");

    expect(screen.getByText('')).toBeInTheDocument();
    expect(screen.getByText('')).toBeInTheDocument();
  });
});