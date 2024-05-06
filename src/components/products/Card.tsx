import React, { useState } from "react";
import { ICard } from "../../types/types";
import compareImg from "../../images/card-compare.png";
import { useActions } from "../../hooks/useActions";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface CardProps {
  card: ICard;
}

const Card: React.FC<CardProps> = ({ card }) => {
  const { selectedProduct } = useTypedSelector((state) => state.products);

  const { setSelectedProduct, setProductsToCompared } = useActions();

  const [over, setOver] = useState<boolean>(false);
  const [isCompareHovered, setIsComparedHovered] = useState<boolean>(false);

  const handleOver = () => {
    setOver(true);
  };

  const handleOut = () => {
    setOver(false);
  };

  const handleCompareOver = () => {
    setIsComparedHovered(true);
  };

  const handleCompareOut = () => {
    setIsComparedHovered(false);
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseOver={handleOver}
      onMouseOut={handleOut}>
      <div
        className={`absolute w-full h-full bg-products z-10 transition-opacity duration-300 ${
          over ? "opacity-70" : "opacity-0"
        }`}></div>
      <Link
        to={`/product/${card.id}`}
        onClick={() => {
          setSelectedProduct(card.id);
          window.scrollTo(0, 0);
        }}>
        <button
          className={`border-[#000000] border-[1px] bg-[#FFFFFF] text-[#B88E2F] hover:text-white hover:bg-customGray1 py-[8px] px-[30px] md:py-[10px] md:px-[60px] font-poppins text-[12px] md:text-[16px] font-semibold absolute top-[40%] left-[50%] translate-x-[-50%] whitespace-nowrap z-20 transition-all duration-300 ${
            over ? "opacity-100" : "opacity-0"
          }`}>
          Add to cart
        </button>
      </Link>
      <div
        onClick={() => setProductsToCompared(card)}
        onMouseOver={handleCompareOver}
        onMouseOut={handleCompareOut}
        className={`text-[#FFFFFF] font-semibold text-[12px] md:text-[16px] font-poppins absolute top-[55%] left-[50%] z-[50] translate-x-[-50%] flex items-center cursor-pointer transition-all duration-300 ${
          over ? "opacity-100" : "opacity-0"
        }`}>
        <img
          src={compareImg}
          alt="compare"
          className={`transition-all duration-300 ${
            isCompareHovered
              ? "size-[15px] md:size-[19px]"
              : "size-[12px] md:size-[16px]"
          }`}
        />
        <p
          className={`transition-all duration-300 ${
            isCompareHovered ? "text-[15px] md:text-[19px]" : ""
          }`}>
          Compare
        </p>
      </div>
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
    </div>
  );
};

export default Card;
