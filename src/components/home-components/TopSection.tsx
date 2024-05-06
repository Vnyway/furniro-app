import React from "react";
import topSectionImage from "../../images/home-top-section-image.png";
import { Link } from "react-router-dom";

const TopSection: React.FC = () => {
  return (
    <section
      style={{ backgroundImage: `url(${topSectionImage})` }}
      className={`h-[400px] md:h-[500px] lg:h-[800px] w-full bg-cover transition-opacity duration-300 animate-appear`}>
      <div className="container h-[400px] md:h-[500px] lg:h-[800px] mx-auto relative">
        <div className="absolute w-[300px] h-[270px]  md:w-[360px] lg:w-[643px] md:h-[360px] lg:h-[480px] top-[50%] translate-y-[-50%] right-0 rounded-[10px] bg-[#FFF3E3] px-[20px] py-[22px] md:px-[40px] md:py-[45px] lg:px-[50px] lg:py-[55px]">
          <span className="font-semibold font-poppins text-xs md:text-sm lg:text-base text-[#333333]">
            New Arrival
          </span>
          <h1 className="text-[#B88E2F] font-poppins text-[25px] md:text-[30px] lg:text-[52px] font-bold my-2">
            Discover Our New Collection
          </h1>
          <h2 className="text-[#333333] font-medium font-poppins text-[12px] md:text-[14px] lg:text-[18px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </h2>
          <Link to="/shop">
            <button className="mt-[20px] md:mt-[30px] lg:mt-[50px] px-[30px] py-[10px] md:px-[60px] lg:px-[72px] md:py-[18px] lg:py-[25px] bg-[#B88E2F] border-[1px] border-[#B88E2F] hover:bg-[#FFF3E3] hover:text-[#B88E2F] transition duration-300 ease-in-out text-[#FFFFFF] font-poppins font-semibold md:font-bold text-[12px] md:text-[14px] lg:text-[16px] ">
              BUY NOW
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TopSection;
