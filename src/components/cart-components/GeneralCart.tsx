import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import trashImg from "../../images/trash_cart_img.png";
import { motion } from "framer-motion";
import { useActions } from "../../hooks/useActions";
import { Link } from "react-router-dom";
import { calculateTotalPrice } from "../../functions/calculateTotalPrice";

const GeneralCart: React.FC = () => {
  const { boughtProducts } = useTypedSelector((state) => state.products);
  const { setProductsToCart, setSelectedProduct } = useActions();

  return (
    <section className="container mx-auto flex flex-col lg:flex-row lg:justify-between my-[30px] md:my-[60px]">
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
                <td className="w-[112px] py-[20px]">
                  <Link
                    to={`/product/${element.id}`}
                    onClick={() => {
                      setSelectedProduct(element.id);
                      window.scrollTo(0, 0);
                    }}>
                    <img
                      className="size-[108px] hover:scale-110 transition-all ease-in-out duration-300 rounded-[10px]"
                      src={element.image}
                      alt={element.name}
                    />
                  </Link>
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
                  <button
                    onClick={() => {
                      setProductsToCart(element, 0);
                    }}>
                    <motion.svg
                      width="22"
                      height="22"
                      whileHover={{ scale: 1.25 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      className="outline-none"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20.625 4H17.125V1.8125C17.125 0.847266 16.3402 0.0625 15.375 0.0625H6.625C5.65977 0.0625 4.875 0.847266 4.875 1.8125V4H1.375C0.891016 4 0.5 4.39102 0.5 4.875V5.75C0.5 5.87031 0.598437 5.96875 0.71875 5.96875H2.37031L3.0457 20.2695C3.08945 21.202 3.86055 21.9375 4.79297 21.9375H17.207C18.1422 21.9375 18.9105 21.2047 18.9543 20.2695L19.6297 5.96875H21.2812C21.4016 5.96875 21.5 5.87031 21.5 5.75V4.875C21.5 4.39102 21.109 4 20.625 4ZM15.1562 4H6.84375V2.03125H15.1562V4Z"
                        fill="#B88E2F"
                      />
                    </motion.svg>
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {boughtProducts[0] && (
        <div
          className="items-center bg-[#F9F1E7] font-poppins w-[340px] lg:w-[390px] h-auto flex flex-col border-black border-[1px] mb-[20px]"
          style={{ height: "auto" }}>
          <h1 className="font-semibold text-[28px] md:text-[32px] text-center mt-[12px] mb-[20px]">
            Cart Totals
          </h1>
          <div className="flex flex-col w-[75%]">
            {boughtProducts.map((element) => (
              <div className="flex justify-between py-[15px]">
                <p className="font-medium text-[14px] md:text-[16px]">
                  Subtotal
                </p>
                <p className="font-normal text-[14px] md:text-[16px] text-[#9F9F9F]">
                  Rp{" "}
                  {(element.currentPrice * element.count).toLocaleString(
                    "id-ID"
                  )}
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
            <button className="hover:bg-black hover:text-[#F9F1E7] transition duration-300 ease-in-out font-normal rounded-[15px] border-black border-[1px] mx-[30px] px-[58px] py-[14px] mt-[30%] mb-[20px]">
              Checkout
            </button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default GeneralCart;
