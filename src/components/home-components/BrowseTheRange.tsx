import React from "react";
import { Link } from "react-router-dom";

const BrowseTheRange: React.FC = () => {
  return (
    <section className="text-center mx-[20px] flex flex-col items-center font-poppins mt-[40px]">
      <div className="mb-[40px]">
        <h2 className="font-bold text-[28px] md:text-[32px] text-[#333333]">
          Browse The Range
        </h2>
        <span className="text-[17px] md:text-[20px] text-[#666666]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </span>
      </div>
      <div className="grid grid-cols-3 gap-[15px]">
        <Link
          to="/shop"
          onClick={() => {
            window.scrollTo(0, 0);
          }}>
          <div className="mb-[18px]">
            <img
              src="./images/diningImg.svg"
              alt="dining"
              className="rounded-[10px]"
            />
          </div>
          <h3 className="font-semibold text-[#333333] text-[20px] md:text-[24px]">
            Dining
          </h3>
        </Link>
        <Link
          to="/shop"
          onClick={() => {
            window.scrollTo(0, 0);
          }}>
          <div className="mb-[18px]">
            <img
              src="./images/livingImg.svg"
              alt="living"
              className="rounded-[10px]"
            />
          </div>
          <h3 className="font-semibold text-[#333333] text-[20px] md:text-[24px]">
            Living
          </h3>
        </Link>
        <Link
          to="/shop"
          onClick={() => {
            window.scrollTo(0, 0);
          }}>
          <div className="mb-[18px]">
            <img
              src="./images/bedImg.svg"
              alt="bedroom"
              className="rounded-[10px]"
            />
          </div>
          <h3 className="font-semibold text-[#333333] text-[20px] md:text-[24px]">
            Bedroom
          </h3>
        </Link>
      </div>
    </section>
  );
};

export default BrowseTheRange;
