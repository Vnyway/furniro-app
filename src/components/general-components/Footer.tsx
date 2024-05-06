import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useActions } from "../../hooks/useActions";
import { ISubscriber } from "../../types/types";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const Footer: React.FC = () => {
  const { subscribersData } = useTypedSelector((state) => state.subscribers);
  const form = useForm<ISubscriber>();
  const { register, formState, handleSubmit, reset } = form;
  const { addSubscriber } = useActions();
  const { isSubmitSuccessful, isValid } = formState;

  const onSubmit = (data: ISubscriber) => {
    addSubscriber(data);
  };

  useEffect(() => {
    console.log(subscribersData);
  }, [subscribersData]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful]);

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
            <li className="hover:text-customGray transition duration-300 ease-in-out">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-customGray transition duration-300 ease-in-out">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="hover:text-customGray transition duration-300 ease-in-out">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-between md:block ">
          <h3 className="mb-[30px] text-[#9F9F9F] font-poppins font-medium text-[16px]">
            Options
          </h3>
          <ul className="flex gap-[10px] md:gap-0 md:flex-col md:space-y-[20px] font-poppins font-medium text-[16px]">
            <li className="hover:text-customGray transition duration-300 ease-in-out">
              <Link to="/cart">Cart</Link>
            </li>
            <li className="hover:text-customGray transition duration-300 ease-in-out">
              <Link to="/checkout">Checkout</Link>
            </li>
            <li className="hover:text-customGray transition duration-300 ease-in-out">
              <Link to="/comparison">Comparison</Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-between items-center md:block">
          <h3 className="mb-[30px]  md:mt-0 text-[#9F9F9F] font-poppins font-medium text-[16px]">
            Newsletter
          </h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row gap-[10px] items-end md:items-baseline">
            <input
              className="outline-none border-b-[1px] border-b-[#000000]"
              type="text"
              id="email"
              placeholder="Enter Your Email Address"
              {...register("email", {
                required: { value: true, message: "Required" },
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email",
                },
              })}
            />
            <button
              disabled={!isValid}
              className={`w-[85px] font-poppins font-medium text-[#000000] text-[14px] border-b-[1px] border-b-[#000000] ${
                isValid
                  ? "hover:border-customGray hover:text-customGray transition duration-300 ease-in-out"
                  : ""
              }`}>
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
