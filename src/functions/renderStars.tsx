import { ICard } from "../types/types";
import starImg from "../images/star-img.png";
import halfStarImg from "../images/half-star-img.png";

export const renderStars = (card: ICard) => {
  const fullStars = Math.floor(card.rating);
  const hasHalfStar = card.rating % 1 !== 0;

  const starElements = [];

  for (let i = 0; i < fullStars; i++) {
    starElements.push(<img key={i} src={starImg} alt="star" />);
  }

  if (hasHalfStar) {
    starElements.push(<img key="half" src={halfStarImg} alt="half-star" />);
  }

  return starElements;
};
