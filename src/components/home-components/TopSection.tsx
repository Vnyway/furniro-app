import React from "react";
import topSectionImage from "../../images/home-top-section-image.png";

const TopSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${topSectionImage})` }}
      className="h-[800px] w-full bg-cover">
      <div className="container h-[800px] mx-auto relative">
        <div className="absolute w-[643px] h-[444px] top-[50%] translate-y-[-50%] right-0 rounded-[10px] bg-[#FFF3E3] px-[50px] py-[55px]">
          <span className="font-semibold font-poppins text-base text-[#333333]">
            New Arrival
          </span>
          <h1 className="text-[#B88E2F] font-poppins text-[52px] font-bold leading-[65px] my-2">
            Discover Our New Collection
          </h1>
          <h2 className="text-[#333333] font-medium font-poppins text-[18px] leading-[24px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </h2>
          <button className="mt-[50px] px-[72px] py-[25px] bg-[#B88E2F] text-[#FFFFFF] font-poppins font-bold text-[16px] ">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
