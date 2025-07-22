import {render, screen} from '@testing-library/react';
import CommentsList from '@/components/CommentsList';


describe('CommentsList', () => {
  it('should render one comment', () => {
    const reviews = [
      {
        'date': '2024-07-12',
        'comment': 'Excelente producto, me llegó muy rápido.',
        'score': 4.5,
        'images': []
      }
    ];
    render(<CommentsList reviews={reviews}/>);

    expect(screen.getByText('Excelente producto, me llegó muy rápido.')).toBeInTheDocument();
    expect(screen.getByText('2024-07-12')).toBeInTheDocument();
  });

  it('should render default values', () => {
    const reviews = [
      {
        'date': '',
        'comment': '',
        'score': 0.0,
        'images': []
      }
    ];
    render(<CommentsList reviews={reviews}/>);
    expect(screen.getByText('2000-01-01')).toBeInTheDocument();
  });
});
