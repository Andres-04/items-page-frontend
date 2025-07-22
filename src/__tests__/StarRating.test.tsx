import { render, screen } from "@testing-library/react";
import StarRating from "@/components/StarRating";

describe("StarRating", () => {
  it("should always render 5 stars", () => {
    render(<StarRating rating={5} />);
    const stars = screen.getAllByTestId("star-rating");
    expect(stars).toHaveLength(5);
  });
});
