import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ICard } from "../../types/types";
import trashImg from "../../images/trash_cart_img.png";
import { useActions } from "../../hooks/useActions";
import { setConstantValue } from "typescript";
import { Link } from "react-router-dom";

const GeneralCart: React.FC = () => {
  const { boughtProducts } = useTypedSelector((state) => state.products);
  const { setProductsToCart } = useActions();
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
    <div className="container mx-auto flex flex-col lg:flex-row lg:justify-between my-[30px] md:my-[60px]">
      <table className="table-auto w-full mr-[20px]">
        <thead className="bg-[#F9F1E7] h-[55px] py-[13px] font-medium text-[14px] md:text-[16px] w-full">
          <tr>
            <td className="w-auto"></td>
            <td className="w-[20%]">Product</td>
            <td className="w-[20%]">Price</td>
            <td className="w-[10%]">Quantity</td>
            <td className="w-[20%]">Subtotal</td>
            <td className="w-[6%]"></td>
          </tr>
        </thead>
        <tbody>
          {boughtProducts.map((element) => {
            return (
              <tr className="font-poppins font-normal text-[#9F9F9F] text-[14px] md:text-[16px]">
                <td className="w-[108px] py-[20px]">
                  <img
                    className="w-[108px] rounded-[10px]"
                    src={element.image}
                    alt={element.name}
                  />
                </td>
                <td className="">{element.name}</td>
                <td className="">
                  Rp {element.currentPrice.toLocaleString("id-ID")}
                </td>
                <td className="text-[#000000]">
                  <div className="text-center md:text-start">
                    {element.count}
                  </div>
                </td>
                <td className="text-[#000000]">
                  Rp{" "}
                  {(element.currentPrice * element.count).toLocaleString(
                    "id-ID"
                  )}
                </td>
                <td>
                  <img
                    onClick={() => {
                      setProductsToCart(element, 0);
                    }}
                    className="cursor-pointer"
                    src={trashImg}
                    alt="trashImg"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div
        className="items-center bg-[#F9F1E7] font-poppins w-[340px] lg:w-[390px] h-auto flex flex-col border-black border-[1px] mb-[20px]"
        style={{ height: "auto" }}>
        <h1 className="font-semibold text-[28px] md:text-[32px] text-center mt-[12px] mb-[20px]">
          Cart Totals
        </h1>
        <div className="flex flex-col w-[75%]">
          {boughtProducts.map((element) => (
            <div className="flex justify-between py-[15px]">
              <p className="font-medium text-[14px] md:text-[16px]">Subtotal</p>
              <p className="font-normal text-[14px] md:text-[16px] text-[#9F9F9F]">
                Rp{" "}
                {(element.currentPrice * element.count).toLocaleString("id-ID")}
              </p>
            </div>
          ))}
        </div>
        <div className="w-[75%] py-[10px] flex justify-between items-center">
          <p className="font-medium text-[14px] md:text-[16px]">Total</p>
          <p className="font-medium text-[16px] md:text-[20px] text-customBrown">
            {calculateTotalPrice(boughtProducts)}
          </p>
        </div>
        <Link to="/checkout">
          <button className="text-[#000000] font-normal rounded-[15px] border-black border-[1px] mx-[30px] px-[58px] py-[14px] mt-[30%] mb-[20px]">
            Checkout
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GeneralCart;
