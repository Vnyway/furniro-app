import React from "react";
import trophyImg from "../../images/trophy-img.png";
import guaranteeImg from "../../images/guarantee-img.png";
import shippingImg from "../../images/shipping-img.png";
import customerImg from "../../images/customer-img.png";

const Benefits: React.FC = () => {
  return (
    <section className="bg-[#FAF3EA]">
      <div className="grid py-[60px] grid-cols-2 md:grid-cols-4 mx-8 min-[500px]:mx-16 md:mx-16 lg:mx-24 2xl:mx-80 gap-[20px] md:gap-[25px]">
        <div className="flex items-center">
          <img
            src={trophyImg}
            alt="trophyImg"
            className="size-[34px] md:size-[40px] lg:size-[60px] mr-[5px]"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-[18px] md:text-[20px] lg:text-[25px]">
              High Quality
            </h3>
            <p className="font-medium text-[#898989] text-[14px] md:text-[16px] lg:text-[20px]">
              crafted from top materials
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={guaranteeImg}
            alt="guaranteeImg"
            className="size-[34px] md:size-[40px] lg:size-[60px] mr-[5px]"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-[18px] md:text-[20px] lg:text-[25px]">
              Warranty Protection
            </h3>
            <p className="font-medium text-[#898989] text-[14px] md:text-[16px] lg:text-[20px]">
              Over 2 years
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={shippingImg}
            alt="shippingImg"
            className="size-[34px] md:size-[40px] lg:size-[60px] mr-[5px]"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-[18px] md:text-[20px] lg:text-[25px]">
              Free Shipping
            </h3>
            <p className="font-medium text-[#898989] text-[14px] md:text-[16px] lg:text-[20px]">
              Order over 150 $
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={customerImg}
            alt="customerImg"
            className="size-[34px] md:size-[40px] lg:size-[60px] mr-[5px]"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-[18px] md:text-[20px] lg:text-[25px]">
              24 / 7 Support
            </h3>
            <p className="font-medium text-[#898989] text-[14px] md:text-[16px] lg:text-[20px]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
