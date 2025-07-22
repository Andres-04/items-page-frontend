import {render, screen, fireEvent } from '@testing-library/react';
import ReportButton from '@/components/ReportButton';
import { userEvent } from "@testing-library/user-event";


describe('ReportButton', () => {
  it('should render the button icon', () => {
    render(<ReportButton />);
    const trigger = screen.getByRole('button');
    expect(trigger).toBeInTheDocument();
  });

  it('should show the report option when clicking the button', async () => {
    render(<ReportButton />);
    const trigger = screen.getByRole('button');

    await userEvent.click(trigger);

    expect(screen.getByText('Reportar')).toBeInTheDocument();
  });
});
