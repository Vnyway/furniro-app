import React, { FC } from "react";
import insideImg from "../images/bread-crumb-inside-img.png";
import { Link } from "react-router-dom";

interface BreadCrumbSmallProps {
  title: string;
}

const BreadCrumbSmall: FC<BreadCrumbSmallProps> = (props) => {
  return (
    <div className="bg-[#F9F1E7] h-[100px]  flex items-center">
      <div className="flex container mx-auto items-center gap-[30px]">
        <Link
          className="text-customGray1 font-poppins font-normal text-[16px]"
          to="/">
          Home
        </Link>
        <img src={insideImg} alt="insideImg" className="w-[8px] h-[14px]" />
        <Link
          className="text-customGray1 font-poppins font-normal text-[16px]"
          to="/shop">
          Shop
        </Link>
        <img src={insideImg} alt="insideImg" className="w-[8px] h-[14px]" />
        <p className="pl-[30px] border-l-[2px] border-l-customGray1 py-[6px] font-poppins text-[#000000] text-[16px] font-normal">
          {props.title}
        </p>
      </div>
    </div>
  );
};

export default BreadCrumbSmall;
