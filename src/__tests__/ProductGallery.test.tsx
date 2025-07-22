import {render, screen} from '@testing-library/react';
import ProductGallery from '@/components/ProductGallery';
import { userEvent } from "@testing-library/user-event";


describe('ProductGallery', () => {
  const imgs = [
    "http://img1.png",
    "http://img2.png",
    "http://img3.png",
  ];

  it('should render 3 images', () => {
    render(<ProductGallery images={imgs}/>);

    const thumbnails = screen.getAllByAltText(/Thumbnail.*/i);
    expect(thumbnails.length).toBe(3);
  });

  it('should change the main image when clicking on a thumbnail', async () => {
    render(<ProductGallery images={imgs} />);
    
    const thumbnails = screen.getAllByAltText(/Thumbnail.*/i);
    await userEvent.click(thumbnails[1]);

    const mainImg = screen.getByAltText("Selected Product") as HTMLImageElement;
    expect(mainImg.src).toContain("img2.png");
  });
});