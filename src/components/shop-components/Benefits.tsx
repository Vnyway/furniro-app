import React, { FC } from "react";
import trophyImg from "../../images/trophy-img.png";
import guaranteeImg from "../../images/guarantee-img.png";
import shippingImg from "../../images/shipping-img.png";
import customerImg from "../../images/customer-img.png";

const Benefits: FC = () => {
  return (
    <div className="bg-[#FAF3EA]">
      <div className="grid grid-cols-4 gap-[100px] h-[270px] items-center w-[80%] mx-auto">
        <div className="flex items-center">
          <img
            src={trophyImg}
            alt="trophyImg"
            className="size-[60px] mr-[5px]"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-[25px]">
              High Quality
            </h3>
            <p className="font-medium text-[#898989] text-[20px]">
              crafted from top materials
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={guaranteeImg}
            alt="guaranteeImg"
            className="size-[60px] mr-[5px]"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-[25px]">
              Warranty Protection
            </h3>
            <p className="font-medium text-[#898989] text-[20px]">
              Over 2 years
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={shippingImg}
            alt="shippingImg"
            className="size-[60px] mr-[5px]"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-[25px]">
              Free Shipping
            </h3>
            <p className="font-medium text-[#898989] text-[20px]">
              Order over 150 $
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <img
            src={customerImg}
            alt="customerImg"
            className="size-[60px] mr-[5px]"
          />
          <div>
            <h3 className="font-semibold text-[#242424] text-[25px]">
              24 / 7 Support
            </h3>
            <p className="font-medium text-[#898989] text-[20px]">
              Dedicated support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
