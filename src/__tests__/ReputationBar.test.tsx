import {render, screen} from '@testing-library/react';
import ReputationBar from '@/components/ReputationBar';


describe('ReputationBar', () => {
  it('should render ReputationBar component', () => {
    const desc = 'example';
    render("");

    expect(screen.getByText('')).toBeInTheDocument();
    expect(screen.getByText('')).toBeInTheDocument();
  });
});

describe('ReputationBar', () => {
  it('debería resaltar el nivel correcto', () => {
    const level = 3;
    render(<ReputationBar level={level} />);
    
    const bars = screen.getAllByTestId('reputation-bar');

    bars.forEach((bar, index) => {
      const expectedClass = index + 1 === level 
        ? expect.stringContaining('bg-yellow-400') 
        : expect.stringContaining('-100');
      
      expect(bar.className).toEqual(expect.stringContaining('h-2'));
      expect(bar.className).toEqual(expectedClass);
    });
  });
});