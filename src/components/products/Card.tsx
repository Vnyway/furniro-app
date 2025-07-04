import React from "react";
import { ICard } from "../../types/types";
import { useActions } from "../../hooks/useActions";
import { Link } from "react-router-dom";

interface CardProps {
  card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { setSelectedProduct } = useActions();

  return (
    <Link
      to={`/product/${card.id}`}
      onClick={() => {
        setSelectedProduct(card.id);
        window.scrollTo(0, 0);
      }}
      className="relative overflow-hidden">
      <Link
        to={`/product/${card.id}`}
        onClick={() => {
          setSelectedProduct(card.id);
          window.scrollTo(0, 0);
        }}></Link>
      <div className="flex flex-col h-auto w-auto">
        <div
          className="relative h-[160px] md:h-[201px] lg:h-[301px] bg-cover"
          style={{ backgroundImage: `url(${card.image})` }}>
          {card.label && (
            <div
              className={
                card.label === "New"
                  ? "absolute top-[5%] right-[5%] size-[48px] rounded-[50%] bg-[#2EC1AC]"
                  : "absolute top-[5%] right-[5%] size-[48px] rounded-[50%] bg-[#E97171]"
              }>
              <p
                className={
                  card.label === "New"
                    ? "absolute top-[12.5px] right-[7px] text-white font-poppins text-[16px] font-medium"
                    : "absolute top-[12.5px] right-[3.5px] text-white font-poppins text-[16px] font-medium"
                }>
                {card.label}
              </p>
            </div>
          )}
        </div>
        <div className="p-[15px] md:p-[20px] h-[110px] md:h-[140px] lg:h-[150px] bg-[#F4F5F7]">
          <h3 className="text-products text-[16px] md:text-[20px] lg:text-[24px] font-poppins font-semibold mb-[2px] md:mb-[5px]">
            {card.name}
          </h3>
          <p className="text-customGray font-poppins font-medium text-[10px] md:text-[12px] lg:text-[16px] mb-[7px]">
            {card.description}
          </p>
          <div className="flex flex-col md:flex-row md:justify-between justify-center md:items-center">
            <h3 className="font-poppins text-products text-[12px] md:text-[16px] lg:text-[20px] font-semibold ">
              Rp {card.currentPrice.toLocaleString("id-ID")}
            </h3>
            {card.currentPrice !== card.prevPrice && (
              <p className="font-poppins font-medium text-[#B0B0B0] text-[10px] md:text-[12px] lg:text-[16px] line-through">
                Rp {card.prevPrice.toLocaleString("id-ID")}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
