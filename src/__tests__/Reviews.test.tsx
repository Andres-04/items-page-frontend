import { render, screen } from '@testing-library/react';
import Reviews from '@/components/Reviews';

const reviews = {
  score: 4.5,
  total: 200,
  reviews: [
    {
      date: '2023-07-20',
      comment: 'Muy buen producto',
      score: 5,
      images: ['http://img1.jpg'],
    },
    {
      date: '2023-07-21',
      comment: 'Regular, esperaba más',
      score: 3,
      images: [],
    },
  ],
  features_review: [
    { name: 'Durabilidad', value: 4 },
    { name: 'Calidad', value: 5 },
  ],
};

describe('Reviews', () => {
  it('should render titles and score', () => {
    render(<Reviews reviews={reviews} />);

    expect(screen.getByText('Opiniones del producto')).toBeInTheDocument();
    expect(screen.getByText('4.5')).toBeInTheDocument();
    expect(screen.getByText('200 calificaciones')).toBeInTheDocument();
  });

  it('should render features with stars', () => {
    render(<Reviews reviews={reviews} />);

    expect(screen.getByText('Durabilidad')).toBeInTheDocument();
    expect(screen.getByText('Calidad')).toBeInTheDocument();
  });

  it('should render reviews images', () => {
    render(<Reviews reviews={reviews} />);

    const images = screen.getAllByAltText('Foto 1') as HTMLImageElement[];
    expect(images.length).toBeGreaterThan(0);
    expect(images[0].src).toContain('img1.jpg');
  });

  it('should render comments amount', () => {
    render(<Reviews reviews={reviews} />);

    expect(screen.getByText('2 comentarios')).toBeInTheDocument();
  });

  it('should render comments properly', () => {
    render(<Reviews reviews={reviews} />);
    
    expect(screen.getByText('Muy buen producto')).toBeInTheDocument();
    expect(screen.getByText('Regular, esperaba más')).toBeInTheDocument();
  });
});
