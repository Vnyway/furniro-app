import React, { useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import trashImg from "../../images/trash_cart_img.png";
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
                    <div className="size-[112px] relative">
                      <img
                        className="size-[108px] hover:size-[112px] absolute right-[50%] translate-x-[50%] top-[50%] translate-y-[-50%] transition-all ease-in-out duration-300 rounded-[10px]"
                        src={element.image}
                        alt={element.name}
                      />
                    </div>
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
                <td className="relative">
                  <img
                    onClick={() => {
                      setProductsToCart(element, 0);
                    }}
                    className="cursor-pointer absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] size-[20px] hover:size-[24px] transition-all ease-in-out duration-300"
                    src={trashImg}
                    alt="trashImg"
                  />
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
