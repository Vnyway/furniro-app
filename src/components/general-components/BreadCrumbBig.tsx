import React from "react";
import backgroundImg from "../../images/bread-crumb-img.png";
import { Link } from "react-router-dom";
import insideImg from "../../images/bread-crumb-inside-img.png";

interface BreadCrumbProps {
  title: string;
}

const BreadCrumbBig: React.FC<BreadCrumbProps> = (props) => {
  return (
    <section
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: "cover",
      }}
      className="h-[200px] md:h-[316px] relative font-poppins text-[#000000]">
      <h1 className="absolute left-[50%] translate-x-[-50%] top-[40%] font-medium text-[32px] md:text-[48px]">
        {props.title}
      </h1>
      <div className="absolute left-[50%] translate-x-[-50%] top-[65%] flex items-center gap-[8px]">
        <Link to="/">
          <h3 className="font-medium text-[12px] md:text-[16px]">Home</h3>
        </Link>
        <img src={insideImg} alt="insideImg" className="w-[6px] md:w-[8px]" />
        <h3 className="font-light text-[12px] md:text-[16px]">{props.title}</h3>
      </div>
    </section>
  );
};

export default BreadCrumbBig;
