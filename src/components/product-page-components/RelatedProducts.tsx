import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import List from "../products/List";
import { ICard } from "../../types/types";
import Card from "../products/Card";

const RelatedProducts: React.FC = () => {
  const { pageRelated, error, loading, productsRelated, searchTerm } =
    useTypedSelector((state) => state.products);
  const { fetchCardsRelated, fetchMoreCardsRelated } = useActions();

  useEffect(() => {
    fetchCardsRelated(pageRelated, 8, searchTerm);
  }, [searchTerm]);
  return (
    <section className="mx-0 px-[20px] my-[20px] md:my-[40px] flex flex-col items-center">
      <h2 className="font-poppins font-bold text-[34px] md:text-[40px] text-[#3A3A3A] text-center mb-[20px]">
        Our Products
      </h2>
      {!error ? (
        <List
          items={productsRelated}
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
          className="border-[#B88E2F] border-[1px] text-[#B88E2F] py-[10px] px-[74px] font-poppins text-[16px] font-semibold mt-[30px]"
          onClick={() => fetchMoreCardsRelated(pageRelated, 8)}>
          Show More
        </button>
      )}
    </section>
  );
};

export default RelatedProducts;
