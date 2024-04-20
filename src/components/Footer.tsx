import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col border-t-[1px] border-t-[#D9D9D9]">
      <div className="flex justify-between container mx-auto py-[30px]">
        <div>
          <h3 className="mb-[30px] text-[#9F9F9F] font-poppins font-medium text-[16px]">
            Funiro.
          </h3>
          <p className="font-poppins font-normal text-[16px] text-[#9F9F9F]">
            400 University Drive Suite 200 Coral
            <br /> Gables,
            <br /> FL 33134 USA
          </p>
        </div>
        <div>
          <h3 className="mb-[30px] text-[#9F9F9F] font-poppins font-medium text-[16px]">
            Links
          </h3>
          <ul className="flex flex-col space-y-[20px] font-poppins font-medium text-[16px]">
            <li className="">
              <Link to="/">Home</Link>
            </li>
            <li className="">
              <Link to="/shop">Shop</Link>
            </li>
            <li className="">
              <Link to="/about">About</Link>
            </li>
            <li className="">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-[30px] text-[#9F9F9F] font-poppins font-medium text-[16px]">
            Help
          </h3>
          <ul className="flex flex-col space-y-[20px] font-poppins font-medium text-[16px]">
            <li>Payment Options</li>
            <li>Returns</li>
            <li>Privacy Policies</li>
          </ul>
        </div>
        <div>
          <h3 className="mb-[30px] text-[#9F9F9F] font-poppins font-medium text-[16px]">
            Newsletter
          </h3>
          <div className="flex">
            <input
              className="outline-none border-b-[1px] border-b-[#000000] mr-[10px]"
              type="text"
              placeholder="Enter Your Email Address"
            />
            <button className="font-poppins font-medium text-[#000000] text-[14px] border-b-[1px] border-b-[#000000]">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="container mx-auto border-t-[1px] border-t-[#D9D9D9] py-[30px]">
        <p className="font-poppins font-normal text-[16px] text-[#000000]">
          2023 furino. All rights reverved
        </p>
      </div>
    </div>
  );
};

export default Footer;
