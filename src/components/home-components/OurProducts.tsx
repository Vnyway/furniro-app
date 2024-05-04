import React, { useEffect } from "react";
import { ICard } from "../../types/types";
import List from "../products/List";
import Card from "../products/Card";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const OurProducts: React.FC = () => {
  const { pageHome, error, loading, productsHome, searchTerm } =
    useTypedSelector((state) => state.products);
  const { fetchCardsHome, fetchMoreCards } = useActions();

  useEffect(() => {
    fetchCardsHome(pageHome, 8, searchTerm);
  }, [searchTerm]);

  return (
    <div className="mt-[40px] flex flex-col items-center mx-[20px]">
      <h2 className="font-poppins font-bold text-[32px] md:text-[40px] text-[#3A3A3A] text-center mb-[20px]">
        Our Products
      </h2>
      {!error ? (
        <List
          items={productsHome}
          renderItem={(card: ICard) => <Card card={card} key={card.id} />}
        />
      ) : (
        <h1>{error}</h1>
      )}

      {loading && (
        <div className="border-8 border-solid border-gray-300 border-t-gray-500 rounded-full w-20 h-20 animate-spin my-[30px]"></div>
      )}
      {!searchTerm && (
        <button
          className="border-[#B88E2F] hover:bg-[#B88E2F] hover:text-white border-[1px] text-[#B88E2F] py-[7px] md:py-[10px] px-[60px] md:px-[74px] font-poppins text-[14px] md:text-[16px] font-semibold mt-[30px]"
          onClick={() => fetchMoreCards(pageHome, 8)}>
          Show More
        </button>
      )}
    </div>
  );
};

export default OurProducts;
