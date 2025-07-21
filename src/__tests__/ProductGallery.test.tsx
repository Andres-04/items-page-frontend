import {render, screen} from '@testing-library/react';
import ProductGallery from '@/components/ProductGallery';


describe('ProductGallery', () => {
  it('should render ProductGallery component', () => {
    const imgs = [
      "http://img1.png",
      "http://img2.png",
      "http://img3.png",
    ];
    render(<ProductGallery images={imgs}/>);

    const thumbnails = screen.getAllByAltText(/Thumbnail.*/i);
    expect(thumbnails.length).toBe(3);
  });
});