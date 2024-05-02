import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const form = useForm();
  const { register, formState, handleSubmit, reset } = form;
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = () => {};

  return (
    <footer className="flex flex-col border-t-[1px] border-t-[#D9D9D9] px-[10px]">
      <div className="flex flex-col md:flex-row justify-between container mx-auto py-[30px]">
        <div className="flex justify-between md:block">
          <h3 className="mb-[30px] text-[#9F9F9F] font-poppins font-medium text-[16px]">
            Funiro.
          </h3>
          <p className="font-poppins font-normal text-[16px] text-[#9F9F9F]">
            400 University Drive Suite
            <br className="block lg:hidden" />
            200 Coral
            <br className="hidden lg:block" /> Gables,
            <br /> FL 33134 USA
          </p>
        </div>
        <div className="mt-[20px] md:mt-0 flex justify-between md:block ">
          <h3 className="mb-[30px] text-[#9F9F9F] font-poppins font-medium text-[16px]">
            Links
          </h3>
          <ul className="flex gap-[10px] md:gap-0 md:flex-col  md:space-y-[20px] font-poppins font-medium text-[16px]">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="mt-[30px] md:mt-0 flex justify-between md:block ">
          <h3 className="mb-[30px] text-[#9F9F9F] font-poppins font-medium text-[16px]">
            Options
          </h3>
          <ul className="flex gap-[10px] md:gap-0 md:flex-col md:space-y-[20px] font-poppins font-medium text-[16px]">
            <li className="">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="">
              <Link to="/checkout">Checkout</Link>
            </li>
            <li className="">
              <Link to="/comparison">Comparison</Link>
            </li>
          </ul>
        </div>
        <div className="mt-[20px] md:mt-0 flex justify-between items-center md:block">
          <h3 className="mb-[30px]  md:mt-0 text-[#9F9F9F] font-poppins font-medium text-[16px]">
            Newsletter
          </h3>
          <form className="flex flex-col md:flex-row gap-[10px]">
            <input
              className="outline-none border-b-[1px] border-b-[#000000]"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button className="w-[85px] font-poppins font-medium text-[#000000] text-[14px] border-b-[1px] border-b-[#000000]">
              SUBSCRIBE
            </button>
          </form>
        </div>
      </div>
      <div className="container mx-auto border-t-[1px] border-t-[#D9D9D9] py-[30px]">
        <p className="font-poppins font-normal text-[16px] text-[#000000]">
          2023 furino. All rights reverved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
