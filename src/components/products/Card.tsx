import React, { FC, useState } from "react";
import { ICard } from "../../types/types";
import shareImg from "../../images/card-share.png";
import compareImg from "../../images/card-compare.png";
import likeImg from "../../images/card-heart.png";
import { useActions } from "../../hooks/useActions";
import { setSelectedProduct } from "../../store/action-creators/produtsAction";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface CardProps {
  card: ICard;
}

const Card: FC<CardProps> = ({ card }) => {
  const { selectedProduct } = useTypedSelector((state) => state.products);

  const { setSelectedProduct, setProductsToCompared } = useActions();

  const [over, setOver] = useState(false);

  const handleOver = () => {
    setOver(true);
  };

  const handleOut = () => {
    setOver(false);
  };
  return (
    <div
      className="relative overflow-hidden transition-all"
      onMouseOver={handleOver}
      onMouseOut={handleOut}>
      {over && (
        <>
          <div className="absolute w-full h-full bg-products opacity-70 z-10"></div>
          <Link
            to={`/product/${selectedProduct?.id}`}
            onClick={() => setSelectedProduct(card)}>
            <button className="border-[#000000] border-[1px] bg-[#FFFFFF] text-[#B88E2F] py-[10px] px-[60px] font-poppins text-[16px] font-semibold absolute top-[40%] left-[50%] translate-x-[-50%] whitespace-nowrap z-20">
              Add to cart
            </button>
          </Link>
          <div className="absolute items-center space-x-4 flex justify-between w-[90%] top-[55%] left-[50%] translate-x-[-50%] whitespace-nowrap text-[#FFFFFF] text-[16px] font-poppins font-semibold z-20">
            <div className="flex items-center">
              <img src={shareImg} alt="share" className="size-[16px] " />
              <p>Share</p>
            </div>
            <div
              onClick={() => setProductsToCompared(card)}
              className="flex items-center cursor-pointer">
              <img src={compareImg} alt="compare" className="size-[16px] " />
              <p>Compare</p>
            </div>
            <div className="flex items-center">
              <img src={likeImg} alt="like" className="size-[16px] " />
              <p>Like</p>
            </div>
          </div>
        </>
      )}
      <div className="flex flex-col h-auto w-[240px] md:w-[285px]">
        <div
          className="relative h-[220px] md:h-[301px] bg-cover"
          style={{ backgroundImage: `url(${card.image})` }}>
          {card.label && (
            <div
              className={
                card.label === "New"
                  ? "absolute top-[25px] right-[25px] md:right-[25px] size-[48px] rounded-[50%] bg-[#2EC1AC]"
                  : "absolute top-[25px] right-[25px] size-[48px] rounded-[50%] bg-[#E97171]"
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
        <div className="p-[15px] md:p-[20px] bg-[#F4F5F7]">
          <h3 className="text-products text-[20px] md:text-[24px] font-poppins font-semibold mb-[5px]">
            {card.name}
          </h3>
          <p className="text-customGray font-poppins font-medium text-[12px] md:text-[16px] mb-[7px]">
            {card.description}
          </p>
          <div className="flex justify-between items-center">
            <h3 className="font-poppins text-products text-[16px] md:text-[20px] font-semibold ">
              Rp {card.currentPrice.toLocaleString("id-ID")}
            </h3>
            {card.currentPrice !== card.prevPrice && (
              <p className="font-poppins font-medium text-[#B0B0B0] text-[12px] md:text-[16px] line-through">
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
