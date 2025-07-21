import {render, screen, fireEvent } from '@testing-library/react';
import ReportButton from '@/components/ReportButton';


describe('ReportButton', () => {
  it('should render ReportButton component', () => {
    render(<ReportButton />);

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    expect(screen.getByText('Reportar')).toBeInTheDocument();
  });
});
