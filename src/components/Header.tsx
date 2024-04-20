import React, { FC, useEffect, useRef, useState } from "react";
import logo from "../images/logo-site.png";
import person from "../images/person-icon.png";
import search from "../images/search-icon.png";
import heart from "../images/heart-icon.png";
import cart from "../images/cart-icon.png";
import { Link } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import closeCartImg from "../images/close-cart-icon.png";
import deleteProductImg from "../images/delete-product.png";
import { useActions } from "../hooks/useActions";
import { ICard } from "../types/types";

const Header: FC = () => {
  const { boughtProducts } = useTypedSelector((state) => state.products);
  const [cartOpened, setCartOpened] = useState<boolean>(false);
  const [searchOpened, setSearchOpened] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const cartHandler = () => {
    setCartOpened(!cartOpened);
  };

  const searchHandler = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setSearchOpened(!searchOpened);
    if (!searchOpened && inputRef.current) {
      inputRef.current.focus();
    }
  };

  const { setSearchTerm, setProductsToCart } = useActions();

  const calculteTotalCount = (products: ICard[]) => {
    let totalCount = 0;
    products.forEach((product) => {
      totalCount += product.count;
    });
    return totalCount;
  };

  const calculateTotalPrice = (products: ICard[]) => {
    let totalPrice = 0;
    products.forEach((product) => {
      totalPrice += product.count * product.currentPrice;
    });
    return totalPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    });
  };

  return (
    <>
      {cartOpened && (
        <div className="absolute top-0 right-0 w-[417px] h-[746px] border-[1px] border-black bg-[#FFFFFF] px-[30px] py-[30px] z-10">
          <div className="flex justify-between items-center pb-[30px] border-b-[1px] border-b-[#D9D9D9]">
            <h2 className="font-poppins font-semibold text-[#000000] text-[24px]">
              Shopping Cart
            </h2>
            <img
              src={closeCartImg}
              alt="close-cart"
              className="w-[17px] h-[19px] cursor-pointer"
              onClick={cartHandler}
            />
          </div>
          <div className="my-[20px] h-[500px] overflow-y-auto">
            {boughtProducts.map((product) => {
              if (product.count > 0) {
                return (
                  <div
                    key={product.id}
                    className="flex justify-between items-center my-[20px]">
                    <img
                      src={product.image}
                      alt="product-img"
                      className="size-[105px] rounded-[10px]"
                    />
                    <div className="flex flex-col w-[130px]">
                      <p className="font-poppins font-normal text-[16px] text-[#000000] mb-[10px]">
                        {product.name}
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="font-poppins font-light text-[16px] text-[#000000]">
                          {product.count}
                        </p>
                        <p className="font-poppins font-light text-[16px] text-[#000000]">
                          X
                        </p>
                        <p className="font-poppins font-medium text-[12px] text-customBrown">
                          Rp {product.currentPrice.toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                    <img
                      onClick={() => {
                        setProductsToCart(product, 0);
                      }}
                      src={deleteProductImg}
                      alt="delete-product"
                      className="size-[20px] cursor-pointer"
                    />
                  </div>
                );
              }
            })}
          </div>
          <div className="flex justify-between">
            <p className="font-poppins font-normal text-[16px] text-[#000000]">
              Subtotal
            </p>
            <p className="font-poppins font-semibold text-customBrown text-[16px]">
              {calculateTotalPrice(boughtProducts)}
            </p>
          </div>
          <div className="flex justify-between mt-[20px] pt-[15px] border-t-[1px] border-t-[#D9D9D9]">
            <Link to="/cart">
              <button className="px-[30px] py-[6px] border-[1px] border-[#000000] rounded-[50px] font-poppins font-normal text-[12px] text-[#000000]">
                Cart
              </button>
            </Link>
            <Link to="/checkout">
              <button className="px-[30px] py-[6px] border-[1px] border-[#000000] rounded-[50px] font-poppins font-normal text-[12px] text-[#000000]">
                Checkout
              </button>
            </Link>
            <Link to="/comparison">
              <button className="px-[30px] py-[6px] border-[1px] border-[#000000] rounded-[50px] font-poppins font-normal text-[12px] text-[#000000]">
                Comparison
              </button>
            </Link>
          </div>
        </div>
      )}
      <div className="container mx-auto h-20">
        <div className="flex py-5 justify-between items-center">
          <Link to="/" className="w-[150px]">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="flex space-x-[100px] flex-nowrap">
            <li className="font-poppins font-medium text-[16px]">
              <Link to="/">Home</Link>
            </li>
            <li className="font-poppins font-medium text-[16px]">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="font-poppins font-medium text-[16px]">
              <Link to="/about">About</Link>
            </li>
            <li className="font-poppins font-medium text-[16px]">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <div className="flex space-x-[30px] items-center">
            <img className="w-[28px]" src={person} alt="person-icon" />
            <form action="" className="flex">
              <input
                ref={inputRef}
                onChange={setSearchTerm}
                type="text"
                placeholder="Enter product's name..."
                className={
                  searchOpened
                    ? "outline-none border-b-[1px] border-b-[#000000] mr-[10px]"
                    : "w-0"
                }
              />
              <button>
                <img
                  onClick={searchHandler}
                  className="w-[28px] cursor-pointer"
                  src={search}
                  alt="search-icon"
                />
              </button>
            </form>
            <img className="w-[28px]" src={heart} alt="heart-icon" />
            <div
              onClick={() => cartHandler()}
              className="relative size-[28px] cursor-pointer">
              <img className="w-[28px]" src={cart} alt="cart-icon" />
              {calculteTotalCount(boughtProducts) > 0 && (
                <div className="absolute right-[-5px] bottom-[-5px] size-[20px] rounded-full bg-[#FFF3E3]">
                  <p className="p-0 m-0 absolute right-[50%] translate-x-[50%] bottom-[50%] translate-y-[50%]">
                    {calculteTotalCount(boughtProducts)}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
