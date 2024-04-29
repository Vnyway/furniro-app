import React, { FC, useEffect, useState } from "react";
import { useActions } from "../../hooks/useActions";
import List from "../products/List";
import { ICard, SortingTypes } from "../../types/types";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Card from "../products/Card";
import filterIcon from "../../images/filter-icon.png";

const Products: FC = () => {
  const {
    pageShop,
    error,
    productsShop,
    searchTerm,
    total,
    limitShop,
    sortType,
  } = useTypedSelector((state) => state.products);

  const pages: number[] = [];

  const { fetchCardsShop, setProductsPage, setProductsLimit, setProductsSort } =
    useActions();

  const count = limitShop ? Math.ceil(total / limitShop) : 1;
  for (let i = 0; i < count; i++) {
    pages.push(i + 1);
  }
  const position = pages.indexOf(pageShop);
  useEffect(() => {
    fetchCardsShop(pageShop, limitShop, searchTerm, sortType);
  }, [pageShop, searchTerm, limitShop, total, sortType]);

  return (
    <>
      <div className="bg-[#F9F1E7] font-poppins text-[#000000]">
        <div className="container h-[75px] md:h-[100px] md:px-[5px] mx-auto flex justify-center md:justify-between items-center">
          <div className="hidden md:flex items-center justify-between gap-[30px]">
            <div className="flex items-center border-r-[#9F9F9F] border-r-[2px] pr-[30px]">
              <img
                src={filterIcon}
                alt="filterIcon"
                className="size-[18px] md:size-[25px]"
              />
              <p className="font-normal text-[16px] md:text-[20px]">Filter</p>
            </div>
            <div>
              <p className="text-[12px] md:text-[16px]">
                Showing {(pageShop - 1) * limitShop + 1}–
                {Math.min(limitShop * pageShop, total)} of {total} results
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[20px]">
            <p className="font-normal text-[16px] md:text-[20px]">Show</p>
            <input
              value={limitShop.toString()}
              onChange={(e) => setProductsLimit(Number(e.target.value))}
              type="number"
              className="size-[36px] md:size-[55px] outline-none appearance-none text-center text-[#9F9F9F] text-[16px] md:text-[20px] font-normal"
            />
            <p className="font-normal text-[16px] md:text-[20px]">Sort by</p>
            <select
              onChange={(e) => setProductsSort(e.target.value as SortingTypes)}
              className="w-[92px] md:w-[188px] h-[36px] md:h-[55px] outline-none text-left pl-[5px] md:pl-[15px] text-[#9F9F9F] text-[16px] md:text-[20px] font-normal">
              <option value={SortingTypes.DEFAULT}>Default</option>
              <option value={SortingTypes.PRICE}>Price</option>
              <option value={SortingTypes.NAME}>Name</option>
            </select>
          </div>
        </div>
      </div>
      <div className="mx-[20px] mt-[40px] flex flex-col items-center">
        {!error ? (
          <List
            items={productsShop}
            renderItem={(card: ICard) => <Card card={card} key={card.id} />}
          />
        ) : (
          <h1>{error}</h1>
        )}
        <div className="flex w-[300px] md:w-[700px] h-[200px] md:h-[300px] mx-auto items-center justify-center gap-[10px] md:gap-[20px] font-poppins text-[16px] md:text-[20px] font-normal">
          <button
            onClick={() => {
              setProductsPage(pageShop - 1);
            }}
            className={
              position > 0
                ? "w-[70px] md:w-[98px] h-[40px] md:h-[60px] rounded-[10px] bg-[#F9F1E7] flex items-center justify-center"
                : "hidden"
            }>
            Prev
          </button>
          <button
            onClick={() => {
              setProductsPage(
                position > 0 ? pages[position - 1] : pages[position]
              );
            }}
            className={
              pageShop ===
              (position > 0 ? pages[position - 1] : pages[position])
                ? "size-[40px] md:size-[60px] rounded-[10px] bg-customBrown text-white flex items-center justify-center"
                : "size-[40px] md:size-[60px] rounded-[10px] bg-[#F9F1E7] flex items-center justify-center"
            }>
            {position > 0 ? pages[position - 1] : pages[position]}
          </button>
          {((position > 0 && position <= pages.length - 1) ||
            (position === 0 && position + 1 <= pages.length - 1)) && (
            <button
              onClick={() => {
                setProductsPage(
                  position > 0 ? pages[position] : pages[position + 1]
                );
              }}
              className={
                pageShop ===
                (position > 0 ? pages[position] : pages[position + 1])
                  ? "size-[40px] md:size-[60px] rounded-[10px] bg-customBrown text-white flex items-center justify-center"
                  : "size-[40px] md:size-[60px] rounded-[10px] bg-[#F9F1E7] flex items-center justify-center"
              }>
              {position > 0 ? pages[position] : pages[position + 1]}
            </button>
          )}

          {((position > 0 && position + 1 <= pages.length - 1) ||
            (position === 0 && position + 2 <= pages.length - 1)) && (
            <button
              onClick={() => {
                setProductsPage(
                  position > 0 ? pages[position + 1] : pages[position + 2]
                );
              }}
              className={
                pageShop ===
                (position > 0 ? pages[position + 1] : pages[position + 2])
                  ? "size-[40px] md:size-[60px] rounded-[10px] bg-customBrown text-white flex items-center justify-center"
                  : "size-[40px] md:size-[60px] rounded-[10px] bg-[#F9F1E7] flex items-center justify-center"
              }>
              {position > 0 ? pages[position + 1] : pages[position + 2]}
            </button>
          )}

          <button
            onClick={() => {
              setProductsPage(pageShop + 1);
            }}
            className={
              position < pages.length - 1
                ? "w-[70px] md:w-[98px] h-[40px] md:h-[60px] rounded-[10px] bg-[#F9F1E7] flex items-center justify-center"
                : "hidden"
            }>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Products;
