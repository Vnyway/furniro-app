import React, { useEffect } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useActions";
import List from "../products/List";
import { ICard } from "../../types/types";
import Card from "../products/Card";

const RelatedProducts: React.FC = () => {
  const { pageRelated, error, productsRelated, searchTerm } = useTypedSelector(
    (state) => state.products
  );
  const { fetchCardsRelated, fetchMoreCardsRelated } = useActions();

  useEffect(() => {
    fetchCardsRelated(pageRelated, 8, searchTerm);
  }, [searchTerm]);
  return (
    <section className="my-[20px] md:my-[40px] flex flex-col mx-[20px] md:mx-[80px] lg:mx-[20px] 2xl:mx-[200px] min-[1800px]:mx-[300px]">
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
      <div className="flex flex-col items-center">
        {!searchTerm && (
          <button
            className="border-customBrown border-[1px] text-customBrown hover:text-white hover:bg-customBrown transition-all ease-in-out duration-300 py-[10px] px-[74px] font-poppins text-[16px] font-semibold mt-[30px]"
            onClick={() => fetchMoreCardsRelated(pageRelated, 8)}>
            Show More
          </button>
        )}
      </div>
    </section>
  );
};

export default RelatedProducts;
